let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, args }) => {
    hent = args.join(' ')
    henta = await fetch(`https://hadi-api.herokuapp.com/api/nhentai?id=${hent}`)
    conn.sendFile(m.chat, henta,  'hentong.pdf',  'hentong.pdf')
}
handler.help = ['nhentai']
handler.tags = ['downloader']
handler.command = /^(nhentai?)$/i

module.exports = handler