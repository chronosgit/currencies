// import { API_URL } from "@/globals";
const API_URL = '/api/vercelFetchPosts.js';
import xmlToJson from "../helpers/xmlToJson";

const getPosts = () => {
  return new Promise((res, rej) => {
    fetch(API_URL)
      .then(async response => {
        if(!response.ok) {
          throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const jsonData = xmlToJson(xmlDoc);
        console.log(xmlText);
        res(jsonData.items);
      })
      .catch(err => {
        rej(err);
      });
  });
};

export default getPosts;