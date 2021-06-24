let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
conn.getStories('6281342920552@s.whatsapp.net')
}

handler.help = ['getstory']
handler.tags = ['tools']
handler.command = /^(getstory)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true
module.exports = handler
