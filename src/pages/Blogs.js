import React from 'react';
import Peristiwa from '../cards/Ancients';
import {Outlet, Link} from 'react-router-dom';

const AplikasiTahap1 = () => {
    return (
        <div className="w3-container" id="aplikasiTahap1">
            <h2>Aplikasi Tahap 1</h2>
            <p>
                Pada tahap ini kita masih menjelajahi kemungkinan-kemungkinan baru yang unik untuk mengembangkan
                aplikasi, tetapi kita tentunya memerlukan sebuah topik. Sejarah dipilih karena pembahasannya lumayan mudah,
                saya sendiri adalah penggemar cerita sejarah, karenanya mengisi konten akan relatif mudah untuk saya.
            </p>
            <p>
                Target akhir adalah memuatnya ke suatu host yang seharusnya banyak diakses orang karena sudah populer, misalnya Firebase atau Netlify.
                Untuk sebuah aplikasi yang pada dasarnya terdiri dari <em>static pages</em>, meskipun dibuat dengan JavaScript, perbedaan 
                antar host sebenarnya kurang signifikan, tetapi sebaiknya kita memilih host yang memungkinkan kita menggunakan JavaScript di sisi 
                server, karena nantinya akan sangat berguna.
            </p>
            <p>
                Cara menuliskan beberapa elemen HTML agak berubah kalau menggunakan React, misalnya sebuah <em>anchor</em>, yang berisi link ke salah satu 
                tempat, harus kita tulis sebagai <pre>&lt;<code>Link</code>&gt;</pre> dan bukannya <pre>&lt;<code>a</code>&gt;</pre>. Juga 
                dalam penulisan atribut untuk sebuah <code>tag</code>, kita harus lebih hati-hati, karena beberapa istilah sebetulnya konflik dengan 
                natur dari React, terutama sekali "class", untuk ini istilah yang dipakai adalah "className".
            </p>
            <p>
                Sebuah tautan yang merujuk ke <em>virtual DOM</em> seperti <Link to="/people">Link ke People</Link> tidak sama dengan tautan yang merujuk ke tempat lain di luar route dari React. 
            </p>
            <Outlet />
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
                <div className="w3-col m9 l9" id="adegan_ritual">                    
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

