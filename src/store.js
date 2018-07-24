import rootReducer from "./reducers";
import {applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import createStore from "redux/src/createStore";
import {persistStore} from "redux-persist";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            createLogger(),
        )
    )
);

persistStore(store,null);

export default store;
