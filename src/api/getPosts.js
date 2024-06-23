import { API_URL } from "@/globals";
import xmlToJson from "./xmlToJson";

const getPosts = () => {
	fetch(API_URL)
		.then(async response => {
			if (!response.ok) {
        throw new Error(`Failed to fetch posts. Status: ${response.status}`);
      }

			const xmlText = await response.text(); 
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
			const jsonData = xmlToJson(xmlDoc);

			return jsonData.items;
		})
		.catch(err => {
			console.error(err);
		});
};

export default getPosts;