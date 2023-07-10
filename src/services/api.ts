import axios from 'axios'

let baseURL
if (process.env.NODE_ENV !== 'production') {
  baseURL = 'http://localhost:3333/'
} else {
  baseURL = 'https://json-server-vercel-tau-nine.vercel.app/'
}

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // example to use cors
    'Access-Control-Allow-Headers': '*', // example to use cors
  },
})
