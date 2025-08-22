import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App/App.jsx'
import CharacterDetail from './pages/characterDetail/CharacterDetail.jsx'
import './index.css'
import LoginPage from './pages/loginPage/LoginPage.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import SettingsPage from './pages/settingsPage/SettingsPage.jsx'
import ChatPage from './pages/chatPage/ChatPage.jsx'
import DiceRollPage from './pages/diceRoll/DiceRollPage.jsx'

const CLIENT_ID = "541205041480-18htddhfc83duor5neq2qhhc9r4bbf0i.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <BrowserRouter>

          <Routes>

            <Route path="/*" element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            } />

            <Route path="/character/:id" element={
              <PrivateRoute>
                <CharacterDetail />
              </PrivateRoute>
            } />

            <Route path="/settings" element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            } />

            <Route path="/chat" element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            } />

            <Route path="/roll" element={
              <PrivateRoute>
                <DiceRollPage/>
              </PrivateRoute>
            } />

            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
