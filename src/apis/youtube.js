import axios from 'axios';

const KEY = 'AIzaSyAvTKeqJNLVv0__BiaqPvB1BT3CZxTF700'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
})
