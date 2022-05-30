const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const data = fs.readFileSync(__dirname + '/1.mp3');

const formData = new FormData();
formData.append("file", data);
axios({
    method: "post",
    url: "http://localhost:3000/api/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
})
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.message);
    })