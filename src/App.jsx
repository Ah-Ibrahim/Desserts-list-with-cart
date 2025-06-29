import './App.css';
import DessertsContainer from './components/DessertsContainer';
import DessertsCard from './components/DessertsCard';
import DessertsData from './data.json';
import { useState } from 'react';

function App() {
	// Preprocessing Data from json file
	const [Desserts, setDesserts] = useState(
		DessertsData.map((item, index) => {
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
		})
	);
	console.log(Desserts);

	return (
		<main className="app">
			<DessertsContainer Desserts={Desserts} setDesserts={setDesserts} />
		</main>
	);
}

export default App;
