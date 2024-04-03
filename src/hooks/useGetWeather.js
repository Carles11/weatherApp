import { useState, useEffect } from 'react'

import * as Location from 'expo-location'
// import { EXPO_PUBLIC_WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      console.log({ response })
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const setCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    }

    setCurrentLocation()
  }, [lat, lon])
  return [loading, error, weather]
}
