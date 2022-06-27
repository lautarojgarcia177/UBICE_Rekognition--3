import {
  RekognitionClient,
  DetectTextCommand,
} from '@aws-sdk/client-rekognition';
import { AWSCredentials } from '../interfaces';
import { useRegex, toBase64 } from './utils';

class UBICEAWSClient {

  client: RekognitionClient;

  constructor(credentials: AWSCredentials) {
    this.client = this.initClient(credentials);
  }

  private initClient(credentials: AWSCredentials): RekognitionClient {
    return new RekognitionClient({
      credentials: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
      },
      region: 'us-west-1',
    });
  }

  setCredentials(credentials: AWSCredentials): void {
    this.client = this.initClient(credentials);
  }

  /**
   * use AWS service to rekognize numbers in the image
   * @param {image} image file to rekognize
   */
  rekognize(image): Promise<any> {
    const command = new DetectTextCommand({
      Image: {
        Bytes: image
      },
      Filters: {
        WordFilter: {
          MinConfidence: 95,
        },
      }
    });
    return this.client.send(command)
      .then((res) =>
        res.TextDetections.filter((textDetection) =>
          useRegex(textDetection.DetectedText)
        )
          .filter((textDetection) => textDetection.Type === 'WORD')
          .map((textDetection) => textDetection.DetectedText)
      );
    // return toBase64(image).then(base64Img => {
    //   const command = new DetectTextCommand({
    //     Image: {
    //       Bytes: image
    //     },
    //     Filters: {
    //       WordFilter: {
    //         MinConfidence: 95,
    //       },
    //     }
    //   });
    //   this.client.send(command)
    //     .then((res) =>
    //       res.TextDetections.filter((textDetection) =>
    //         useRegex(textDetection.DetectedText)
    //       )
    //         .filter((textDetection) => textDetection.Type === 'WORD')
    //         .map((textDetection) => textDetection.DetectedText)
    //     );
    // });
  }
}

export { UBICEAWSClient }