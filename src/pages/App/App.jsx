import { useState } from 'react'
import './App.css'
import Header from '../../components/header/Header'
import Session from '../../components/session/Session'
import Footer from '../../components/footer/Footer'
import CharacterList from '../../components/characterList/CharacterList'

function App() {

  return (
    <div className="app">
      <Header />

      <Session />

      <CharacterList />

      <Footer activeIcon={"home"}/>
    </div>
  )
}

export default App
