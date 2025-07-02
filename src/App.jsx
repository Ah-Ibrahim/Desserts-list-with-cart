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

	const updateDessertQuantity = function (id, quantity) {
		setDesserts(
			desserts.map((item) => {
				if (item.id === id) {
					item.quantity = Math.max(0, quantity);
				}

				return item;
			})
		);
	};

	const clearDessertsQuantity = function () {
		setDesserts(
			desserts.map((item) => {
				item.quantity = 0;

				return item;
			})
		);
	};

	return (
		<main className="app">
			<DessertsContainer
				desserts={desserts}
				onUpdateDessert={updateDessertQuantity}
				onClearDesserts={clearDessertsQuantity}
			/>
		</main>
	);
}

export default App;
