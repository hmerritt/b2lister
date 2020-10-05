const express = require("express");
const cors = require("cors");
const pkg = require("../package.json");
const router = require("./router");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/", router);

// Base root welcome message
server.get("/", (req, res) => {
    res.send({
        message: "Hello, world!",
        version: pkg.version
    });
});

// Fallback server error message
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "somthing went wrong",
        success: false,
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n=== API listening on port ${PORT} ===\n`);
});
