
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://php.bjdglt.com:8091',
  timeout: 1000
})

export default instance
