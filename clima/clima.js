const axios = require('axios')

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6583876280f112240d54a34537a6ba4a`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}