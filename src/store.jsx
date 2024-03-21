import { createStore } from "redux"
import counterReducer from './services/counterReducer/counterReducer';

const store = createStore(counterReducer);


export default store;