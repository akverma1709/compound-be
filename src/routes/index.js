const express = require('express');
const router = express.Router();
const compoundRoute = require("./apiRoutes/compound");

router.use("/compound", compoundRoute);

router.use((req, res, next) => {
    res.status(400).send({
        statusCode: routes.ERRORCODE,
        url: req.originalUrl,
        error: "Bad Request url is not found!",
    });
});

module.exports = router;