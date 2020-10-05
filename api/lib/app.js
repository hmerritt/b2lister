const B2 = require("backblaze-b2");
require("dotenv").config();

const b2 = new B2({
    applicationKeyId: process.env.B2_KEY_ID || "applicationKeyId", // or accountId: 'accountId'
    applicationKey: process.env.B2_KEY_APPLICATION || "applicationKey", // or masterApplicationKey
});

async function GetBucket(bucket_name) {
    await b2.authorize(); // must authorize first
    let response = await b2.getBucket({ bucketName: bucket_name });
    return response.data.buckets[0];
}

async function ListBucketFiles(bucket_name) {
    const bucket = await GetBucket(bucket_name);

    let response = await b2.listFileNames({
        bucketId: bucket.bucketId,
        startFileName: null,
        maxFileCount: 100,
        delimiter: "",
        prefix: "",
    });

    return response.data.files;
}

module.exports = {
    GetBucket,
    ListBucketFiles,
};
