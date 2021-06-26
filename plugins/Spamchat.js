let handler = async (m, { conn, args, usedPrefix }) => {
  let riff = args.join("|")
	   for (let i = 0; i < riff[1]; i++) {
	     conn.sendMessage(m.chat, riff[0], m.mtype)
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

	            
