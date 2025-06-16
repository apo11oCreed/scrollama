// Import required AWS SDK clients and commands for Node.js
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { createWriteStream } from "fs";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";

// Set the AWS region
const REGION = "us-east-1";  // e.g., "us-west-2"

// Create an Amazon S3 service client object
const s3Client = new S3Client({ region: REGION, requestHandler: new NodeHttpHandler() });

// Set the parameters
const bucketName = "clientcenter-env-eba-uhva3sx9-us-east-1-elasticbeanstalk-com";
const objectKey = "test-video/windows-google-search.mp4"; // e.g., "images/pic.jpg"
const downloadFilePath = "./static/windows-google-search.mp4"; // The path where you want to save the downloaded image

const downloadImage = async () => {
  try {
    // Get the image stream from S3
    const data = await s3Client.send(new GetObjectCommand({ Bucket: bucketName, Key: objectKey }));
    
    // Save the image to local disk
    const writeStream = createWriteStream(downloadFilePath);
    data.Body.pipe(writeStream);
  } catch (err) {
    console.error("Error", err);
  }
}

downloadImage();