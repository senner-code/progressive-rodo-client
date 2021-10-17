import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:5000/'
}

export const $api:AxiosInstance = axios.create(config)

