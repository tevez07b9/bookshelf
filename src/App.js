import React, { useState, useEffect } from 'react'
import {client} from './utils/api-client'
import Guest from './components/Guest'

function App() {

  const [testData, setTestData] = useState()

  useEffect(() => {
    // getTestData()
  }, [])

  const getTestData = async () => {
    let data = null

    data = await client('todos')
      .then(data => setTestData(data))
      .catch(err => setTestData(err))
    return data
  }

  console.log(testData)

  return (
    <div>
      <Guest />
    </div>
  );
}

export default App
