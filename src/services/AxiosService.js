import axios from 'axios'

export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 10008
})
