import axios from 'axios';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as api from '../config'
import { rootReducer } from './root-reducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancers(
    applyMiddleware(thunk.withExtraArgument({
        client: axios,
        api,
    }))
))

export {store};