
export default async (request, context) => {
    let strSearch = "<strong>Null</strong>";
    let url = new URL(request.url);
    let tmp = url.searchParams.get('mdx');
    let mdxSrc = "";
    if (tmp !== null) {
        strSearch = tmp.toString();
        //const compiled = await compile(await fs.readFile('/mdx/EdgeFunction.mdx'));
        //strSearch = Server.renderToString(String(compiled));
        mdxSrc = await fetch("https://dunia-timur.netlify.app/help/deno.mdx")
        .then(x => x.text()).then((y) => { return y;});
        strSearch = "<div><pre><code>" + mdxSrc + "</code></pre></div>";
    }
    const html = `
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Sejarah | Help</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <link rel="icon" href="/favicon.ico">
            <script src="https://kit.fontawesome.com/acda0af544.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <main class="w3-main w3-padding" id="main">
                <div class="w3-container" id="content">
                    <h1>Hello Edge Function</h1>
                    <p>This page is the <strong>Response</strong>.</p>
                    <p>Searching: ${strSearch}</p>
                    <p><a href="/">Back</a></p>
                    <div class="w3-content" id="maybe"></div>
                </div>
            </main>
            <script src="/help/modules/main.js"></script>
        </body>
    </html>`;
    return new Response(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
    });
};

export const config = { 
    path: "/hello-edge" 
};

/*
import React from 'https://esm.sh/react'
import { renderToReadableStream } from 'https://esm.sh/react-dom/server'
import type { Config, Context } from 'https://edge.netlify.com/'

export default async function handler(req: Request, context: Context) {
  const stream = await renderToReadableStream(
    <html>
      <title>Hello</title>
      <body>
        <h1>Hello {context.geo.country?.name}</h1>
      </body>
    </html>,
  )

  return new Response(stream, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  })
}

export const config: Config = {
  path: "/hello"
}

We do not use this

Bootstrap crashed on Deno
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

*/
