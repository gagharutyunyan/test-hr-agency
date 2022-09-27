import axios from 'axios'
import { baseURL } from '../utils/consts'
import { decamelizeKeys } from 'humps'
import { stringify } from 'query-string'

const httpClient = axios.create({
  baseURL,
  paramsSerializer: (params) => {
    let serializerParams = {
      ...decamelizeKeys(params),
    }

    return stringify(serializerParams)
  },
})

export { httpClient }
