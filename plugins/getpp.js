const { MessageType } = require('@adiwajshing/baileys')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
let handler = async(m, { conn, args }) => {
sender = m.participant
ppimg = getBuffer(conn.getProfilePicture(`${sender.split('@')[0]}@c.us`))
conn.sendMessage(m.chat, ppimg, MessageType.image, { quoted: m })
}

handler.help = ['getpp']
handler.tags = ['tools']

handler.command = /^getpp$/i

module.exports = handler

