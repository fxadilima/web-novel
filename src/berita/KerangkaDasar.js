import React from 'react';

const KerangkaDasar = () => {
    return (
        <div className="w3-panel">
            <h3>Kerangka Dasar Aplikasi Tahap 1</h3>
            <p>
                Pada dasarnya entry point dari aplikasi ini berada dalam index.html,
                kalau kita menempatkan file HTML lain di dalam folder "public", maka hanya 
                bisa diakses melalui link biasa, yaitu element "a", dengan "href", karena dianggap berada 
                di luar scope.
            </p>
            <p>
                Tiga tombol yang berada di paling atas setiap halaman mengacu ke aplikasi React.
            </p>
        </div>
    );
}

export default KerangkaDasar;
