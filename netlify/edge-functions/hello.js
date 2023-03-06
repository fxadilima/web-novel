import * as React from 'react';
import * as Server from 'react-dom/server';

const Greet = () => <h1>Hello, world!</h1>;
export default () => new Response(Server.renderToString(<Greet/>));

export const config = { 
    path: "/hello-edge" 
};

