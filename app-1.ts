import {ActionsType} from "./models/actionsType";
import {Action} from "./ngrx/ngrx";

export function contadorReducer(state = 10, action: Action) {
    switch (action.type) {
        case ActionsType.INCREMENTAR:
            return state += 1;
        case ActionsType.SUMAR:
            return state += action.payload;
        default:
            return state;
    }
}
