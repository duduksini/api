import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';

// From https://github.com/awslabs/aws-serverless-express
// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
  'application/json',
  'application/xml',
];
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

export const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
