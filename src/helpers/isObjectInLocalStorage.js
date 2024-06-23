
const isObjectInLocalStorage = (obj) => {
	const item = localStorage.getItem(`post_${obj.id}`);

	return item != null;
};

export default isObjectInLocalStorage;