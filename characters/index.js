const server = require("./src/server");

const PORT = 8001;

server.listen(PORT, () => {
  console.log(`Characters Server listening on port ${PORT}`);
});
