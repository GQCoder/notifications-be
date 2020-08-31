'use strict';

module.exports = (notifications) => ({

    getNotifications: async (request, h) => {

        const userId = request.params.userId;

        const n =  await notifications.get(userId);

        return {
            count: n.length,
            notifications: n
        }
    },

    updateNotifification: async (request, h) => {

        const notificationId = request.params.id;

        return notifications.update(notificationId);
    }
});