import './App.css';
import DesertsContainer from './components/DesertsContainer';
import DesertsCard from './components/DesertsCard';
import DesertsData from './data.json';
import { useState } from 'react';

function App() {
	// Preprocessing Data from json file
	const [Deserts, setDeserts] = useState(
		DesertsData.map((item, index) => {
			return {
				...item,
				id: index,
				image: {
					desktop: item.image.desktop.replace('./assets', ''),
					mobile: item.image.mobile.replace('./assets', ''),
					thumbnail: item.image.thumbnail.replace('./assets', ''),
					tablet: item.image.tablet.replace('./assets', ''),
				},
				// TODO: Remove Random Generation
				quantity: Math.random() > 0.5 ? 1 : 0,
			};
		})
	);
	console.log(Deserts);

	return (
		<main className="app">
			<DesertsContainer Deserts={Deserts} setDeserts={setDeserts} />
		</main>
	);
}

export default App;
