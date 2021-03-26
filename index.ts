import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as fs from "fs";

// Create an AWS resource (S3 Bucket) and set website property
const bucket = new aws.s3.Bucket("my-bucket", {
    website: {
        indexDocument: "index.html"
    }
});

// Create a bucket object
const bucketObject = new aws.s3.BucketObject("index.html", {
    acl: "public-read",
    bucket: bucket,
    content: fs.readFileSync("site/index.html").toString(),
    contentType: "text/html"
});

// Export bucket name and endpoint
export const bucketName = bucket.id;
export const bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;
