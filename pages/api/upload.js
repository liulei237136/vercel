// const fs = require('fs');
import fs from 'fs';
// var AWS = require('aws-sdk');
import AWS from 'aws-sdk';
// const axios = require('axios');

var s3 = new AWS.S3({ apiVersion: '2021-04-22' });
s3.endpoint = "https://s3.cn-global-0.xxyy.co:16000";
s3.config.update({
    accessKeyId: "C5FE20DC5E654B13213A8C035E60B722",
    secretAccessKey: "59018D2BC88F9212032218567E7C8FFE",
    signatureVersion: "v4"
});

function upload() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.mp3', (err, data) => {
            if (err) {
                return reject(err);
            } else {
                var params = {
                    Body: data,
                    Bucket: 'audio',
                    Key: '1.mp3',
                };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            }
        })
    });
}

// const file = fs.readFileSync('./hello.js');

// upload()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// var params = {
//     Bucket: 'audio'
// };
// s3.getBucketLocation(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// axios.head('https://s3.cn-global-0.xxyy.co:16001/download_obj/audio/0.24058548214157294')
// .then((res)=>{
//     console.log(1);
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(2);
//     console.log(err);
// });

export default  async function  handler(req, res) {
    await  upload();

    res.status(200).json({ name: '3' })
  }
  