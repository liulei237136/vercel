import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';

var s3 = new AWS.S3({ apiVersion: '2021-04-22' });
s3.endpoint = "https://s3.cn-global-0.xxyy.co:16000";
s3.config.update({
    accessKeyId: "C5FE20DC5E654B13213A8C035E60B722",
    secretAccessKey: "59018D2BC88F9212032218567E7C8FFE",
    signatureVersion: "v4"
});

function upload(bucket, body, key) {
    return new Promise((resolve, reject) => {
        var params = {
            Body: body,
            Bucket: bucket,
            Key: key,
        };
        s3.putObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });

    });
}


export default async function handler(req, res) {
    const key = uuidv4();
    const bucket = 'audio';
    // const result = await upload(bucket, body, key);

    const form = formidable({});

    try {
        const result = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    return reject(err);
                }

                resolve({ fields, files });
            })
        });

    }catch(err){
        return res.status(400);
    }

    return res.status(200).json(result);

}
