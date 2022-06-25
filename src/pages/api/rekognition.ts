import type { NextApiRequest, NextApiResponse } from 'next';
import { AWSCredentials } from '../../../interfaces';
import { UBICEAWSClient } from '../../../lib/aws-rekognition';
import busby from 'busboy';

const credentials: AWSCredentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

export const config = {
    api: {
        // bodyParser: false,
        responseLimit: false
    },
}

export default function rekognitionHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const bb = busby({ 
            headers: req.headers,
            limits: {
                fieldNameSize: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                fieldSize: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                headerPairs: 1000000000000000000000000000000000000000000000000000000000000000000000
            }
         });
        res.status(200).send('ok');
        // bb.on('file', (name, file, info) => {
        //     const { filename, encoding, mimeType } = info;
        //     console.log(
        //         `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        //         filename,
        //         encoding,
        //         mimeType
        //     );
        //     file.on('data', (data) => {
        //         console.log(`File [${name}] got ${data.length} bytes`);
        //     }).on('close', () => {
        //         console.log(`File [${name}] done`);
        //     });
        // });
        // bb.on('field', (name, val, info) => {
        //     console.log(`Field [${name}]: value: %j`, val);
        // });
        // bb.on('close', () => {
        //     console.log('Done parsing form!');
        //     res.writeHead(303, { Connection: 'close', Location: '/' });
        //     res.end();
        // });
        // req.pipe(bb);
    }
}


