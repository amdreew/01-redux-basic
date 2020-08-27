import {ActionsType} from "../models/actionsType";
import {Action} from "../ngrx/ngrx";

export const incrementarAction: Action = {
    type: ActionsType.INCREMENTAR
}
export const sumarAction: Action= {
    type: ActionsType.SUMAR,
    payload: 5
}
