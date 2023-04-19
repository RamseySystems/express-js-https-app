const app = require('express')();
const https = require('https');
const bodyParser = require('body-parser')
const fs = require('fs');

const key = fs.readFileSync('./cert/key.pem');
const cert = fs.readFileSync('./cert/cert.pem')

const server = https.createServer({ key: key, cert: cert }, app);

app.get('/get', (req, res) => {
    res.send('Some data')
    console.log('GET')
});

app.post('/post', (req, res) => {
    let data = req.body
    res.send('Data recieved: ' + JSON.stringify(data))
    console.log('POST')
});

server.listen(8080, () => {
    console.log('Listerning on port: 8080')
})