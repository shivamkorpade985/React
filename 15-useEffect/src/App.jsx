import { useEffect, useState } from "react"

const App = () => {

    const [num, setNum] = useState(10)
    const [num2, setNum2] = useState(100)
    useEffect(function(){
        console.log("use effect is running");
    },[num])

    return (
    <div>
      
      <h3>{num}</h3>
      <h3>{num2}</h3>
      <button onMouseEnter={ 
        () => {
        setNum(num + 1)
      }}
      onMouseLeave={() =>{
        setNum2(num2 + 10)
      }
      }>Get data</button>
    </div>
  )
}

export default App
