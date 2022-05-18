import * as APIManager from '../api/manager';
import { getDateFromDateTime, getCurrentDate } from '../utility';

import { 
    FETCH_WEATHER,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL,
} from './types';

const RESULT_LIMIT = 4;

function arrayContains (needle, haystack) {
    let exist = false;

    haystack.forEach(e => {
        if (getDateFromDateTime(needle) === getDateFromDateTime(e.dt_txt) && !exist) {
            exist = true;
        }
    });

    return exist;
}

function processResponse(response) {
    let w = [];
    response.list.forEach(element => {
        let d = getDateFromDateTime(element.dt_txt);

        if (d !== getCurrentDate() && w.length < RESULT_LIMIT) {
            let dateAlreadyExist = arrayContains(element.dt_txt, w);

            if (!dateAlreadyExist) {
                w.push(element);
            }
        }
    });
    return w;
}

export const clearProps = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_WEATHER });
    };
}

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch({ type: FETCH_WEATHER });

        return APIManager.fetchWeather(city)
            .then(response => {
                if (response.message) {
                    fetchWeatherFail(dispatch, response.message);
                } else {
                    fetchWeatherSuccess(dispatch, processResponse(response));
                }
            })
            .catch(error => {
                if (!error) {
                    fetchWeatherFail(dispatch, 'Something unexpected occured. Please try again.');
                } else {
                    fetchWeatherFail(dispatch, error);
                }
            });
    };
};

const fetchWeatherSuccess = (dispatch, response) => {
    dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: response
    });
};

const fetchWeatherFail = (dispatch, error) => {
    dispatch({
        type: FETCH_WEATHER_FAIL,
        payload: error
    });
};
