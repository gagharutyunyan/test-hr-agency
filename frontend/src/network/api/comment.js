import { httpClient } from '../httpClient'

export const commentsApi = {
  get: (payload = {}) => {
    return httpClient.get(`comment`, { params: payload }).then((res) => res.data)
  },
  post: (payload) => {
    return httpClient.post('article', payload)
  },
}
