const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6285172446692']
global.premium = ['6285172446692']
global.youtube = 'https://youtube.com/channel/UC2GOH5mCArh3E4J3sGFMC5g'
global.ownername = 'levi'
global.botname ='𝐕𝐄𝐍𝐙-𝐁𝐎𝐓𝐙𝐌𝐃'
global.donasi = {
    saweria: 'https://saweria.co/riy20',
    nomor: '𝟎85172446692'
}
global.packname = '𝐕𝐄𝐍𝐙-𝐁𝐎𝐓𝐙𝐌𝐃'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
