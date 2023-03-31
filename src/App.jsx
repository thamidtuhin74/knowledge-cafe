import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '../public/cptutors.png'
import './App.css'
import Header from './component/Header/Header'
import BlogPage from './component/BlogPage/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header></Header>
      <BlogPage></BlogPage>
      
    </div>
  )
}

export default App
