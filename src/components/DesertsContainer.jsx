import Cart from './Cart';
import './DesertsContainer.css';
import DesertsList from './DesertsList';

function DesertsContainer({ Deserts, setDeserts }) {
	return (
		<section className="container">
			<DesertsList Deserts={Deserts} setDeserts={setDeserts} />
			<Cart Deserts={Deserts} setDeserts={setDeserts} />
		</section>
	);
}

export default DesertsContainer;
