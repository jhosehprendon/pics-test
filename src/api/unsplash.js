import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 1bbbd06750c9d4348bb06dcfc318155b195047e318f5e9724f056f3b5272a519'
    }
})