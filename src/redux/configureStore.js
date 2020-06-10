import { createStore } from 'redux';
import { Reducer , initialState } from './redux';
console.log(Reducer);
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState,
    );
    return store;
}