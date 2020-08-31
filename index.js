'use strict';

const Massive = require('massive');

const Hapi = require('@hapi/hapi');
const Manifest = require('./config/manifest');

const start = async () => {

    const db = await Massive(process.env.CONNECTION_STRING, { allowedSchemas: ['resilia'] });

    const manifest = Manifest(db);

    const server = await Hapi.Server(manifest.options);

    await server.register(manifest.plugins);
    await server.start();

    console.log(`Stared Resilia Server at ${server.info.uri}`);
};

start();