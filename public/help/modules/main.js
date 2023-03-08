//import React from 'https://esm.sh/react';
//import { renderToString } from 'https://esm.sh/react-dom/server';

let elm = document.getElementById("maybe");
let mdxSrc = await fetch("/help/alt/deno.mdx")
.then(x => x.text())
.then((y) => { return y;});
elm.innerHTML = `
<div class="w3-container w3-card-4">
  <div class="w3-panel w3-blue">
    <h3>Dynamic</h3>
  </div>
  <div class="w3-container">
    <p>
      Konten ini datang dari module eksternal.
    </p>
    <pre><code>${mdxSrc}</code></pre>
  </div>
</div>
`;
