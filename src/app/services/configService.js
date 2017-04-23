import axios from 'axios';
import styleData from '../../../mockup/styledata.json';

export default class ConfigService {

  get (params) {
    return axios.get('./assets/styledata.json', { params: params })
      .then(results => {
        return results.data;
      })
      .catch(error => {
        // webpack will convert json data into javascript
        //    so no need to parse
        return styleData;
      });
  }

}
