import React, { useState } from 'react';
import { s3_upload } from '../lib'
import styles from '../styles/Home.module.css'

export default function S3Test() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    async function uploadFiles(e) {
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            const url = await s3_upload(file);
            console.log(url);
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="file" multiple onChange={(e) => { uploadFiles(e) }} />
            </form>
        </div>
    )
}
