import './App.css';
import DessertsContainer from './components/DessertsContainer';
import DessertsData from './data.json';
import { useEffect, useState } from 'react';

// Checking if data is saved in localStorage, if not found preprocess Data from json file
function initilizeDesserts() {
	const storedQuantities = JSON.parse(localStorage.getItem('dessertsQuantities')) ?? {};

	const desserts = DessertsData.map((item, index) => {
		return {
			...item,
			id: index,
			image: {
				desktop: item.image.desktop.replace('./assets', ''),
				mobile: item.image.mobile.replace('./assets', ''),
				thumbnail: item.image.thumbnail.replace('./assets', ''),
				tablet: item.image.tablet.replace('./assets', ''),
			},
			quantity: storedQuantities[index] ?? 0,
		};
	});

	return desserts;
}

function App() {
	const [desserts, setDesserts] = useState(initilizeDesserts);

	useEffect(() => {
		const quantities = {};

		desserts.forEach((item) => {
			if (item.quantity > 0) {
				quantities[item.id] = item.quantity;
			}
		});

		localStorage.setItem('dessertsQuantities', JSON.stringify(quantities));
	}, [desserts]);

	return (
		<main className="app">
			<DessertsContainer desserts={desserts} setDesserts={setDesserts} />
		</main>
	);
}

export default App;
