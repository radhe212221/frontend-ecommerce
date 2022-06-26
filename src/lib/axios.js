import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000'
  });
  
  const AUTH_TOKEN=`bearer ${localStorage.getItem("token")||''}`
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


  export default instance