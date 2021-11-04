let handler = async (m, { conn, usedPrefix: _p }) => {
  let uptime = process.uptime()
function count(seconds){

if (typeof seconds !== "number") throw "connError: Unexpected Param " + typeof seconds

let hours = Math.floor(seconds / (60*60));
let minutes = Math.floor(seconds % (60*60) / 60);
let second = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(second)} Detik`
}
function pad(s) {
return (s < 10 ? '0' : '') + s;
}


let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;

await conn.setStatus(`Aktif Selama : ${count(uptime)}`)
settingstatus = new Date() * 1;            
          }
}

module.exports = handler