import type { NextApiRequest, NextApiResponse } from 'next';
import { AWSCredentials } from '../../../interfaces';
import multer from 'multer';
import nc from "next-connect";

const credentials: AWSCredentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

const upload = multer();

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
}).use(upload.array('file'))
    .post((req, res) => {
        console.log(req.files);
        res.status(200).send('ok');
    })

export default handler;


