const TABLE = 'users';
const auth = require('../auth');
module.exports = function (dbinjected) {

    let db = dbinjected;

    if (!db) {
        db = require('../../db/mysql');
    }

    function findAll() {
        return db.findAll(TABLE);
    }
    
    function find(id) {
        return db.find(TABLE, id);
    }
    
    async function add(data) {
        const user = {
            id : data.id,
            name : data.name,
            email : data.email,
            user : data.user,
        };

        const response = await db.add(TABLE, user);
        console.log('response add', response);

        if (data.password || data.user) {
            await auth.add({
                id : data.id,
                user : data.user,
                password : data.password,
            });
        }

        return true;
    }
    
    async function update(data) {
        const user = {
            id : data.id,
            name : data.name,
            email : data.email,
            user : data.user,
        };

        const response = await db.update(TABLE, user);
        console.log('response update', response);

        if (data.password || data.user) {
            await auth.update({
                id : data.id,
                user : data.user,
                password : data.password,
            });
        }

        return true;
    }
    
    function remove(id) {
        auth.remove(id);
        return db.remove(TABLE, id);
    }

    return {
        findAll,
        find,
        add,
        update,
        remove,
    };
};