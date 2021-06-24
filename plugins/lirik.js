const { fetchjson, fetchtext } = require('./lib/fetcher.js')
let handler = async (m, { conn, text, args }) => {
    if (args.length == 0) return reply(`Example: ${prefix + command} atouna el toufoule`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=YukinoApi&query=${query}`)
                    m.reply(get_result.result)
                    }
                    
handler.help = ['lirik']
handler.tags = ['internet']

handler.command = /^(lirik)$/i

module.exports = handler