let handler = async (m, { conn, text, usedPrefix, args }) => {
conn.sendMessage(m.chat, {
	 name: 'SIM CARD XL',
	  degreesLatitude: -7.2484,
	   degreesLongitude: 112.7419
	   }, 'locationMessage')
}

handler.help = ['lokasi']
handler.tags = ['owner']

handler.command = /^lokasi$/i
 handler.fail = null

 module.exports = handler