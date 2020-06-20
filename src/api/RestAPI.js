import BaseUrl from './BaseUrl';
import axios from 'axios';

const getUrl = BaseUrl.url;
const RestAPI = {
    doRestAPI: function (url, method, request, callback) {
        let requestInfo = {
            method:method
        };
        axios(url, requestInfo).then(
            res => {
                callback(res.data);
            }
        ).catch(err => {
            console.log(err);
        })
    },
    getHomeList: function (postFix,callback) {
        let url = getUrl + postFix;
        this.doRestAPI(url,'Get', null, callback);
    },
    getProductDetails: function (id, callback) {
        let url = getUrl + "products/" + id;
        this.doRestAPI(url, 'GET',null,callback);
    }
}

export default RestAPI;