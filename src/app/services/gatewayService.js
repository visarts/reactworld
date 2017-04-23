import axios from 'axios';


export default class GatewayService {

  get (params) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1', { params: params })
      .then(results => {
        return results.data;
      })
      .catch(error => {
        if (error.response) {
          return error.response
        } else {
          return error.message;
        }
      });
  }

}
