import {createStore, combineReducers} from 'redux'
import RndNumberFloorReducer from './reducers/rndNumberFloor.reducer'
import RndNumberTopReducer from './reducers/rndNumberTop.reducer'

const RootReducer = (combineReducers) ({
    numberFloor: RndNumberFloorReducer,
    numberTop: RndNumberTopReducer,
})  

export default createStore(RootReducer)