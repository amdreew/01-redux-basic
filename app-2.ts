import {Action, Reducer} from "./ngrx/ngrx";
import {contadorReducer} from "./app-1";
import {incrementarAction} from "./contador/contador.actions";


export class Store<T> {
    constructor(
        private reducer: Reducer<T>,
        private _state:  T
    ) {
    }
    public set state(value: T) {
        this._state = value;
    }
    public get state(): T {
        return this._state;
    }
    public dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(contadorReducer, 10);
console.log(store.state);
store.dispatch(incrementarAction);
console.log(store.state);
