import * as usersAPI from './users-api'

export async function signUpUser(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token',token)
//   return token
  return getUser();
}


export const getToken = () =>{
    // getItem returns null if there's no string 
    const token = localStorage.getItem('token');
    if(!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split(".")[1]));
    if(payload.exp < Date.now() / 1000){
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token')
      return null;
    }
    return token;
}


export const getUser = () =>{
 const token = getToken();
 // If there is a token, return the user in the payload, otherwise return null
 return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export const logOut = () =>{
    localStorage.removeItem('token')
}

export async function login(credentials) {

  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  console.log(token)
  //   return token
  return getUser();
}


export const checkToken = async ()=>{
    //    return usersAPI.checkToken()
    const dateStr = await usersAPI.checkToken();
    return new Date(dateStr)
    // .then(dateStr => new Date(dateStr));
}