import {createStore, combineReducers} from 'redux'
import RndNumberFloorReducer from './reducers/rndNumberFloor.reducer'
import RndNumberTopReducer from './reducers/rndNumberTop.reducer'

const RootReducer = (combineReducers) ({
    numberTop: RndNumberTopReducer,
    numberFloor: RndNumberFloorReducer,
})  

export default createStore(RootReducer)