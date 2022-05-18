import { 
    FETCH_WEATHER,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
 } from '../actions/types';

const INITIAL_STATE = { 
    error: '', 
    weather: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...INITIAL_STATE }
        case FETCH_WEATHER_SUCCESS:
            return { ...INITIAL_STATE, weather: action.payload }
        case FETCH_WEATHER_FAIL:
            return { ...INITIAL_STATE, error: action.payload }
        default:
            return state;
    }
};
