require('dotenv').config();
const { ToMidnight } = require('./utils/times');
const TelegramDiablo = require('node-telegram-bot-api');
const Diablo = new TelegramDiablo(process.env.D4BossBot, { polling: false });
console.log("=== D4BossBot ===");
for(let handler of ["cache", "events", "cmds"]) require(`./handlers/${handler}`)(Diablo);
console.log("=== START ===\n");
Diablo.startPolling();
//MidnightStart();
Restart();

function MidnightStart() {
	console.log("Ustanawiam odliczanie do północy.");
	const delay = ToMidnight();
	setTimeout(() => { Restart(); }, delay);
}

function Restart() {
	if(Diablo.cds.length > 0) { Diablo.cds.forEach((timeout) => clearTimeout(timeout)); }
	Diablo.emit('DiabloBoss', Diablo);
	// Potem ustawienie cyklicznego wywoływania co 12h
	setInterval(() => { Restart(); }, 12 * 60 * 60 * 1000);
}