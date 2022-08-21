const key = 'keyherepleasedontforget';

//get weather information

const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `?apikey=${key}&a=${city}`;

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
 .then(data => console.log(data))
 .catch(err => console.log(err));
