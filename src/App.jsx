import './App.css';
import DessertsContainer from './components/DessertsContainer';
import DessertsData from './data.json';
import { useEffect, useState } from 'react';

// Checking if data is saved in localStorage, if not found preprocess Data from json file
function initilizeDesserts() {
	const stored = JSON.parse(localStorage.getItem('Desserts'));

	if (stored) return stored;
	return DessertsData.map((item, index) => {
		return {
			...item,
			id: index,
			image: {
				desktop: item.image.desktop.replace('./assets', ''),
				mobile: item.image.mobile.replace('./assets', ''),
				thumbnail: item.image.thumbnail.replace('./assets', ''),
				tablet: item.image.tablet.replace('./assets', ''),
			},
			quantity: 0,
		};
	});
}

function App() {
	const [desserts, setDesserts] = useState(initilizeDesserts);

	useEffect(() => {
		localStorage.setItem('Desserts', JSON.stringify(desserts));
	}, [desserts]);

	return (
		<main className="app">
			<DessertsContainer desserts={desserts} setDesserts={setDesserts} />
		</main>
	);
}

export default App;
