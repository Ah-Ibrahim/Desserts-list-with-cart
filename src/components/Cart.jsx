import './Cart.css';
import EmptyCart from '../assets/images/illustration-empty-cart.svg';

function Cart({ Deserts, setDeserts }) {
	const selectedItems = Deserts.filter((item) => item.quantity > 0);
	const totalQuantity = selectedItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

	if (totalQuantity > 0) {
		return (
			<aside className="cart-container">
				<h2 className="cart-container__heading">Your Cart ({totalQuantity})</h2>
				<div className="cart-container__body"></div>
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
