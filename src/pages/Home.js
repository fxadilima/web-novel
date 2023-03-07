import React, {useState, useEffect} from 'react';
import * as runtime from 'react/jsx-runtime';
import {compile, run} from '@mdx-js/mdx';
import Step1 from '../cards/Step1';
import KerangkaDasar from '../berita/KerangkaDasar';

const Home = () => {
    let [home, setHome] = useState(null);

    const getData = async () => {
        let str1 = await fetch("/mdx/intro.mdx").then(x => x.text()).then(async (y) => {
            let code = await compile(y, {outputFormat: 'function-body'});
            const {default: Content} = await run(code, runtime);
            setHome(Content());
            return Content();
        });

        return str1;
    };

    useEffect(() => {
        getData();
    }, []);

    if (!home) {
        return null;
    }

    return (
        <div className="w3-panel w3-padding-32">
            <div className="w3-row-padding">
                <div className="w3-col m5 l2">
                    <div className="w3-container w3-center">
                        <Step1 />
                    </div>
                    <KerangkaDasar />
                </div>
                <div className="w3-col m7 l10">
                    {home}
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