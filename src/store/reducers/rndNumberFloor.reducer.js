import { SELECTED_NUMBER_FLOOR } from "../actions/rndNumberFloor.action"

const initialState = {
    numberFloor: 0,
    selected: null,
}

const RndNumberFloorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_NUMBER_FLOOR:
            return {...state, selected: action.numberFloor}
    
        default:
            return state
    }
}

export default RndNumberFloorReducer