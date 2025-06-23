import './DesertsCard.css';
import addToCartImg from '../assets/images/icon-add-to-cart.svg';

function DesertsCardButton({ quantity, onClick, children }) {
	if (!quantity) {
		return (
			<button className="btn btn--main" onClick={onClick}>
				<img className="img" src={addToCartImg} /> {children}
			</button>
		);
	} else {
		return (
			<div className="btns-container">
				<button className="btn btn--icon" aria-label="Decrement Button">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
						<path d="M0 .375h10v1.25H0V.375Z" />
					</svg>
				</button>
				<div className="btns-container__quantity">{quantity}</div>
				<button className="btn btn--icon" aria-label="Increment Button">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
						<path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
					</svg>
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

function DesertsCard({ itemData, setDeserts }) {
	// console.log(itemData);
	const itemId = itemData?.id ?? 0;
	const itemImgSrc = itemData?.image?.desktop ?? {};
	const itemCategory = itemData?.category ?? 'Unknown';
	const itemName = itemData?.name ?? 'Unknown';
	const itemPrice = itemData?.price ?? 0;
	const itemQuantity = itemData?.quantity ?? 0;

	const handleClick = function () {};

	return (
		<div className="item">
			<div className={`item__figure ${itemQuantity ? 'item__figure--selected' : ''}`}>
				<img src={itemImgSrc} alt="Item Image" />
				<DesertsCardButton onClick={handleClick} quantity={itemQuantity}>
					Add to Cart
				</DesertsCardButton>
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
