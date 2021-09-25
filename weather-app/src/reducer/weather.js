import { initialState } from "../store";

 const weatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FILL_WEATHER':
         return{
                ...state,
                city:action.payload
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
            default:
                return state
    }
}
export default weatherReducer
// export type AppState = ReturnType<typeof weatherReducer>;