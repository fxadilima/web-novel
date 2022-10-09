import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Step1 = () => {
    return (
        <div className="w3-card-4 w3-round w3-border">
            <img src="/images/step1.jpg" alt="Step 1"/>
            <div className="w3-container">
                <p>
                    Tahap pertama dari aplikasi ini di halaman Home.
                    Sekarang kelihatannya <strong>Header</strong> sudah diganti.
                    Card ini sendiri datangnya dari folder bernama "cards" dalam source,
                    dengan JS file bernama Step1.js. Isinya hanya 1 function, yaitu "Step1".
                </p>
                <p>
                    Bagian ini bisa dibaca lebih lanjut di <Link to="/blogs">Blogs</Link>.
                </p>
                <Outlet />
            </div>
        </div>
    );
}

export default Step1;

