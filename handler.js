let util = require('util')
let simple = require('./lib/simple')
let { WAConnection: _WAConnection, WA_MESSAGE_STUB_TYPES, Presence, Mimetype } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
module.exports = {
  async handler(m) {
    try {
    	simple.smsg(this, m)
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.level)) user.level = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.limit)) user.limit = 10
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.money)) user.money = 0
            
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

            if (!'Banneduser' in user) user.Banneduser = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
        
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
//males ngurusin :vv
          if (!isNumber(user.Thunt)) user.Thunt = 0
          if (!isNumber(user.area)) user.area = 1
          if (!isNumber(user.max_area)) user.max_area = 1
          if (!isNumber(user.attack)) user.attack = 1
          if (!isNumber(user.defense)) user.defense = 1
          if (!isNumber(user.max_hp)) user.max_healt = 100

        } else global.DATABASE._data.users[m.sender] = {
        healt: 100,
        level: 0,
        exp: 0,
        limit: 10,
        lastclaim: 0,
        money: 0,
        diamond: 0,
        iron: 0,
        common: 0,
        uncommon: 0,
        mythic: 0,
        legendary: 0,
        pet: 0,
        potion: 0,
        sampah: 0,
        armor: 0,
        kucing: 0,
        kucinglastclaim: 0,
        kuda: 0,
        kudalastclaim: 0,
        rubah: 0,
        rubahlastclaim: 0,
        anjing: 0,
        anjinglastclaim: 0,
        Banneduser: false,
        BannedReason: '',
        warn: 0,
        afk: -1,
        afkReason: '',
        anakkucing: 0,
        anakkuda: 0,
        anakrubah: 0,
        anakanjing: 0,
        makananpet: 0,
        kayu: 0,
        batu: 0,
        string: 0,
        sword: 0,
        sworddurability: 0,
        pickaxe: 0,
        pickaxedurability: 0,
        fishingrod: 0,
        fishingroddurability: 0,
        lastadventure: 0,
        lastfishing: 0,
        lastdungeon: 0,
        lastduel: 0,
        lastmining: 0,
        lastweekly: 0,
        lastmonthly: 0
        }
    
        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!'isBanned' in chat) chat.isBanned = false
          if (!'welcome' in chat) chat.welcome = false
          if (!'sWelcome' in chat) chat.sWelcome = ''
          if (!'sBye' in chat) chat.sBye = ''
          if (!'delete' in chat) chat.delete = false
          if (!'antiLink' in chat) chat.antiLink = false
          if (!'antiToxic' in chat) chat.antiToxic = true
          if (!'antiVirtex' in chat) chat.antiVirtex = true
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          sWelcome: '',
          sBye: '',
          delete: false,
          antiLink: false,
          antiToxic: true,
          antiVirtex: true
        }
      } catch (e) {
        console.error(e)
      }
      
      if (!m.fromMe && opts['self']) return
      
/*jika Ada Yang Gunain Bot Di Status, Nanti Gk Akan Muncul Apa Apa*/
      if (m.chat == 'status@broadcast') return
      
/*Untuk Auto Read (centang Biru)*/
      conn.chatRead(m.chat)
      if (typeof m.text !== 'string') m.text = ''
      if (m.isBaileys) return

      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        await plugin.all.call(this, m)
      }

      m.exp += Math.ceil(Math.random() * 10)
    	let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? await this.groupMetadata(m.chat) : {}
      let participants = m.isGroup ? groupMetadata.participants : []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let DevMode = (global.DeveloperMode.toLowerCase() == 'true')
    	for (let name in global.plugins) {
    	  let plugin = global.plugins[name]
        if (!plugin) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
  		  let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
             typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text),new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before == 'function') if (await plugin.before.call(this, m, {
          match, user, groupMetadata
        })) continue
    	  if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
  	  	  let [command, ...args] = noPrefix.trim().split` `.filter(v=>v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
    		  command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
  		  	let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

    			if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            
        /*Message If Banned*/
            if (chat.isBanned == true || user.Banneduser == true) {
                if (name != 'math_answer.js' && name != '_afk.js' && name != 'leveling.js') {       
                    this.reply(m.chat, `
*Anda Terbanned* ${user.BannedReason ? `Karena *${user.BannedReason}*` : ''}
Join Official Group *${conn.getName(conn.user.jid)}* untuk keterangan lebih lanjut

${(global.linkGC).map((v, i) => '*Group ' + (i + 1) + '*\n' + v).join`\n\n`}

*Atau hubungi*
${(global.owner).map((v, i) => 'Owner ' + (i + 1) + ' *: wa.me/' + v + '*').join`\n`}
${(global.mods).map((v, i) => 'Moderator ' + (i + 1) + ' *: wa.me/' + v + '*').join`\n`}`.trim(), m) 
                }
            }
            
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.Banneduser) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
    			if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 6 // XP Earning per command
          if (xp > 99999999999) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          try {
            await plugin.call(this, m, {
              match,
              usedPrefix,
              noPrefix,
              _args,
              args,
              command,
              text,
              conn: this,
              participants,
              groupMetadata,
              user,
              bot,
              isROwner,
              isOwner,
              isAdmin,
              isBotAdmin,
              DevMode,
              isPrems
            })
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.log(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user)) 
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
    			break
  	  	}
    	}
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }
    
        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error ? 0 : 1,
            last: now,
            lastSuccess: m.error ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (!m.error) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      } 

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
  async welcome({ m, participants }) {
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (!chat.welcome) return
    for (let user of participants) {
      let pp = './src/avatar_contact.png'
      try {
        pp = await this.getProfilePicture(user)
      } catch (e) {
      } finally {
        let text = (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@user', '@' + user.split('@')[0]).replace('@subject', this.getName(m.key.remoteJid))
        this.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, {
          contextInfo: {
            mentionedJid: [user]
          }
        })
      }
    }
  },
  async leave({ m, participants }) {
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (!chat.welcome) return
    for (let user of participants) {
      if (this.user.jid == user) continue
      let pp = './src/avatar_contact.png'
      try {
        pp = await this.getProfilePicture(user)
      } catch (e) {
      } finally {
        let text = (chat.sBye || this.bye || conn.bye || 'Bye, @user!').replace('@user', '@' + user.split('@')[0])
        this.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, {
          contextInfo: {
            mentionedJid: [user]
          }
        })
      }
    }
  },
  async delete(m) {
      if (m.key.fromMe) return
      if (m.key.remoteJid === 'status@broadcast') return
      let chat = global.DATABASE._data.chats[m.key.remoteJid]
      if (!chat.delete) return
      await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.disable delete*
`.trim(), m.message, {
        contextInfo: {
            mentionedJid: [m.participant]
        }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Perintah ini hanya dapat digunakan oleh _*OWWNER!1!1!*_',
    owner: 'Perintah ini hanya dapat digunakan oleh _*Owner Bot*_!',
    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_ !',
    premium: 'Perintah ini hanya untuk member _*Premium*_ !',
    group: 'Perintah ini hanya dapat digunakan di grup!',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',
    admin: 'Perintah ini hanya untuk *Admin* grup!',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
    unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Manusia.16*'
  }[type]
  if (msg) return m.reply(msg)
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
