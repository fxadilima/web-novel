import React from 'react';
import {
    Outlet,
    Link
} from 'react-router-dom';

const Isi = () => {
    return (
        <div className="w3-container w3-padding-32">
            <h1>Ini Halaman Berita</h1>
            <p>
                Perhatikan bahwa isi halaman (sebetulnya function) ini akan tetap ada meskipun dari address bar browser 
                kita sudah berpindah tempat, asalkan masih tetap berada di scope /berita/*.
            </p>
            <p>
                Referensi link berikut hanya "sejarah", yang diletakkan di bawah Route bernama "berita".<br/>
                <Link to="sejarah">Sejarah</Link>
            </p>
            <Outlet />
        </div>
    );
}

export default Isi;
