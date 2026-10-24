
import axios from 'axios'
import { useState } from 'react'


const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setData(response.data)
  }
  return (
    <div>
      <h1>App</h1>     
      <button onClick={getData}>Get Data</button> 
      <div>
        {data.map(
          (elem,idx) => {
            return <h3 key={idx}>Hello {idx}</h3>
          }
        )}
      </div>
    </div>
  )
}

export default App
