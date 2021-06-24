let fs = require('fs')
let infoMSG = JSON.parse(fs.readFileSync('./lib/msg.data.json'))
const { recognize } = require('./lib/ocr')
let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
const type = Object.keys(infoMSG[i].message)[0]
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
						const media = await conn.downloadAndSaveMediaMessage(encmedia)
						m.reply('tungguuu')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								m.reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								m.reply('error')
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
}

handler.help = ['ocr <reply/tag foto>']
handler.tags = ['tools']
handler.command = /^ocr$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

