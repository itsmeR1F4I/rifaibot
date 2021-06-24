let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087754224995] [di utamakan]
│ • Indosat [085643833474]
│ • Gopay Ndak ada om
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287754224995
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
