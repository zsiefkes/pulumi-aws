import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as fs from "fs";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Create a bucket object
const bucketObject = new aws.s3.BucketObject("index.html", {
    bucket: bucket,
    content: fs.readFileSync("site/index.html").toString()
});

// Export the name of the bucket
export const bucketName = bucket.id;

