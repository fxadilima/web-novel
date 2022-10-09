import React from 'react';
import Step1 from '../cards/Step1';

const Home = () => {
    return (
        <div className="w3-panel w3-padding-32">
            <div className="w3-row-padding">
                <div className="w3-col m4 l3">
                    <Step1 />
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