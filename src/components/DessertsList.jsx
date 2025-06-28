import './DessertsList.css';
import DessertsCard from './DessertsCard';

function DessertsList({ Desserts, setDesserts }) {
	const items = Desserts.map((item) => {
		return <DessertsCard key={item.id} itemData={item} setDesserts={setDesserts} />;
	});

	return (
		<div className="list">
			<h1 className="heading">Desserts</h1>
			<div className="cards-container">{items}</div>
		</div>
	);
}

export default DessertsList;
