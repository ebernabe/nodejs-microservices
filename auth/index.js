
const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);
        if (decoded.id !== owner) {
            throw error('You Cannot do that', 401);
            //throw new Error('You Cannot do that');
        }
    },
    logged: function(req) {
        const decoded = decodeHeader(req); 
    },    
}

function sign(data) {
    return jwt.sign(data, secret);
};

function verify(token) {
    return jwt.verify(token, secret);
};

function getToken(auth) {
    if (!auth) {
        //throw new Error('No Token');
        throw error('No Token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('Invalid Format', 401);
        //throw new Error('Invalid Format');
    }

    let token = auth.replace('Bearer ','');

    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};