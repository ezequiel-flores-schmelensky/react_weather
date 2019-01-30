import { SET_CITY } from './../actions';

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload } //estado anterios mas el valor de la acción
        default:
            return state;
    }
}