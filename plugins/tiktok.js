const { TiktokDownloader } = require('../lib/tiktokdl')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm...url nya mana?'
tiktokn = args.join(' ')
anu = await TiktokDownloader(`${tiktokn}`)
lam = anu.result.nowatermark
await conn.sendFile(m.chat, lam, 'tiktok.mp4', `done`)
}

handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false
module.exports = handler
