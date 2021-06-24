let fs = require('fs')
let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
result = fs.readFileSync(`../temp/stick/emm.webp`)
  conn.sendMessage(m.chat, result, sticker, {
quoted: m
  })
}

handler.help = ['rifai']
handler.tags = ['main']
handler.customPrefix = /(\ $)/
handler.command = /^rifai/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler