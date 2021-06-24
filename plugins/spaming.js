let fetch = require('node-fetch')
const { fetchJson, fetchText } = require('./lib/fetcher')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!isPrems || !isOwner) return m.reply('you are not a premium user')
lul = args.join(' ')
const lum = await fetchJson('https://xteam.xyz/spammer/allspam?no=${lul}&APIKEY=JoanB')
m.reply('done')
}

handler.help = ['spam <nomor>']
handler.tags = ['tools']
handler.command = /^spam$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3
handler.limit = false

module.exports = handler

