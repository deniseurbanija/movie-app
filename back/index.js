const app = require("./src/server");
const conDB = require("./src/config/confDB");

conDB().then((res) => {
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
});
