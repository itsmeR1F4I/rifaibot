global.DeveloperMode = 'true' //true Or false
global.linkGC = ['belum jadi']
global.owner = ['6287754224995']// Put your number here
global.mods = ['62856438334749','628990911211'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'JoanB',
  'https://zeks.xyz': 'Rifaiitugey'
}

// Sticker WM
global.packname = 'RIFAI GG'
global.author = 'AWAS COLONG'

global.multiplier = 100 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
