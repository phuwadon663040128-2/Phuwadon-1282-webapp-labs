import axios from 'axios'
import express from 'express'

const app = express()
const PORT = 8082

app.get('/ip', async (req, res) => {
  try {
    const response = await axios.get('https://httpbin.org/ip', {
      timeout: 10000
    })
    const ip = response.data.origin

    console.log(`IP address fetched: ${ip}`)
    res.json({ ip, source: 'httpbin.org' })
  } catch (error) {
    console.error(`Failed to fetch IP address: ${error.message}`)
    res.status(500).json({
      error: 'Failed to fetch IP address',
      message: error.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
