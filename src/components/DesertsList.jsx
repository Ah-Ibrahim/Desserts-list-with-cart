import './DesertsList.css';
import DesertsCard from './DesertsCard';

function DesertsList({ list }) {
	const items = list.map((item, index) => {
		<li key={index}>
			<DesertsCard />
		</li>;
	});

	return (
		<div>
			<h1>Deserts</h1>
			<ul>{items}</ul>
		</div>
	);
}

export default DesertsList;
