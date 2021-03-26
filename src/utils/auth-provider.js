const authURL = 'http://localhost:8000/auth'
const localStorageKey = 'userToken'

const handleUserResponse = (data) => {
  window.localStorage.setItem(localStorageKey, data.token)
  return data
}

const login = ({username, password}) => {
  return client('login', {username, password}).then(handleUserResponse)
}

const client = async (endpoint, data) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-type': 'application/json'}
  }

  return window.fetch(`${authURL}/${endpoint}`, config)
    .then(async res => {
      const data = await res.json()
      if(res.ok) {
        return data
      }
      else {
        return Promise.reject(data)
      }
    })
}

export {login}