let handler = m => m

handler.all = async function (m) {
    if (m.message) {
      function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const tuptime = process.uptime() * 1000
const kuptime = clockString(tuptime)
setInterval(() => {
 conn.setStatus(`› Runtime: ${kuptime}
| Bismillah`).catch((_) => _)
},1)

    }
}

module.exports = handler