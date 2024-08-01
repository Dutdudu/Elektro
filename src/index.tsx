import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Erro from './pages/erro/erro'
import Cadastro from './pages/cadastro/cadastro';
import Cadastro2 from './pages/cadastro2/cadastro2';
import Parabens from './pages/parabens/parabens';
import Erro2 from './pages/erro2/erro2';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/erro' element={<Erro/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/cadastro2' element={<Cadastro2/>} />
          <Route path='/parabens' element={<Parabens/>} />
          <Route path='/erro2' element={<Erro2/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
