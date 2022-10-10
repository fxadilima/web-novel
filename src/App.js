import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages//Blogs';
import People from './pages/People';
import Isi from './berita/Isi';
import NoPage from './pages/NoPage';
import IsiBerita from './berita/IsiBerita';
import Sejarah from './berita/Sejarah';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="people" element={<People />} />
          <Route path="berita" element={<Isi />}>
            <Route index element={<IsiBerita />} />
            <Route path="sejarah" element={<Sejarah />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
