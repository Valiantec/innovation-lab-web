import axios from 'axios';
import config from '../../config';

export default {
    suggestion: {
        getAll: async () => {
            return axios.get(`${config.backendUri}/suggestions`);
        },
        addSuggestion: async (name, suggestion) => {
            return axios.post(`${config.backendUri}/suggestions/add`, {name, suggestion});
        }
    }
};
