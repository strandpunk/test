import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext';
import DataContextProvider from './contexts/DataContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import React from 'react'
import './App.css'
import Layout from './templates/Layout';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                // <DataContextProvider>
                  <Home />
                // </DataContextProvider>
              }
            />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
