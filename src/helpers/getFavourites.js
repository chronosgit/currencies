
const getFavourites = () => {
	const keys = Object.keys(localStorage);
	const items = [];

	keys.forEach(key => {
		if(key.startsWith('post_')) {
			const item = localStorage.getItem(key);
			items.push(JSON.parse(item));
		}
	});

	return items;
};

export default getFavourites;