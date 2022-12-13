const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=549f0011831f2be2e8ca8ec5a0285ad3&query=' + encodeURIComponent(latitude) + 
    ',' + encodeURIComponent(longitude) + '&units=m'
        
    request({url, json: true}, (error, { body } = {}) => {  
        if (error) {
            callback('Unable to connect to forecast service!', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates. Try another search !', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees out. And it feels like ' + body.current.feelslike + ' degrees.')
        }
    })

}

module.exports = forecast