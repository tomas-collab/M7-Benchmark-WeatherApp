
import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { weatherReducer } from '../reducer/weather'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const initialState={
    weather:{
        data:[],
        loading:true,
        error:false
    }
}
const hugeReducer = combineReducers({
  
    weather:weatherReducer
})


const configureStore = createStore(
    hugeReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)
export default configureStore