import * as API from './constants';

/** Home > Search Weather by City */

export function fetchWeather(city) {
    // https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=008d6bbae9b4f19eb5668d677e6b4bd3
    var url = `${API.FETCH_WEATHER}?q=${city}&appid=${API.APP_ID}`;
    
    return fetch(url, get())
        // .then(response => response.json())
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
}

export function get() {
    return {
        method: 'GET',
    }
}