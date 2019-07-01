import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-axios-609af.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
