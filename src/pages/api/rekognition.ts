import type { NextApiRequest, NextApiResponse } from 'next';
import { AWSCredentials } from '../../../interfaces';
import nc from "next-connect";
import fileUpload from 'express-fileupload';
import { UBICEAWSClient } from '../../../lib/aws-rekognition';

const credentials: AWSCredentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
const ubiceAWSClient = new UBICEAWSClient(credentials);

export const config = {
    api: {
        bodyParser: false,
        responseLimit: false
    },
}

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).use(fileUpload()).post((req, res) => {
    let imagesFiles = req.files.file;
    for (let imageFile of imagesFiles) {
        ubiceAWSClient.rekognize(imageFile.data).then(res => {
            console.log(res);
        });
    }
    res.status(200).json('ok');
});

export default handler;


