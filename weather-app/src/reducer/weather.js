import { initialState } from "../store";

export const weatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FILL_WEATHER':
         return{
             ...state,
             data:action.payload
         }
        case 'FILL_WEATHER_LOADING':
            return{
                ...state,
                loading:action.payload,
            }
        case 'FILL_WEATHER_ERROR':
            return{
                ...state,
                error:action.payload
            }
    }
}