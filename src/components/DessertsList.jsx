import './DessertsList.css';
import DessertsCard from './DessertsCard';

function DessertsList({ desserts, setDesserts }) {
	const items = desserts.map((item) => {
		return <DessertsCard key={item.id} itemData={item} desserts={desserts} setDesserts={setDesserts} />;
	});

	return (
		<div className="list">
			<h1 className="heading">Desserts</h1>
			<div className="cards-container">{items}</div>
		</div>
	);
}

export default DessertsList;
