let handler = async (m, { conn, args, text }) => {
	 var { ytStalker } = require ('youtube-stalker')
	 ytrifai = args.join(' ')
	 let ytstalk = await ytStalker(`${ytrifai}`)
	 console.log(ytstalk)
	 umser = ytstalk.username
	 subriker = ytstalk.subcriber
	 joim = ytstalk.bergabung
	 nomton = ytstalk.penonton
	 thumbb = ytstalk.thumb
	 deks = ytstalk.desk
	 m.reply( `*nama=* ${umser} \n *sukriber =* ${subriker} \n *join=* ${joim} \n *pengnonton=* ${nomton} \n *thumb=* ${thumbb} \n *desk=* ${deks}`)
	 }

	 handler.help = ['ytstalk <nama>']
	 handler.tags = ['tools']
	 handler.command = /^ytstalk$/i
	 handler.owner = false
	 handler.mods = false
	 handler.premium = false
	 handler.group = false
	 handler.private = false

	 handler.admin = false
	 handler.botAdmin = false

	 handler.fail = null

	 module.exports = handler
