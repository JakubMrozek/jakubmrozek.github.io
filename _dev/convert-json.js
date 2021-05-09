const fs = require('fs')
const path = require('path')
const folder = 'vychodni-timor'

const folderPath = path.join(__dirname, '..', `/facebook/${folder}/`)
const from = `${folderPath}/json.txt`
const to = `${folderPath}/json.json`
const content = fs.readFileSync(from).toString()
fs.writeFileSync(to, JSON.parse(content))