import React from 'react';
import Peristiwa from '../cards/Ancients';

const AplikasiTahap1 = () => {
    return (
        <div className="w3-container" id="aplikasiTahap1">
            <h2>Aplikasi Tahap 1</h2>
            <p>
                Ceritakan detil mengenai aplikasi ini dalam tahap awal pengembangannya.
            </p>
        </div>
    );
}

const Blogs = () => {
    return (
        <div className="w3-container w3-padding-32">
            <h1>Blogs</h1>
            <p>
                Sepertinya kita tidak bisa menggunakan <strong>SQLite</strong> dengan leluasa, karena memerlukan &nbsp;
                <em>backend</em> berupa native library. Dan kita tidak tahu jelas apakah host yang akan menampung tulisan ini 
                mendukungnya. Yang jelas Glitch mendukung, tetapi sejauh ini belum dipastikan bagaimana memakainya. Otomatis
                urusan blog agak terganggu. Untuk sementara bagian ini bisa diisi untuk hal lain.
            </p>
            <div class="w3-row-padding">
                <div className="w3-col m3 l3">
                    <Peristiwa id="1" />
                </div>
                <div className="w3-col m9 l9">
                    <h2>Dinasti Shang</h2>
                    <p>
                        Ritual Dinasti Shang yang diilustrasikan oleh drama <strong>Investiture of The Gods (2019)</strong>,
                        sepintas lalu mirip dengan <em>shamanisme</em>. Dalam ritual semacam ini mereka tidak hanya mengorbankan
                        hewan sebagai persembahan, tetapi juga manusia. Biasanya manusia yang dijadikan kurban persembahan adalah 
                        para narapidana yang dianggap pantas menerima hukuman mati.
                    </p>
                </div>
            </div>

            <AplikasiTahap1 />

        </div>
    )
};

export default Blogs;

