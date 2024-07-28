const TABLA = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');

module.exports = function (dbinjected) {

    let db = dbinjected;

    if (!db) {
        db = require('../../db/mysql');
    }
    
    async function login(user, password) {
        const data = await db.query(TABLA, { user: user });

        return bcrypt.compare(password, data.password)
            .then((result) => {
                if (result) {
                    return auth.token({...data});
                } else {
                    throw new Error('Invalid information');
                }
            });
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

        return db.add(TABLA, authData);
    }

    function update(data) {
        const authData = {
            id : data.id,
        };

        if (data.user) {
            authData.user = data.user;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return db.update(TABLA, authData);
    }

    function remove(id) {
        return db.remove(TABLA, id);
    }

    return {
        add,
        update,
        remove,
        login,
    };
};