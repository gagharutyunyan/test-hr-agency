import { httpClient } from '../httpClient'

export const articlesApi = {
  get: (payload = {}) => {
    const { id = '', ...params } = payload
    return httpClient.get(`article/${id}`, { params }).then((res) => res.data)
  },
  post: (params) => {
    return httpClient.post('article', params)
  },
}
