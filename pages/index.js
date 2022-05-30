import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';

function upload(e) {
  const input = e.target;
  const file = input.files[0];
  axios({
    method: 'post',
    url: '/api/upload',
    data: {
      file: file
    }
  })
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });

}
export default function Home() {
  return (
    <div className={styles.container}>
      <input type="file" multiple id="input" onChange={upload}></input>
    </div>
  )
}
