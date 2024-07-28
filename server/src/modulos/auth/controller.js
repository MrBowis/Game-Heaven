const TABLE = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');

module.exports = function (dbinjected) {

    let db = dbinjected;

    if (!db) {
        db = require('../../db/mysql');
    }
    
    async function login(user, password) {
        const data = await db.query(TABLE, { user : user });

        return bcrypt.compareSync(password, data.password) ? auth.token({...data}) : new Error('Invalid information');

    }

    async function add(data) {
        const authData = {
            id : data.id,
        };

        if (data.user) {
            authData.user = data.user;
        }

        if (data.password) {
            authData.password = await bcrypt.hashSync(data.password.toString(), 5);
        }

        return db.add(TABLE, authData);
    }

    async function update(data) {
        const authData = {
            id : data.id,
        };

        if (data.user) {
            authData.user = data.user;
        }

        if (data.password) {
            authData.password = await bcrypt.hashSync(data.password.toString(), 5);
        }

        return db.update(TABLE, authData);
    }

    function remove(id) {
        return db.remove(TABLE, id);
    }

    return {
        add,
        update,
        remove,
        login,
    };
};