
//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}
///////////DON'T COME BACK////////////

global.dontback = []


//═══════[modification]════════\\
global.owner = ['994406191197','33758387451','962777844696'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.mynum = ['33758387451@s.whatsapp.net'] //another owner number
global.premium = ['33758387451'] //premium number
global.pengguna = 'AA' //username
global.botnma = 'AA' //bot name
global.ownernma = 'AA' //owner name
global.packname = 'Sticker' //sticker package name
global.author = 'AA' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['!'] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
