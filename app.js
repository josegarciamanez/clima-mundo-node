const axios = require('axios')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

let encodeUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyBdrk_BY_noe1tVeV3rNLJYg8QRYk44uCo`)
    .then(resp => {
        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log('Dirección: ', location.formatted_address);
        console.log('lat', coors.lat);
        console.log('lng', coors.lng);


        // console.log(JSON.stringify(resp.data, undefined, 2));

    })
    .catch(e => console.log('Error!!!!:', e));