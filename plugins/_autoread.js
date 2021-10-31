let handler = m => m

handler.all = async function (m) {
    if (m.message) {
      conn.chatRead(m.chat)
    }
}

module.exports = handler