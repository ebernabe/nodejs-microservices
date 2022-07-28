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
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || '',
    },
    mysqlService: {
        nost: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        nost: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-16697.c9.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '16697',
        password: process.env.REDIS_PASS || ''
    }
}
