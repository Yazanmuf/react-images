import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3c4b3d92c230741ad63101de58fab2126e86e6a4fa4da7aafbca9e2fed94f97b'
    }


});