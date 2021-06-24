let handler = async(m, { conn }) => {
var nom = m.participant
                                        const tagme = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} Tuh dah ku tag!`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        conn.sendMessage(m.chat, tagme, m.mtype, {quoted: m})
}

handler.help = ['tagme']
handler.tags = ['main']

handler.command = /^tagme$/i

module.exports = handler
