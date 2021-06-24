let handler = function (m) {
  this.sendContact(m.chat, '6287754224995', 'Rifai', m)
  //plsss do not change this, jika mau add boleh tapi jangan rubah
  this.sendContact(m.chat, '6281220951879', 'fauzy', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
