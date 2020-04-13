import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class AxiosController {
    setBaseUrl = () => axios.defaults.baseURL = 'http://10.0.2.2:8000' + '/api/v1/';
    getAxiosInstace = () => axios;
    deleteToken = async () => {
        await AsyncStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

     isTokenExists = () => {
         return new Promise((resolve, reject) => {
             AsyncStorage.getItem('token')
                 .then(res => {
                     if (res !== null) {
                         resolve(res);
                     } else {
                         resolve(false);
                     }
                 })
                 .catch(err => reject(err));
         });
     };
    
    saveToken = async token => {
        await AsyncStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.common['WWW-Authenticate'] = `Bearer ${token}`;
    };

    setAuthHeader = (token) => {
        return new Promise((resolve, reject) => {
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                resolve();
            }
            reject();
        })
    };
}

export const axiosController = new AxiosController();
