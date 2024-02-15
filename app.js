const {
  token,
  requestInStr,
  detailsOneStr,
  bankListStr,
  saverequestStr,
  statusStr,
  requestinUrlStr,
  rejectrequestinStr,
  changeDetailsOneStr,
  apiFormatStr,
  withdrawalStr,
  saveStr,
  statStr,
  checkPanStr,
  nopayStr,
  changLengStr,
  createCaseStr,
  maillRequestinStr,
  cparamStr,
  changPmStr,
  startStr,
  urlStr,
  finalStatusStr,
  banksStr,
  checkCardStr,
} = require('./response.js')

const http = require('http')
const fs = require('fs')
const { log } = require('console')

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

const checkUrl = (url, value) => {
  const pathArray = url.split('/')
  return pathArray[2] === value
}

const write = (res, value) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'application/json',
  })
  res.end(value)
}

const requestListener = function (req, res) {
  const time = new Date()
  const tokenDate = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

  const authToken = req.headers['authorization']

  if (checkUrl(req.url, 'refresh_token')) {
    console.log(req.url)
    write(res, token(tokenDate))
  }
  //   Waiting pages PS_ECOM
  else if (checkUrl(req.url, 'start')) {
    console.log(req.url)
    write(res, startStr)
  } else if (checkUrl(req.url, 'url')) {
    console.log(req.url)
    write(res, urlStr)
  } else if (checkUrl(req.url, 'final_status')) {
    console.log(req.url)
    write(res, finalStatusStr)
  } else if (checkUrl(req.url, 'banks')) {
    console.log(req.url)
    write(res, banksStr)
  } else if (checkUrl(req.url, 'check_card')) {
    console.log(req.url)
    write(res, checkCardStr)
  }
  // ==========
  else if (checkUrl(req.url, 'requestin')) {
    console.log(req.url, authToken)
    write(res, requestInStr)
  } else if (checkUrl(req.url, 'withdrawal')) {
    console.log(req.url, authToken)
    write(res, withdrawalStr)
  } else if (checkUrl(req.url, 'check_pan')) {
    console.log(req.url, authToken)
    write(res, checkPanStr)
  } else if (checkUrl(req.url, 'details_one')) {
    console.log(req.url, authToken)
    write(res, detailsOneStr)
  } else if (checkUrl(req.url, 'change_details_one')) {
    console.log(req.url, authToken)

    write(res, changeDetailsOneStr)
  } else if (checkUrl(req.url, 'banklist')) {
    console.log(req.url, authToken)

    write(res, bankListStr)
  } else if (checkUrl(req.url, 'saverequestin')) {
    console.log(req.url, authToken)

    write(res, saverequestStr)
  } else if (checkUrl(req.url, 'create_case')) {
    console.log(req.url, authToken)

    write(res, createCaseStr)
  } else if (checkUrl(req.url, 'save')) {
    console.log(req.url, authToken)

    write(res, saveStr)
  } else if (checkUrl(req.url, 'statusrequestin')) {
    console.log(req.url, authToken, new Date().toLocaleTimeString())

    write(res, statusStr)
  } else if (checkUrl(req.url, 'status')) {
    console.log(req.url, authToken)

    write(res, statStr)
  } else if (checkUrl(req.url, 'requestin_url')) {
    console.log(req.url, authToken)

    write(res, requestinUrlStr)
  } else if (checkUrl(req.url, 'mailrequestin')) {
    console.log(req.url, authToken)

    write(res, maillRequestinStr)
  } else if (checkUrl(req.url, 'confrequestin')) {
    console.log(req.url, authToken)

    write(res, apiFormatStr({ status: 'created' }))
  } else if (checkUrl(req.url, 'timeextension')) {
    console.log(req.url, authToken)

    write(res, apiFormatStr({ status: 'created' }))
  } else if (checkUrl(req.url, 'resetrequestin')) {
    console.log(req.url, authToken)

    write(res, 'resetted')
  } else if (checkUrl(req.url, 'rejectrequestin')) {
    console.log(req.url, authToken)

    write(res, apiFormatStr())
  } else if (checkUrl(req.url, 'nopay')) {
    console.log(req.url, authToken)
    write(res, nopayStr)
  } else if (checkUrl(req.url, 'cparam')) {
    console.log(req.url, authToken)
    write(res, cparamStr)
  } else if (checkUrl(req.url, 'chang_leng')) {
    console.log(req.url, authToken)
    write(res, changLengStr)
  } else if (checkUrl(req.url, 'chang_pm')) {
    console.log(req.url, authToken)
    write(res, changPmStr)
  } else {
    fs.readFile('./settings.html', function (err, html) {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      })
      res.end(html)
    })
  }
}

const server = http.createServer(requestListener)
server.listen(8080)
