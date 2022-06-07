// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  const result = await axios({
    url: 'https://diandu-1307995562.cos.ap-hongkong.myqcloud.com/1.mp3',
    method: 'GET',
    responseType: 'blob', // important
  });

  const data = result.data;

//   Accept-Ranges: bytes
// Connection: keep-alive
// Content-Length: 81132

  res.setHeader('Content-Type', 'audio/mepg');
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Content-Length', '81132');
  res.status(200).send(data);
  // res
}
