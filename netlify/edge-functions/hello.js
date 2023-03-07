export default () => new Response(`
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
        <h1>Hello Edge Function</h1>
        <p>This page is the <strong>Response</strong>.</p>
        <p><a href="/">Back</a></p>
    </body>
</html>`
);

export const config = { path: "/test" }

/**
 * Looks like we are having trouble with these
 *
import * as React from 'react';
import * as Server from 'react-dom/server';

const Greet = () => <h1>Hello, world!</h1>;
export default () => new Response(Server.renderToString(<Greet/>));

export const config = { 
    path: "/hello-edge" 
};
*/

