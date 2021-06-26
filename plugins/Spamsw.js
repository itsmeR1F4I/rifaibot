const colors = [
    0xff26c4dc, 0xff792138,
    0xff8b6990, 0xfff0b330,
    0xffae8774, 0xff5696ff,
    0xffff7b6b, 0xff57c9ff,
    0xff243640, 0xffb6b327,
    0xffc69fcc, 0xff54c265,
    0xff6e257e, 0xffc1a03f,
    0xff90a841, 0xff7acba5,
    0xff8294ca, 0xffa62c71,
    0xffff8a8c, 0xff7e90a3,
    0xff74676a
]

let handler = async (m, { conn, text, args, args }) => {
let noPrefix = m.text.replace(usedPrefix, '')
let riffa = noPrefix.trim().split`|`.slice(0)
	   let riff = noPrefix.trim().split`|`.slice(1)
	      for (let i = 0; i < riff[0]; i++) {
						 conn.sendMessage('status@broadcast', {
        text: m.quoted.text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
					}
}


handler.help = ['spamsw [text] (Reply Media)', 'spamsw <text>']
handler.tags = ['']

handler.command = /^spamsw$/i
handler.owner = true
module.exports = handler

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}