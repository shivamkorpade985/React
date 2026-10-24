
const App = () => {

    const user = {
        name : "Shivam",
        age : 21 ,
        education : "B.Tech"
    }

    localStorage.setItem('user',JSON.stringify(user));

    const usera = localStorage.getItem('user')
    console.log(usera);
    
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
