require('dotenv').config();
// const { ToMidnight } = require('./utils/times');
const TelegramDiablo = require('node-telegram-bot-api');
const Diablo = new TelegramDiablo(process.env.D4BossBot, { polling: false });
console.log("=== D4BossBot ===");
for(let handler of ["cache", "events", "cmds"]) require(`./handlers/${handler}`)(Diablo);
console.log("=== START ===\n");
Diablo.startPolling();
Diablo.emit('DiabloBoss', Diablo);
setInterval(() => {
	console.log("12h-LOOP");
	if(Diablo.touts.length > 0) { Diablo.touts.forEach((timeout) => clearTimeout(timeout)); }
	Diablo.emit('DiabloBoss', Diablo);
}, 12 * 60 * 60 * 1000);