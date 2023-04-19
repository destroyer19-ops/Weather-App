const API_KEY = '525bfd69161e4a29a11b1dd723f8c6b1'

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormatedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);
        // console.log(data);

    //object destructuring
    const { 
        weather,
        main: { temp, feels_like, temp_min, temp_max,
            pressure, humidity },
        wind: { speed },
        sys: { country },
        name, 
    } = data;
    const { description, icon } = weather[0];
console.log(data);
    return {
        description, 
        iconURL: makeIconUrl(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max,
        pressure, 
        humidity, 
        speed, 
        country, 
        name,
    }
};

export { getFormatedWeatherData };