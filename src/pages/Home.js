import React from 'react';
import Step1 from '../cards/Step1';

const Home = () => {
    return (
        <div className="w3-panel w3-padding-32">
            <div className="w3-row-padding">
                <div className="w3-col m4 l3 w3-border">
                    <h3>Tentang Aplikasi</h3>
                    <p>
                        Aplikasi ini sendiri dibangun menggunakan jasa ReactJS, yang berarti kita akan menggunakan 
                        <em>single page</em>, tanpa beranjak dari halaman ini sendiri, kecuali kalau membuat link keluar
                        dengan sengaja. Gambar berikut adalah tampilan menu aplikasi dalam tahap 1.
                    </p>
                    <div className="w3-container w3-center">
                        <Step1 />
                    </div>
                    <p>
                        Yang kita lakukan saat ini hanyalah berusaha membuat komponen-komponen yang <em>reusable</em>,
                        seperti contohnya gambar di atas berikut tombolnya. Card tersebut dengan mudah bisa dipakai ulang 
                        di tempat lain dengan hanya menulis sedikit kode.
                    </p>
                </div>
                <div className="w3-col m8 l9">
                    <h1>Home</h1>
                    <p>Testing ambil gambar dari static.</p>
                </div>
            </div>
        </div>
    )
};

export default Home;

/**
 * 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

 */