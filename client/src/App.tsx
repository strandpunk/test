import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavBottomContent from './templates/TopNavBottomContent';
import AuthContextProvider from './contexts/AuthContext';
import DataContextProvider from './contexts/DataContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/signUp';
import React from 'react'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<TopNavBottomContent />} />
          <Route
            path='/'
            element={
              <DataContextProvider>
                <Home />
              </DataContextProvider>
            }
          />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
