const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function(injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = require('../../../store/mysql');        
    }

    async function login(username, password) {
        const data = await store.query(TABLE, {username: username });
        console.log(data);
        return bcrypt.compare(password, data.password)
            .then(same => {
                if (same === true) {
                    //Generar Token
                    return auth.sign({ ...data })
                } else {
                    throw new Error('Informacion Invalida');
                }             
            });
 
    };

    async function upsert(data) {
        const authData = {
            id:data.id
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login,
    }
    
}