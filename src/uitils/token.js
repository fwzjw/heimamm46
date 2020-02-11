 
 const TOKENKEY = 'heimammToken'
 
 
 
 export function setToken(token) {
    window.localStorage.setItem( TOKENKEY,token)
 }
 export function getToken() {
     return  window.localStorage.getItem( TOKENKEY)
 }
 export function removeToken() {
    return  window.localStorage.removeItem( TOKENKEY)
 }