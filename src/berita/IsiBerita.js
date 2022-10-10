import React from 'react';
//import { ReactDOM } from 'react-dom/client';

import { Outlet, Link } from 'react-router-dom';

const IsiBerita = () => {
    return (
        <div className="w3-container w3-padding-32">
            <h1>Isi Berita</h1>
            <Link to="/berita/sejarah"></Link>
            <Outlet />
        </div>
    );
}

export default IsiBerita;

