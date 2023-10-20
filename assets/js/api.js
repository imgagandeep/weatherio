/**
 * @fileoverview All api related stuff like api_key, api request etc.
 */

"use strict";
import API_KEY from "./keys.js";

/**
 * fetch data from server
 * @param { string } URL API URL
 * @param { Function } callback Callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => callback(data));
};

export const url = {
    currentWeather(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/weather?id=524901&${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/forecast?id=524901&${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?id=524901&${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?id=524901&${lat}&${lon}&limit=5`;
    },
    /**
     * @param {string} query Search query else.g.: "London", "New York"
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?id=524901&q=${query}&limit=5`;
    },
};
