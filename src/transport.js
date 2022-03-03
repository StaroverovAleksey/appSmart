import md5 from "md5";
import {API_CHARACTER_INFO, API_CHARACTERS, API_PROTOCOL, API_ROOT, PRIVATE_KEY, PUBLIC_KEY} from "./constants";

class Transport {
    constructor() {
        this.ts = new Date().getTime();
        this.hash = md5(this.ts + PRIVATE_KEY + PUBLIC_KEY);
    }

    fetchData = async (endPoint, params = {}) => {

        let url = `${API_PROTOCOL}://${API_ROOT}/${endPoint}?ts=${this.ts}&apikey=${PUBLIC_KEY}&hash=${this.hash}`;
        Object.entries(params).forEach(([key, value]) => {
            url += `&${key}=${value}`;
        });

        const response = await fetch(url);
        if (response.status !== 200) {
            return (response.status);
        }
        return await response.json();
    }

    getCharacters = async (limit, offset) => {
        const data = await this.fetchData(API_CHARACTERS, {limit, offset});
        if (data.data && data.data.results) {
            return data.data.results;
        } else {
            return []
        }
    }
    
    getCharacterInfo = (id) => {
        return this.fetchData(API_CHARACTER_INFO, {id});
    }
}

export default new Transport();