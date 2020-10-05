const router = require("express").Router();
const app = require("./app");
require("dotenv").config();

// Load env vars
const showPrivateBuckets = process.env.B2_SHOW_PRIVATE_BUCKETS;

/*
 * Returns list of buckets
 */
router.get("/buckets", async (req, res, next) => {
    try {
        let buckets = await app.ListBuckets();

        // Filter private
        if (showPrivateBuckets === "false" || showPrivateBuckets === "no") {
            buckets = buckets.filter(
                (bucket) => bucket.bucketType == "allPublic"
            );

            // Throw error if no buckets left
            if (buckets.length === 0) throw "ERROR: /buckets: private buckets";
        }

        res.send(buckets);
    } catch (err) {
        console.log(err);
        res.status(500).send([]);
    }
});

/*
 * Returns list of bucket files
 */
router.post("/bucket/files", validatePostData(), async (req, res, next) => {
    try {
        // Get bucket info
        const bucket = await app.GetBucket(req.body.bucket);

        // Throw error if private bucket
        if (showPrivateBuckets === "false" || showPrivateBuckets === "no") {
            if (bucket.bucketType !== "allPublic")
                throw `ERROR: /files: private-bucket: ${req.body.bucket}`;
        }

        // Fetch file list
        const files = await app.ListBucketFiles(bucket.bucketId);

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
