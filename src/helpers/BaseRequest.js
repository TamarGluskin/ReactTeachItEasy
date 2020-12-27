
import axios from 'axios';

//ho' to do hoptzionaly-parm
const baseURL = "http://localhost:3001/"


export function post(url, body) {
    return axios.post(`${baseURL}${url}`, body).then((res) => {
        console.log(res)
        return res.data;
    }).catch((error) => {

        console.log(error);
    })
}
export function get(url) {
    return axios.get(
        `${baseURL}${url}`).then((res) => {
            console.log(res)
            return res.data;
        }).catch(error => console.log(error));
}