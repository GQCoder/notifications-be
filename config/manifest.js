'use strict';

//Modules
const Notifications = require('../lib/modules/notifications');

//Models
const { NotificationsModel } = require('../lib/models');

const validationFailAction = (request, h, err) => {

    if (process.env.EXPOSE_ERRORS) {
        return Boom.badRequest(err);
    }

    return Boom.badRequest();
};

module.exports = (db) => {

    const notificationsModel = new NotificationsModel(db);

    return {
        options: {
            app: {},
            port: process.env.PORT || 3000,
            routes: {
                validate: {
                    failAction: validationFailAction
                }
            }
        },
        plugins: [
            Notifications(notificationsModel)
        ]
    }
};