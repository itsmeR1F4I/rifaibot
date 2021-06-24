let fetch = require('node-fetch')
const { fetchJson, fetchText } = require('./lib/fetcher')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
Loh = await fetchJson(`https://xteam.xyz/cekey?APIKEY=JoanB`)
cem = Loh.response
cor = cem.totalhit
cer = cem.premium
car = cem.expired
m.reply(`totalhit: ${cor}\n premium: ${cer}\n expired: ${car}\n restapi:xteam`)
}

handler.help = ['cekxteam']
  handler.tags = ['tools']
  handler.command = /^cekxteam/i
  
  module.exports = handler
