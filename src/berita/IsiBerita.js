import React from 'react';
//import { ReactDOM } from 'react-dom/client';

import { Outlet, Link } from 'react-router-dom';

const IsiBerita = () => {
    return (
        <div className="w3-container w3-padding-32">
            <h1>Isi Berita</h1>
            <p>
                Cek situs di <a href="https://dunia-timur.netlify.app">Netlify</a>.<br/>
            </p>
            <p>
                Netlify by default treating warning as error, kalau ada build failed cek di lokal
                apakah ada salah satu reference yang tidak dipakai (akan mengakibatkan warning).
                Ini sekedar link supaya reference yang ada dipakai:<br/>
                <Link to="/berita">Berita</Link>
            </p>
            <Outlet />
        </div>
    );
}

export default IsiBerita;

