const AWS = require('aws-sdk');

export async function s3_upload(file) {
    const val = await fetch('/api/s3sign')
    const signed = await val.json()
    const res = await fetch(signed.uploadURL, { method: "PUT", body: file })
    return res.url.split('?')[0];
}