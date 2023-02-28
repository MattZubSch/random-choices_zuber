import { SELECTED_NUMBER_TOP } from "../actions/rndNumberTop.action"

const initialState = {
    numberTop: 100,
    selected: null,
}

const RndNumberTopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_NUMBER_TOP:
            return {...state, selected: action.numberTop}
    
        default:
            return state
    }
}

export default RndNumberTopReducer