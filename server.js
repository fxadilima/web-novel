const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'react')));

/* Ini perlu supaya kita bisa mengakses alamat semacam localhost:9000/shang dari
browser. Meskipun kalau diakses melalui klik pada aplikasi akan selalu ketemu.

- app.get('/', function (req, res)

*/

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'react', 'index.html'));
});

app.listen(3000);
