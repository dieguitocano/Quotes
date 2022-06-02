import { useState } from 'react'
import users from './json/users.json'
import './App.css'
import Card from './components/Card'


const arrayColors = [
  '#F4B52E', '#DFEB45', '#423D96', '#43627E', '#78F5CD'
]


function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)

  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }


  const [userRandom, setUserRandom] = useState(getElementRandom(users))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))


  const clickButton = () => {
    setUserRandom(getElementRandom(users))
    setColorRandom(getElementRandom(arrayColors))
  }
  
  const appStyle ={
    backgroundColor: colorRandom,

  }

  return (
    <div style={appStyle} className="App">
      <Card
         userRandom={userRandom} 
         colorRandom={colorRandom}
         clickButton={clickButton}
      />
      
    
    </div>
  )
}

export default App
