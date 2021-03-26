const apiURL = 'https://bookshelf.jk/api'
const authURL = 'http://localhost:8000/auth'
// const apiURL = 'https://jsonplaceholder.typicode.com'

// Simple API Client
// takes endpoint and config as params
// returns a Promise
const client = async (endpoint, conf, auth=false) => {
  const config = {
    method: 'GET',
    ...conf
  }

  console.log('auth: ', auth);

  return window.fetch(`${auth ? authURL : apiURL}/${endpoint}`, config)
    .then(async res => {
      if(res.status === 401) {
        return Promise.reject({message: 'Authentication required.'})
      }
      const data = await res.json()
      if(res.ok) {
        return data
      }
      else {
        return Promise.reject(data)
      }
    })
}

export {client}