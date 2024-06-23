const getPageLabels = (pagesQuant) => {
	const indexes = [];
	let pageIndex = 5;
	let fives = Math.ceil(pagesQuant / 5);

	for(let i = 0; i < fives; i++) {
		indexes.push(pageIndex);
		pageIndex += 5;
	}
	
	return indexes;
};

export default getPageLabels;