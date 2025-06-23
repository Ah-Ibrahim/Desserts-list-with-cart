import './App.css';
import DesertsContainer from './components/DesertsContainer';
import DesertsCard from './components/DesertsCard';

const itemData = {
	id: 1,
	imgSrc: '/images/image-waffle-desktop.jpg',
	category: 'Waffle',
	name: 'Waffle with Berries',
	price: 6.5,
	quantity: 0,
};

function App() {
	return (
		<main className="app">
			<DesertsCard itemData={itemData} />
		</main>
	);
}

export default App;
