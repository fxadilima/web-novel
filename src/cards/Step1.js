import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Step1 = () => {
    return (
        <div className="w3-card-4 w3-round w3-border">
            <img src="/images/step1.jpg" alt="Step 1" width="175px"/>
            <div className="w3-container">
                <p>
                    <Link to="/blogs#aplikasiTahap1" className="w3-btn w3-black w3-hover-blue">Aplikasi Tahap 1</Link>
                </p>
                <Outlet />
            </div>
        </div>
    );
}

export default Step1;

