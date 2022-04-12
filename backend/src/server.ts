import { Request, Response } from "express";

const express = require("express");
const cors = require('cors');

// connection to mongodb and mongoose
require("./connection");

const wilderRouter = require("./routes/WilderRoutes");

const app = express();

app.use(cors());

// middleware to add in order to read json
app.use(express.urlencoded({ extended: true }));// -->pas besoin si pas de query
app.use(express.json());

// middleware for wilders routes
app.use("/api/wilders", wilderRouter);

// Route for homepage
app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
});

// Start server
const PORT = 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
