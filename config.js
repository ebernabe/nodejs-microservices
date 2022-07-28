module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECTRET || 'notsecret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'VgSURiRNVG',
        password: process.env.MYSQL_PASS || '6oWngrOt5E',
        database: process.env.MYSQL_DB || 'VgSURiRNVG',
    },
    mysqlService: {
        nost: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}