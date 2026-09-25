import axios from 'axios'

const city = process.argv.slice(2).join(' ').trim()

if (!city) {
  console.error('Error: Please provide city name')
  console.log('Usage: node weather.js <city_name>')
  console.log("Example: node weather.js 'Khon Kaen'")
  console.log('Note: Use quotes for city names with spaces')
  process.exit(1)
}

const apiKey = process.env.WEATHER_API_KEY

if (!apiKey) {
  console.error('Error: WEATHER_API_KEY is not set')
  console.log('Get a free key from https://www.weatherapi.com/')
  process.exit(1)
}

const getWeather = async () => {
  try {
    const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: apiKey,
        q: city,
        aqi: 'no'
      },
      timeout: 10000
    })

    const { location, current } = response.data
    console.log(`Current temperature in ${location.name} is ${current.temp_c}°C`)
    console.log(`Weather condition: ${current.condition.text}`)
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message
    console.error(`Error: Unable to get weather for "${city}"`)
    console.error(`Reason: ${message}`)
    process.exit(1)
  }
}

getWeather()
