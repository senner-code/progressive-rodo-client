import axios, {AxiosInstance} from "axios";
import {UserRes} from "../service/user.service";
export const API_URL = 'http://localhost:5000';

const $api:AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})



$api.interceptors.request.use((config => {
  // @ts-ignore
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}))

$api.interceptors.response.use((config => {
  return config
}),async (error) => {

  if(error.response.status !== 401){
    throw error
  }
  const originalRequest = error.config
  originalRequest.credentials = 'include'
  if(error.response.status === 401 && error.config && !error.config._isRetry && originalRequest.credentials === 'include') {
    originalRequest._isRetry = true
    const response:UserRes = (await axios.get(`${API_URL}/user/refresh`, {
      withCredentials: true
    })).data
    localStorage.setItem('token', response.tokens.accessToken)
    return $api.request(originalRequest)
  }

})



export default $api