import {createStore} from 'redux';

export const store = createStore(() => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//Para que funcione la extensión

