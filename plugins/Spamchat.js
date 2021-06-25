//tadi typo gblg :v
let handler = async (m, { conn, args, usedPrefix }) => {
  let wehr = args.join (' ')
  let noPrefix = m.text.replace(usedPrefix, '')
	   let riff = noPrefix.trim().split`|`.slice(1)
	   for (let i = 0; i < riff[0]; i++) {
	     conn.sendMessage(m.chat, `${wehr}`, m.mtype)
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

	            
