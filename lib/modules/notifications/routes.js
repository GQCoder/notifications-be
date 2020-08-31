'use strict';

const Schema = require('./schema');

module.exports = (handlers) => ([
    {
        method: 'GET',
        path: '/notifications/userId/{userId}',
        config: {
            handler: handlers.getNotifications,
            validate: {
                options: {
                    stripUnknown: true
                }
            },
            response: {
                schema: Schema.outputs.notifications,
                modify: true,
                options: {
                    stripUnknown: true
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/notifications/{id}/viewed',
        config: {
            handler: handlers.updateNotifification,
            validate: {
                options: {
                    stripUnknown: true
                }
            }
        }
    }
]);