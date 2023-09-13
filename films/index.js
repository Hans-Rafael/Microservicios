const server = require("./src/server");

const port = 8002;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
/* async function main() {
    await app.listen(port);
    console.log(`Server listening on port ${port}`);
}
main(); */