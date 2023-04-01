import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '../public/cptutors.png'
import './App.css'
import Header from './component/Header/Header'
import BlogPage from './component/BlogPage/BlogPage'
import QusAnswer from './component/QusAnswer/QusAnswer'

function App() {

  return (
    <div className="App">
      
      <Header></Header>
      <BlogPage></BlogPage>
      <QusAnswer></QusAnswer>
      
    </div>
  )
}

export default App
