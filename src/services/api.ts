import axios from 'axios'

let baseURL
if (process.env.NODE_ENV !== 'production') {
  baseURL = 'http://localhost:3333/'
} else {
  baseURL = 'https://json-server-vercel-tau-nine.vercel.app/'
}

export const api = axios.create({
  baseURL,
})

api
  .get('/')
  .then((response) => console.info(response.data))
  .catch((err) =>
    console.warn('Não foi possivel se conectar com a API, \n\n', err),
  )
