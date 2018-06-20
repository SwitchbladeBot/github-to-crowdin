const express = require('express')
const bodyParser = require('body-parser')
const GithubWebHook = require('express-github-webhook');
const webhookHandler = GithubWebHook({ path: '/', secret: process.env.WEBHOOK_SECRET });
const app = express()

app.use(bodyParser.json())
app.use(webhookHandler)

webhookHandler.on('*', (event, repo, data) => {
  console.log(event)
  console.log(repo)
  console.log(data)
})

app.listen(80);

// commit one