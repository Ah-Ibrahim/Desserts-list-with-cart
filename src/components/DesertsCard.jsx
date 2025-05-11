import './DesertsCard.css';
import addToCartImg from '../assets/images/icon-add-to-cart.svg';

function DesertsCardButton({ count = 1, onClick, children }) {
	if (count) {
		return (
			<button className="btn" onClick={onClick}>
				<img className="img" src={addToCartImg} /> {children}
			</button>
		);
	} else {
		return <div className="btn"></div>;
	}
}

function DesertsCard({ count = 0, itemData }) {
	const itemCategory = itemData?.image?.thumbnail ?? 'Unknown';
	const itemName = itemData?.name ?? 'Unknown';
	const itemPrice = itemData?.price ?? 0;
	const itemImgSrc = itemData?.image?.thumbnail;

	const handleClick = function () {};

	return (
		<div className="item">
			<div className="item__img">
				<img src={itemImgSrc} alt="Item Image" />
				<DesertsCardButton onClick={handleClick}>Add to Cart</DesertsCardButton>
			</div>
			<div className="item__desc">
				<div className="category">{itemCategory}</div>
				<div className="name">{itemName}</div>
				<div className="price">{itemPrice}</div>
			</div>
		</div>
	);
}

export default DesertsCard;
