import './DesertsContainer.css';
import DesertsList from './DesertsList';

function DesertsContainer() {
	return (
		<section className="container">
			<DesertsList />
			<aside>
				<Cart />
			</aside>
		</section>
	);
}

export default DesertsContainer;
