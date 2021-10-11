import axios from 'axios'

export default class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/users'
        })
    }

    allUsers = () => this.app.get('/')
}

