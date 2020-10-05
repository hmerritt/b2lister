const router = require("express").Router();
const app = require("./app");

/*
 * Returns list of bucket files
 */
router.post("/bucket/files", validatePostData(), async (req, res, next) => {
    try {
        const files = await app.ListBucketFiles(req.body.bucket);
        res.send(files);
    } catch (err) {
        console.log(err);
        res.status(500).send([]);
    }
});

/*
 * Validate post data
 */
function validatePostData() {
    return (req, res, next) => {
        if (req.body && req.body.bucket) {
            next();
        } else {
            res.status(400).json({
                error: "missing post data",
                msg: "bucket: name-of-bucket",
            });
        }
    };
}

module.exports = router;
