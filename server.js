const express = require('express');
const next = require('next');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const mobxReact = require('mobx-react');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
mongoose.connect(process.env.MONGO_DB_URI);
const routes = require('./server/routes');
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());
        server.use(session({
            secret: process.env.COOKIE_SECRET,
            name: process.env.COOKIE_NAME,
            proxy: true,
            resave: true,
            saveUninitialized: true
        }));

        server.use(passport.initialize());
        server.use(passport.session());

        server.use('/api/v1', routes);

        server.get('/product/:slug', (req, res) => {
            const actualPage = '/product';
            const { slug } = req.params;
            app.render(req, res, actualPage, {slug});
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('Listening on http://localhost:3000');
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });