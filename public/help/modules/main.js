import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";
import {compile} from './@mdx-js/mdx';

showIntro = async () => {
  let elm = document.getElementById("maybe");
  let x = await fetch("https://dunia-timur.netlify.app/help/alt/deno.mdx");
  let mdxSrc = await x.text();

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

  let code = await compile(mdxSrc, {outputFormat: 'function-body'});
  console.log(String(code));
  let html = await renderToString(String(code));
  console.log(html);
  document.getElementById("results").innerHTML = html;
}

showIntro();
