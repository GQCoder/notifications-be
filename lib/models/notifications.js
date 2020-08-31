'use strict';


class Notifications {

    constructor(db) {

        this.db = db;
    }

    get(userId) {

      return this.db.resilia.notifications.find({ user_id: userId, viewed: false });
    }

    async update(id) {

        return await this.db.resilia.notifications.update({ id }, { viewed: true });
    }

}


module.exports = Notifications;