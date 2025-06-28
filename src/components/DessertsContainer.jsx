import Cart from './Cart';
import './DessertsContainer.css';
import DessertsList from './DessertsList';

function DessertsContainer({ Desserts, setDesserts }) {
	return (
		<section className="container">
			<DessertsList Desserts={Desserts} setDesserts={setDesserts} />
			<Cart Desserts={Desserts} setDesserts={setDesserts} />
		</section>
	);
}

export default DessertsContainer;
