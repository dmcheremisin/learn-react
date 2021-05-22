import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID woPT9Nl9p3dQLG4ZYNlniW-h8ZiNE45qpt8-kZtMAKA',
    }
})
