
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
