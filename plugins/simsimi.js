let fetch = require('node-fetch')
const { fetchJson, fetchText } = require('./lib/fetcher.js')
let handler = async (m, { text, args }) => {
 lep = args.join(" ")
  let res = await fetchJson (`https://api.zeks.xyz/api/simi?apikey=Rifaiitugey&text=${lep}`)
  m.reply(res.result)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

