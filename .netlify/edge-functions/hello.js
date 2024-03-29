
export default (request, context) => {
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
            <div class="w3-container w3-card-4">
                <h1>Hello Edge Function</h1>
                <p>This page is the <strong>Response</strong>.</p>
                <p><a href="/">Back</a></p>
            </div>
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
