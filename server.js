const express = require('express');
const next = require('next');

const routes = require('./routes')
const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);

console.log(routes)
app.prepare()
    .then(() => {
        const server = express();

     /*   routes.forEach(r =>
            server.get(r.src, (req, res) => app.render(req, res, r.dest, req.params))
        );*/

        server.get('*', (req, res) => {         
            handle(req, res);
        })

        server.listen(port);

        console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
    })
    .catch(e => console.log(e));
