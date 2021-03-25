'use strict';
const express = require('express');

const host = '0.0.0.0';
const port = 8080;
const { spawnSync } = require("child_process");

// Getting signed url for an S3 Object
let url_list = []
let pdf_list = ['Small.pdf','Medium.pdf','Large.pdf'];
for(var i=0; i< pdf_list.length;i++){

    var cmd1 = spawnSync('aws',['configure','set','aws_access_key_id',`${process.env.ACCESS_KEY_ID}`]);
    var cmd2 = spawnSync('aws',['configure','set','aws_secret_access_key',`${process.env.SECRET_ACCESS_KEY}`]);
    var cmd3 = spawnSync('aws',['configure','set','region',`${process.env.REGION}`]);
    
    var cmd = spawnSync('aws',['s3','presign',`s3://${process.env.BUCKET_PATH}/${pdf_list[i]}`],{ encoding : 'utf8' });
    url_list.push(cmd.stdout.trim())
  
}
//console.log(url_list)
const app = express();

app.get('/small', (req, res) => {
    res.redirect(`${url_list[0]}`)

  });
  app.get('/medium', (req, res) => {
    res.redirect(`${url_list[1]}`)

  });
  app.get('/large', (req, res) => {
    res.redirect(`${url_list[2]}`)

  });
  
  app.listen(port, host);

   console.log(`Running on http://${host}:${port}`);
  
