import './Cart.css';
import EmptyCart from '../assets/images/illustration-empty-cart.svg';

function Cart({ desserts, setDesserts }) {
	const selectedItems = desserts.filter((item) => item.quantity > 0);
	const totalQuantity = selectedItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
	const totalPrice = selectedItems.reduce(
		(accumulator, item) => accumulator + Number.parseFloat((item.price.toFixed(2) * item.quantity).toFixed(2)),
		0
	);

	const handleClick = function (itemId) {
		setDesserts(
			desserts.map((item) => {
				if (item.id === itemId) {
					item.quantity = 0;
				}

				return item;
			})
		);
	};

	const items = selectedItems.map((item) => {
		return (
			<div key={item.id} className="cart-item">
				<div className="cart-item__info">
					<div className="heading">{item.name}</div>
					<div className="body">
						<div className="quantity">{item.quantity}x</div>
						<div className="price">@ ${item.price.toFixed(2)}</div>
						<div className="price price--total">${(item.price.toFixed(2) * item.quantity).toFixed(2)}</div>
					</div>
				</div>
				<button
					className="btn btn--remove"
					onClick={() => {
						handleClick(item.id);
					}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
						<path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
					</svg>
				</button>
			</div>
		);
	});

	if (totalQuantity > 0) {
		return (
			<aside className="cart-container">
				<h2 className="cart-container__heading">Your Cart ({totalQuantity})</h2>
				<div className="cart-container__body">
					{items}
					<div className="order">
						<div className="order__text">Order Total</div>
						<div className="order__price">${totalPrice.toFixed(2)}</div>
					</div>
					<div className="card">
						<div className="card__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="20"
								fill="none"
								viewBox="0 0 21 20">
								<path
									fill="#1EA575"
									d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
								/>
								<path
									fill="#1EA575"
									d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
								/>
							</svg>
						</div>
						<div className="card__text">
							This is a <span className="highlight">carbon-neutral</span> delivery
						</div>
					</div>
					<button className="btn btn--confirm">Confirm Order</button>
				</div>
			</aside>
		);
	} else if (totalQuantity === 0) {
		return (
			<aside className="cart-container">
				<h2 className="cart-container__heading">Your Cart ({totalQuantity})</h2>
				<div className="cart-container__desc">
					<img className="empty-cart" src={EmptyCart} alt="Empty Cart Image" />
					<div className="text">Your added items will appear here</div>
				</div>
			</aside>
		);
	} else {
		throw new Error('Unexpected Quantity Value!');
	}
}

export default Cart;
