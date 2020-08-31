'use strict';

const Handlers = require('./handlers');
const Routes = require('./routes');

module.exports = (notifications) => ({
    plugin: {
        name: 'notifications',
        dependencies: [],
        register: (server, options) => {

            const handlers = Handlers(notifications);

            server.route(Routes(handlers));
        }
    }
});