import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http//localhost:5000',
})
export default class API {
    static async getMessage(id) {
        const resp = await axios.get('/api/Messanger/${di}')
        return resp.data
    }

    static async sendMessage(UserName, MessageText) {
        await axios.post('/api/Messanger', {
            MessageText,
            UserName,
        })
    }
}