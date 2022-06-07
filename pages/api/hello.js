// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
const http = require('http');
const https = require('https');



export default async function handler(req, res) {
  // const result = await axios({
  //   url: 'https://diandu-1307995562.cos.ap-hongkong.myqcloud.com/1.mp3',
  //   method: 'GET',
  //   responseType: 'blob', // important
  // });

  // const data = result.data;

  //   Accept-Ranges: bytes
  // Connection: keep-alive
  // Content-Length: 81132

  // res.setHeader('Content-Type', 'audio/mepg');
  // res.setHeader('Accept-Ranges', 'bytes');
  // res.setHeader('Content-Length', '81132');
  // res.status(200).end(data);
  // res
  try {
    const data = await new Promise((resolve, reject) => {
      https.get('http://diandu-1307995562.cos.ap-hongkong.myqcloud.com/1.mp3', (res) => {
        if (res.statusCode !== 200) {
          return reject('error');
        }
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          return resolve(data);
        });
      });
    });

    res.setHeader('Content-Type', 'audio/mepg');
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Length', '81132');
    res.status(200).send(data);

  } catch (e) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send(e.message);
  }
}
