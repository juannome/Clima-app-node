const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encoudedUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encoudedUlr}&appid=b0bd3658c76d364d0253f311a1670b47&units=metric`

    });
    const respuesta = await instance.get();
    if (respuesta.data.length === 0) {
        throw new Error(`no hay resultados ${dir}`);
    }

    const data = respuesta.data;
    const direccion = data.name;
    const latitud = data.coord.lat;
    const longitud = data.coord.lon;

    return {
        direccion,
        latitud,
        longitud,

    };
};

module.exports = {
    getLugarLatLng
};