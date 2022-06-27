import './App.css';
import PaginaFeed from './components/common/PaginaFeed/PaginaFeed';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom'
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { PaginaCadastro } from './components/common/PaginaCadastro/PaginaCadastro.js';
import { PaginaLogin } from './components/common/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null)

function App() {
  let [token, setToken] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaFeed/>}></Route>
          <Route path="/register" element={<PaginaCadastro/>}></Route>
          <Route path ="/post" element={<PaginaPostar/>}></Route>
          <Route path="/login" element={<PaginaLogin/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
