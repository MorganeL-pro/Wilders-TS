"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require('cors');
//connection to mongodb and mongoose
const connection = require("./connection");
const wilderRouter = require("./routes/WilderRoutes");
const app = express();
app.use(cors());
//middleware to add in order to read json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//middleware for wilders routes
app.use("/api/wilders", wilderRouter);
// Route for homepage
app.get("/", (req, res) => {
    res.send("Hello");
});
//Start server
let PORT = 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
//# sourceMappingURL=server.js.map