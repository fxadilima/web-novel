import React from 'react';
import Step1 from '../cards/Step1';
import KerangkaDasar from '../berita/KerangkaDasar';

const Home = () => {
    return (
        <div className="w3-panel w3-padding-32">
            <div className="w3-row-padding">
                <div className="w3-col m4 l4">
                    <div className="w3-container w3-center">
                        <Step1 />
                    </div>
                    <KerangkaDasar />
                </div>
                <div className="w3-col m8 l8">
                    <h1>About</h1>
                    <p>
                        Aplikasi ini sendiri adalah sebuah website pribadi yang ditulis menggunakan sebuah framework
                        bernama ReactJS (terkait dengan Facebook). Kontennya mengandung artikel mengenai sejarah dan juga 
                        beberapa ulasan atau <em>review</em> mengenai drama yang berlatar belakang sejarah. Ini karena saya memerlukan 
                        topik untuk ditulis, dan cerita sejarah lebih mudah ditulis ketimbang lainnya. Setidaknya bagi saya begitu.
                    </p>
                    <p>
                        <strong>Note: </strong>Ini baru ditulis dan update melalui GitHub.
                    </p>
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