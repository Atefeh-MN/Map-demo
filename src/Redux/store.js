import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import fileReducer from './fileReducer';


const store = createStore(fileReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;