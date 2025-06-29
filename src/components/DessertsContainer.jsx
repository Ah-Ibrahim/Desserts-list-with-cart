import Cart from './Cart';
import './DessertsContainer.css';
import DessertsList from './DessertsList';

function DessertsContainer({ desserts, setDesserts }) {
	return (
		<section className="container">
			<DessertsList desserts={desserts} setDesserts={setDesserts} />
			<Cart desserts={desserts} setDesserts={setDesserts} />
		</section>
	);
}

export default DessertsContainer;
