import {combineReducers} from 'redux'
import * as actionType from '../actions/types';
import purple from '@material-ui/core/colors/purple'
import Colors from "@material-ui/core/colors"


const eventInit = {};
const event = (state = {}, action) => {
    switch (action.type) {
        case actionType.SET_COUNTDOWN:
            return action.event;
        default:
            return state;
    }
};

const UIThemeInit = {
    primary: {
        main: purple[800],
    },

    secondary: {
        main: '#008B8B',
    }
};

const UITheme = (state = UIThemeInit, action) => {
    switch (action.types) {
        case actionType.SET_THEME:
            return action.theme;
        default:
            return state;
    }
};

const appReducer = combineReducers({
    event,
    UITheme,
});

const rootReducer = (state, action) => {
    return appReducer(state,action);
};

export default rootReducer;