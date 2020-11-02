const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const { argv } = require("./config/yargs");

// console.log(argv.direccion);
// lugar.getLugarLatLng(argv.direccion)

// .then() //console.log)
//     .catch(); //console.log);


// clima.getClima(latitud, longitud)
//     .then(console.log)
//     .catch(console.log);

clima.getInfo(argv.direccion, clima.dir)
    .then((resp) => console.log(`El clima de ${argv.direccion} es de: ${resp} grados`))
    .catch(console.log);