import {ActionsType} from "../models/actionsType";
export interface Action {
    type: ActionsType;
    payload?: any;
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}
