import axios from 'axios'

const URLs = process.env.VUE_APP_URL

export function sendsms(data) {
    return axios({
      url:URLs+'/sendsms',
      method:'post',
      withCredentials:true,
      data
    })
} 