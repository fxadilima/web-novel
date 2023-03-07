
export default async (request, context) => {
    let strSearch = "<strong>Null</strong>";
    let tmp = url.searchParams.get('mdx');
    if (tmp !== null) {
        strSearch = tmp.toString();
        //const compiled = await compile(await fs.readFile('/mdx/EdgeFunction.mdx'));
        //strSearch = Server.renderToString(String(compiled));
    }
    const html = `
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Sejarah</title>
            <link href="/styles/w3.css" rel="stylesheet">
            <link rel="icon" href="/favicon.ico">
            <script src="https://kit.fontawesome.com/acda0af544.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <main class="w3-main w3-row-padding">
                <div class="w3-container w3-card-4">
                    <h1>Hello Edge Function</h1>
                    <p>This page is the <strong>Response</strong>.</p>
                    <p>Searching: ${strSearch}</p>
                    <p><a href="/">Back</a></p>
                </div>
            </main>
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

*/

