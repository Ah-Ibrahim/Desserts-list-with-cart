import './DessertsList.css';
import DessertsCard from './DessertsCard';

function DessertsList({ desserts, onUpdateDessert }) {
	const items = desserts.map((item) => {
		return <DessertsCard key={item.id} itemData={item} desserts={desserts} onUpdateDessert={onUpdateDessert} />;
	});

	return (
		<div className="list">
			<h1 className="heading">Desserts</h1>
			<div className="cards-container">{items}</div>
		</div>
	);
}

export default DessertsList;
