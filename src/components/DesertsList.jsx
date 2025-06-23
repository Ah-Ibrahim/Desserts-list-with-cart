import './DesertsList.css';
import DesertsCard from './DesertsCard';

const itemData = {
	id: 1,
	imgSrc: '/',
	category: 'Waffle',
	name: 'Waffle with Berries',
	price: 6.5,
	quantity: 0,
};

function DesertsList({ list }) {
	// const items = list.map((item, index) => {
	// 	<li key={index}>
	// 		<DesertsCard />
	// 	</li>;
	// });

	return (
		<div>
			<h1>Deserts</h1>
			{/* <ul>{items}</ul> */}
			<DesertsCard itemData={itemData} />
		</div>
	);
}

export default DesertsList;
