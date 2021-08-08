const { TiktokDownloader } = require('../lib/tiktokdl')
const { toAudio } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm...url nya mana?'
tiktokmc = args.join(' ')
anuh = await TiktokDownloader(`${tiktokmc}`)
const cerok = await anuh.result.nowatermark
let aumdio = await toAudio(cerok, 'mp4')
conn.sendMessage(m.chat, aumdio, MessageType.audio, {
    quoted: m
  })
}

handler.help = ['tiktokmusic'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktokmusic?)$/i

handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false
module.exports = handler
