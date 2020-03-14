module.exports = {
    portNo: 4000,
    db: {
        mongo: {
            main: {
                name: 'ChoobinDb',
                address: '127.0.0.1:27017'
            },
            log: {
                name: 'ChoobinDb_log',
                address: '127.0.0.1:27017'
            }
        }
    },
    jwtExpireTime: 3000,
    tokenHashKey: 'YOUR_TOKEN_HASH_KEY',
    jwtSecret: "YOUR_JWT_SECRET_KEY"


}
