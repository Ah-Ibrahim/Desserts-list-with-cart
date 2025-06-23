import './DesertsList.css';
import DesertsCard from './DesertsCard';

function DesertsList({ Deserts, setDeserts }) {
	const items = Deserts.map((item) => {
		return <DesertsCard key={item.id} itemData={item} setDeserts={setDeserts} />;
	});

	return (
		<div className="list">
			<h1 className="heading">Desserts</h1>
			<div className="cards-container">{items}</div>
		</div>
	);
}

export default DesertsList;
