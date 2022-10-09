import React from 'react';

const Blogs = () => {
    return (
        <div className="w3-panel w3-padding-16">
            <h1>Blogs</h1>
            <p>
                Sepertinya kita tidak bisa menggunakan <strong>SQLite</strong> dengan leluasa, karena memerlukan &nbsp;
                <em>backend</em> berupa native library. Dan kita tidak tahu jelas apakah host yang akan menampung tulisan ini 
                mendukungnya. Yang jelas Glitch mendukung, tetapi sejauh ini belum dipastikan bagaimana memakainya. Otomatis
                urusan blog agak terganggu. Untuk sementara bagian ini bisa diisi untuk hal lain.
            </p>
        </div>
    )
};

export default Blogs;

