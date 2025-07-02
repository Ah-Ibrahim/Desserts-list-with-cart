import { useEffect, useState } from 'react';
import Cart from './Cart';
import './DessertsContainer.css';
import DessertsList from './DessertsList';
import ConfirmOrder from './ConfirmOrder';

function DessertsContainer({ desserts, onUpdateDessert, onClearDesserts }) {
	const [isModalShown, setIsModalShown] = useState(false);

	useEffect(() => {
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				setIsModalShown(false);
			}
		});
	}, []);

	// TODO
	const handleCartConfirm = function () {
		setIsModalShown(true);
	};

	const handleNewOrder = function (confirmed = false) {
		// User clicked start new order
		if (confirmed) {
			onClearDesserts();
		}

		setIsModalShown(false);
	};

	return (
		<section className="container">
			<DessertsList desserts={desserts} onUpdateDessert={onUpdateDessert} />
			<Cart desserts={desserts} onUpdateDessert={onUpdateDessert} onCartConfirm={handleCartConfirm} />
			{isModalShown && <ConfirmOrder onNewOrder={handleNewOrder} desserts={desserts} />}
		</section>
	);
}

export default DessertsContainer;
