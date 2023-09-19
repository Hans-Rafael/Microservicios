const server = require('./src/server');
server.listen( 8004, () => {
    console.log('Server is running on PORT 8004');
});