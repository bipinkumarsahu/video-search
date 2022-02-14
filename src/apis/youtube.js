import axios from 'axios'
const KEY = 'AIzaSyBcl3ssoJEZxyUIG7K1L1AXp46H3iHDjew';

axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part:'snippet',
        maxResults: 5,
        key=KEY
    }
});