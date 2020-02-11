import axios from 'axios'

const loginRequest = axios.create({
    baseURL:process.env.VUE_APP_URL,
    
withCredentials:true,
})




 export function login(data) {
    return loginRequest({
      url:'/login',
      method:'post',
     
      data
    })
}

// export function login (data) {
//     return axios({
//       url:URLs+'/login',
//       method:'post',
//       withCredentials:true,
//       data
//     })
  
//   }