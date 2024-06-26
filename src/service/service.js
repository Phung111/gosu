import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

const service = {
  getHome: async () => {
    return await axiosClient.get(`https://gamocorp.com/api/settings-page?page=Home`)
  },
  getLife: async () => {
    return await axiosClient.get(`https://gamocorp.com/api/settings-page?page=Life`)
  },

  getWorld: async () => {
    return await axiosClient.get(`https://gamocorp.com/api/settings-page?page=World`)
  },
  getNews: async () => {
    return await axiosClient.get(`https://gamocorp.com/api/settings-page?page=Term+and+Cond`)
  },
  getAllGames: async () => {
    return await axiosClient.get(`https://gamocorp.com/api/all-games`)
  },
  getPosts: async (string) => {
    return await axiosClient.get(`https://gamocorp.com/api/all-posts?${string}`)
  },
  loadMore: async (string) => {
    return await axiosClient.get(`https://gamocorp.com/api/all-posts?${string}`)
  },
  getCategories: async (string) => {
    return await axiosClient.get(`https://gamocorp.com/api/all-categories`)
  },
  getPostDetail: async (string) => {
    return await axiosClient.get(`https://gamocorp.com/api/post/${string}`)
  },
  likePost: async (idPost) => {
    return await axiosClient.post(`https://gamocorp.com/api/post/like/${idPost}`)
  },
}

export default service
