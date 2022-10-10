import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Sejarah = () => {
    return (
        <div className="w3-container w3-padding-32">
            <h1>Sejarah</h1>
            <p>
                Kalau sudah mendeklarasikan import, harus dipakai, karena Netlify secara default menganggap warning 
                sebagai error. Agak malas mencari-cari setting untuk mengubahnya. Karena itu tombol ini ada di sini, toh nantinya kita 
                akan memakai reference tersebut.
            </p>
            <p>
                <div className="w3-bar">
                    <Link className="w3-bar-item w3-btn" to="/berita/sejarah">Sejarah</Link>
                    <Link className="w3-bar-item w3-btn" to="/people">People</Link>
                </div>
            </p>
        </div>
    );
}

export default Sejarah;
