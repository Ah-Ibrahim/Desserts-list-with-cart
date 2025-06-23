import './DesertsCard.css';
import addToCartImg from '../assets/images/icon-add-to-cart.svg';
import iconIncrement from '../assets/images/icon-increment-quantity.svg';
import iconDecrement from '../assets/images/icon-decrement-quantity.svg';
import { useEffect } from 'react';

function DesertsCardButton({ count = 0, onClick, children }) {
	if (!count) {
		return (
			<button className="btn btn--main" onClick={onClick}>
				<img className="img" src={addToCartImg} /> {children}
			</button>
		);
	} else {
		return (
			<div className="btns-container">
				<button className="btn btn--icon" aria-label="Decrement Button">
					<img src={iconDecrement} alt="Decrement Icon" />
				</button>
				<div className="btns-container__count">{count}</div>
				<button className="btn btn--icon" aria-label="Increment Button">
					<img src={iconIncrement} alt="Increment Icon" />
				</button>
			</div>
		);
	}
}

// NOTE: Item Data
// const itemData = {
// 	id: 0,
//  imgSrc : '',
// 	category: '',
// 	name: '',
// 	price: 0,
// 	quantity: 0,
// };

function DesertsCard({ itemData }) {
	console.log(itemData);
	const itemId = itemData?.id ?? 0;
	const itemImgSrc = itemData?.imgSrc ?? {};
	const itemCategory = itemData?.category ?? 'Unknown';
	const itemName = itemData?.name ?? 'Unknown';
	const itemPrice = itemData?.price ?? 0;
	const itemQuantity = itemData?.quantity ?? 0;

	const handleClick = function () {};

	return (
		<div className="item">
			<div className={`item__figure ${itemQuantity ? 'item__figure--selected' : ''}`}>
				<img src={itemImgSrc} alt="Item Image" />
				<DesertsCardButton onClick={handleClick}>Add to Cart</DesertsCardButton>
			</div>
			<div className="item__desc">
				<div className="category">{itemCategory}</div>
				<div className="name">{itemName}</div>
				<div className="price">${itemPrice.toFixed(2)}</div>
			</div>
		</div>
	);
}

export default DesertsCard;
