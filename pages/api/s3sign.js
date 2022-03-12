const AWS = require('aws-sdk');

export default async function handler(req, res) {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
    const s3Params = {
        Bucket: process.env.AWS_S3_BUCKETNAME,
        Key: `${parseInt(Math.random() * 10000000)}.jpeg`,
        Expires: 300,
        ContentType: 'image/jpeg',
        ACL: 'public-read',
    }
    const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params)

    res.json({ uploadURL })
}
