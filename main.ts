import {contadorReducer} from "./app-1";
import * as action from "./contador/contador.actions";
import {Store, createStore} from 'redux'
const store: Store = createStore(contadorReducer);
store.subscribe(() => {
    console.log('state: '+store.getState());
});
store.dispatch(action.incrementarAction)

