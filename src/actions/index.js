import {SET_COUNTDOWN, SET_THEME} from "./types";

export const setCountdown = (event) => {
    return {
        type: SET_COUNTDOWN,
        event
    }
};

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        theme
    }
};