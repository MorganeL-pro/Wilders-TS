"use strict";
const mongoose = require("mongoose");
// Database
mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
})
    // eslint-disable-next-line
    .then(() => console.log("Connected to database"))
    // eslint-disable-next-line
    .catch((err) => console.log(err));
module.exports = mongoose;
//# sourceMappingURL=connection.js.map