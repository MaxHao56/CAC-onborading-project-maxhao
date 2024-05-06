import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Front from './pages/Front.tsx';
import Tripcreation from './pages/Tripcreation.tsx';
import Tripdelete from './pages/Tripdelete.tsx';
import Tripupdate from './pages/Tripupdate.tsx';
import Selection from './pages/Selection.tsx';
import Pageview from './pages/Pageview.tsx'
import Auth from './pages/authentication/Auth.tsx';
import Signup from './pages/authentication/Signup.tsx';
import ErrorPage from './pages/404/404.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Front />}/>
        <Route path="home" element={<Home />} />
        <Route path="selection" element={<Selection />} />
        <Route path="creation" element={<Tripcreation />} />
        <Route path="delete" element={<Tripdelete />} />
        <Route path="update" element={<Tripupdate />} />
        <Route path="pageview" element={<Pageview />} />
        <Route path='login' element ={<Auth/>}/>
        <Route path='signup' element ={<Signup/>}/>
        <Route path='404' element ={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
