import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header />

      <div className="next-s-container">
        <div className="next-s-header">
          <h2>Next Session</h2>
          <i>Admin Icon</i>
        </div>
        <div className="next-s-content">
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <i>Icon</i>
              <h3>Date</h3>
            </div>
            <p>Thu, Sept 15</p>
          </div>
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <i>Icon</i>
              <h3>Time</h3>
            </div>
            <p>16:00 - 21:00</p>
          </div>
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <i>Icon</i>
              <h3>Host</h3>
            </div>
            <p>Alejandra</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
