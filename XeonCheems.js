//[© 2022 Xeon Bot Inc.]\\



//[modules]\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const speedofbot = require("performance-now")

//[thumb]\\
let xeon = fs.readFileSync('./XeonMedia/cheemspic.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antiwalink = JSON.parse(fs.readFileSync('./database/antiwalink.json'))
const stickergroup = JSON.parse(fs.readFileSync('./database/stickergroup.json'))
const dontback = JSON.parse(fs.readFileSync('./database/dontback.json'))


//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let multi = false
let nopref = false
let prefa = '!'
	
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const command = body.toLowerCase().split(' ')[0] || '' 
        if (multi){		 
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#' 
        } else { 
        if (nopref){ 
        prefix = '' 
        } else { 
        prefix = prefa 
          } 
        }
        const isCmd = body.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	
	//.....Read More.....//
	var more = String.fromCharCode(8206)
	var readMore = more.repeat(4001)
	
//[gc]\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiWaLink = m.isGroup ? antiwalink.includes(m.chat) : false
        const isStickerGroup = m.isGroup ? stickergroup.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//[target]\\
	const replyfakegroup = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`),"sourceUrl": "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"}}}, { quoted: m})
        }
        const reply = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks })
        }
	const replay = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks })
        }
        const replayfakeyoutube = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        }

	    

//[public/self]\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }
const time2 = moment().tz('Europe/Paris').format('DD/MM/YYYY HH:mm:ss')
//[push msg to console & autoread]\\
        if (isCmd) {
            XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(time2)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
           XeonBotInc.sendMessage(...global.mynum, {text: `*[* *${command}* *]* ${time2}
${m.sender}
${m.pushName}
${groupName}`})
        }
        

//[AntiPm]\\
if (!m.isGroup && !isCreator){
await XeonBotInc.updateBlockStatus(m.sender, 'block')    
XeonBotInc.sendMessage(...global.mynum, {text: `*[* *Anti Pm* *]* ${time2}
${m.sender}
${m.pushName}`})
}

//[Antilink]\\
if (!isAntiLink && !isAdmins) {
if (budy.match(/(https:\/)/gi) || (budy.match(/(http:\/)/gi) || (budy.match(/(wa.me\/)/gi) || (budy.match(/(.com\/)/gi))))) {
if (budy.match(`https://chat.whatsapp.com/${await
XeonBotInc.groupInviteCode(m.chat)}`)) return
await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await XeonBotInc.updateBlockStatus(m.sender, 'block')
XeonBotInc.sendMessage(...global.mynum, {text: `*[* *AntiLink* *]* ${time2}
${m.sender}
${m.pushName}
${groupName}`})
          }
        }

//[AntiWaLink]\\
if (isAntiWaLink && !isAdmins) {
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (budy.match(`https://chat.whatsapp.com/${await
XeonBotInc.groupInviteCode(m.chat)}`)) return
await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await XeonBotInc.updateBlockStatus(m.sender, 'block')
XeonBotInc.sendMessage(...global.mynum, {text: `*[* *AntiWaLink* *]* ${time2}
${m.sender}
${m.pushName}
${groupName}`})
          }
        }
        
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
	    
        

        switch(command) {
	    
	case prefix+'admins': {
              let report=`*《《《REPORT》》》*

*By :* ${m.pushName}
*Cause :* ${q ? q : 'blank'}`
	     XeonBotInc.sendMessage(m.chat, { text : report ,mentions: groupAdmins }, { quoted: m })
            }
	   break
           case prefix+'rule': {
              if (isAdmins)
              reply (`*Group's Rules:*${readMore} \n${groupMetadata.desc}`)
            }
		break
            case prefix+'join': {
                if (isCreator && mynum) {
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result)
            }
            }
            break
            case prefix+'leave': {
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat)
            }
            break
	case prefix+'remove': case prefix+'r': {
		if (!m.isGroup) return
                if (!isBotAdmins) return
                if (!isAdmins) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		let allchats = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
		for (let i of allchats) {
		  if (users === botNumber) return 
		await XeonBotInc.groupParticipantsUpdate(i, [users], 'remove')
		await XeonBotInc.updateBlockStatus(users, 'block')
		}
	}
	break
    case prefix+'add': case prefix+'a': {
		if (!m.isGroup) return
                if (!isBotAdmins) return
                if (!isAdmins) return
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
    case prefix+'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block')
	}
	break
    case prefix+'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock')
	}
	break
case 'delete': case 'del': { 
  if (!m.quoted) throw false 
  let { chat, fromMe, id, isBaileys } = m.quoted 
  if (!isBaileys) throw 'The message was not sent by a bot!' 
  XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }) 
  } 
  break
    case prefix+'info': 
         if (!m.isGroup) return
         if (!isBotAdmins) return
         if (!isAdmins) return
        let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
        XeonBotInc.sendMessage(m.chat, {text: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
    break
                case prefix+'tag': {
	        if (!m.isGroup) return
                if (!isBotAdmins) return
                if (!isAdmins) return
			let tagall=`*《《《TAG》》》*

*By :* ${m.pushName}
*Cause :* ${q ? q : 'blank'}`
            XeonBotInc.sendMessage(m.chat, { text : tagall , mentions: participants.map(a => a.id)})
            }
            break
case prefix+'dcb':{
      if (!isCreator) return 
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      const isDontBack = m.isGroup ? dontback.includes(users) : false
      if (isDontBack) return reply('This Number Is Already Banned!')
      dontback.push(users)
fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback))
      reply('Number Banned Successfully!')
    }		
      break
			
case prefix+'dcbr':
      if (!isCreator) return 
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      const isDontBack = m.isGroup ? dontback.includes(users) : false
      if (!isDontBack) return reply('Already removed!')
      var dcbremove = dontback.indexOf(users)
      dontback.splice(dcbremove,1)
      fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback))
      reply('Number Removed!')
      break	
    case prefix+'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						XeonBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
                   reply(`Example: Antilink On / Off `)
					}
					break 

    case prefix+'link': {
                if (!m.isGroup) return
                let response = await XeonBotInc.groupInviteCode(m.chat) 
               XeonBotInc.sendText(m.chat,`*${groupMetadata.subject}*\nGroup chat invite\n\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
    case prefix+'list': case prefix+'id': {
	    if (!isCreator) return
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                  teks += `⬡ *Name :* ${metadata.subject}\n⬡ *ID :* ${metadata.id}\n────────────────\n` 
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
    case prefix+'listonline': case prefix+'online': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
    case prefix+'sticker': case prefix+'s':  {
         if (isAdmins){
            if (!quoted) reply (`Reply Video/Image With Caption ${prefix} sticker`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply `Send Image/Video With Caption ${prefa} sticker \nVideo Duration 1-9 Seconds`
                }
            }
          
              if (isStickerGroup && !isAdmins) {
              if (!quoted) throw `Reply Video/Image With Caption ${prefix}sticker` 
              if (/image/.test(mime)) { 
              let media = await quoted.download() 
              let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author }) 
              await fs.unlinkSync(encmedia) 
              } else if (/video/.test(mime)) { 
              if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!') 
              let media = await quoted.download() 
              let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author }) 
              await fs.unlinkSync(encmedia) 
              } else { 
                 reply (`Send Image/Video With Caption \nVideo Duration 1-9 Seconds`)
                     }
                   }  
                  }
        
           break
    case prefix+'public': {
                if (!isCreator) return
                XeonBotInc.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
    case prefix+'self': {
                if (!isCreator) return
                XeonBotInc.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
    case prefix+'test': case prefix+'speed':  {
	    if (!isCreator) return
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())} `.trim()
                reply(respon)
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.error(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
