const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=b0bd3658c76d364d0253f311a1670b47&units=metric`);
    return resp.data.main.temp;
};
const getInfo = async(dir) => {
    const resp2 = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=b0bd3658c76d364d0253f311a1670b47&units=metric`);
    return resp2.data.main.temp;

};

module.exports = {
    getClima,
    getInfo
};