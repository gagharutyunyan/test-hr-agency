import axios from 'axios'
import { baseURL } from '../utils/consts'

const httpClient = axios.create({
  baseURL,
})

export { httpClient }
