import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class AxiosController {
    setBaseUrl = () => axios.defaults.baseURL = 'http://10.0.2.2:8000' + '/api/v1/';
    getAxiosInstace = () => axios;
    deleteToken = async () => {
        await AsyncStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    isTokenExists = async () => {
        return await AsyncStorage.getItem('token', (error, result) =>{
            return result;
        });
    };
    
    saveToken = async token => {
        await AsyncStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };
    setAuthHeader = (token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    };
}

export const axiosController = new AxiosController();
