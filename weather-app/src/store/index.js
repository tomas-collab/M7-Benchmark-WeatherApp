
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'

import thunk from 'redux-thunk'
import weatherReducer from '../reducer/weather'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

console.log('process',process.env)
export const initialState={

        city:[],
        loading:true,
        error:false,
 
}
// const bigReducer = combineReducers({
//     city:weatherReducer,
// })

const configureStore = createStore(
    weatherReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)
export default configureStore





