

export const fillWeatherAction = (query,metrics)=>{

  console.log('query',query)
    return async(dispatch,getState)=>{
        try {
            let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${metrics}&APPID=67b85ad588b7a77330f69a6edbe7ce31`)
            if (resp.ok) {
              let city = await resp.json()
              console.log('weather',city)
                dispatch({
                  type: 'FILL_WEATHER_LOADING',
                  payload: false,
                })
              dispatch({
                type: 'FILL_WEATHER_ERROR',
                payload: false,
              })
              dispatch({
                type: 'FILL_WEATHER',
                payload:city,
              })
            } else {
              console.log('error')
                dispatch({
                  type: 'FILL_WEATHER_LOADING',
                  payload: false,
                })
                dispatch({
                  type: 'FILL_WEATHER_ERROR',
                  payload: true,
                })
            }
          } catch (error) {
            console.log(error)
              dispatch({
                type: 'FILL_WEATHER_LOADING',
                payload: false,
              })
              dispatch({
                type: 'FILL_WEATHER_ERROR',
                payload: true,
              })
     
          }
    }
}