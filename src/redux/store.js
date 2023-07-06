import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import  thunkMiddleware  from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//esta linea es para conectar
//con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // ESTA LINEA ES PARA PODER HACER PETIXIONES A UN SERVER
);

export default store;