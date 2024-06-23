const xmlToJson = (xml) => {
	const items = [];
	const productNodes = xml.querySelectorAll('item');
	let id = 0;

	productNodes.forEach(node => {
		id++;
		const fullname = node.querySelector('fullname').textContent.trim();
		const title = node.querySelector('title').textContent.trim();
		const descr = parseFloat(node.querySelector('description').textContent.trim());
		items.push({ id, fullname, title, descr });
	});

	return { items };
};

export default xmlToJson;