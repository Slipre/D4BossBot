require('dotenv').config();
const TelegramDiablo = require('node-telegram-bot-api');
const Diablo = new TelegramDiablo(process.env.TOKEN, { polling: false });
console.log("=== D4BossBot ===");
for(let handler of ["cache", "events", "cmds"]) require(`./handlers/${handler}`)(Diablo);
console.log("===");
Diablo.startPolling();
Diablo.emit('DiabloBoss', Diablo);
setInterval(() => {
	if(Diablo.touts.length > 0) { Diablo.touts.forEach((timeout) => clearTimeout(timeout)); }
	Diablo.emit('DiabloBoss', Diablo);
}, 12 * 60 * 60 * 1000);