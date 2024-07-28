const TABLA = 'users';
const auth = require('../auth');
module.exports = function (dbinjected) {

    let db = dbinjected;

    if (!db) {
        db = require('../../db/mysql');
    }

    function findAll() {
        return db.findAll(TABLA);
    }
    
    function find(id) {
        return db.find(TABLA, id);
    }
    
    async function add(data) {
        const user = {
            id : data.id,
            name : data.name,
            email : data.email,
            user : data.user,
        };

        const response = await db.add(TABLA, user);
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

        const response = await db.update(TABLA, user);
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
        return db.remove(TABLA, id);
    }

    return {
        findAll,
        find,
        add,
        update,
        remove,
    };
};