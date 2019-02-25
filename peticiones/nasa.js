const request = require('request');

const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-02-18&end_date=2019-02-22&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i'
request.get(URL,(err,response,body) => {
    const json = JSON.parse(body)
    const arrayFechas = Object.keys(json.near_earth_objects)
    //console.log(arrayFechas);
    for(let i = 0; i < arrayFechas.length; i++){
        const arrayAestreoide = json.near_earth_objects[arrayFechas[i]]
        for(let j = 0; j < arrayAestreoide.length; j++){
            if (arrayAestreoide[j].is_potentially_hazardous_asteroid){
                console.log(arrayAestreoide[j].name);
            }
        }
    }
})