// users-api.js
import sendRequest from './send-requests'
// This is the base path of the Express route we'll define
const BASE_URL = "/api/users";


export const signUp = (userData) =>{
    return sendRequest(BASE_URL, 'POST', userData);
}


export const login = (credentials) =>{
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}


export const checkToken = () =>{
    return sendRequest(`${BASE_URL}/check-token`);
}
















// export async function signUp(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData),
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error("Invalid Sign Up");
//   }
// }


// export async function login(credentials){
//   // Fetch uses an option object as a second arg to make req other than GET/send 
//   const res = await fetch(`${BASE_URL}/login`,{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(credentials)
//   });
//   if(res.ok){
//     // Promise to resolve JWT
//     return res.json();
//   }else{
//     throw new Error('invalid')
//   }
// }