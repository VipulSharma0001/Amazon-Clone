import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/clone-30032/us-central1/api',
   // Replace with your Firebase project's endpoint
});

export default instance;
