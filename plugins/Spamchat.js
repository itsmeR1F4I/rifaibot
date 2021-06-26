let handler = async (m, { conn, args, usedPrefix }) => {
let noPrefix = m.text.replace(usedPrefix, '')
let riffa = noPrefix.trim().split`|`.slice(0)
	   let riff = noPrefix.trim().split`|`.slice(1)
	   for (let i = 0; i < riff[0]; i++) {
	     conn.sendMessage(m.chat, riffa[1], m.mtype)
	   }
}

handler.help = ['spamchat <text>|<brp>']

	                                    handler.tags = ['owner']


	                                    handler.command = /^spamchat$/i

	                                    handler.owner = true

	                                    handler.mods = false

	                                    handler.premium = false
	                                    handler.group = false
	                                    handler.private = false

	                                    handler.admin = false
	                                    handler.botAdmin = false

	                                    handler.fail = null

	                                    module.exports = handler

	            
