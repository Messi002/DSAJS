const key = 'keyherepleasedontforget';

//get weather information

const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const res = await fetch(base + query);

    const data = await res.json();
    return data[0];

}



//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&a=${city}`;

    const res = await fetch(base + query);

    const data = await res.json();

    return data[0]
}


getCity('manchester')
 .then(data => {
    return getWeather(data.Key)
 })
 .then( data )
 .catch(err => console.log(err));
