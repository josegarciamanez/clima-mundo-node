const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp)
    })
    .catch(e => console.log(e))

clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(temp))
    .catch(e => console.log(e))

// PETICION http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=6583876280f112240d54a34537a6ba4a