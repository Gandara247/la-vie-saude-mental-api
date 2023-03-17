const exportsJWT = require("express-jwt");
const secret = require("../configs/secret");

module.exports = exportsJWT({
    secret: secret.key,
    algorithms: ["HS256"],
}); 