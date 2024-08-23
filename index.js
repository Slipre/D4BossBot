require('dotenv').config();
const { ToMidnight } = require('./utils/times');
const { say } = require('./utils/say');
const TelegramDiablo = require('node-telegram-bot-api');
const Diablo = new TelegramDiablo(process.env.D4BossBot, { polling: false });
Diablo.cds = new Array();
Diablo.cmds = new Map();
console.log("=== D4BossBot ===");
Diablo.startPolling();
for(let handler of ["events", "cmds"]) require(`./handlers/${handler}`)(Diablo);
console.log("=== START ===\n");
MidnightStart();

function telegram_error_handler(err) {
	say("");
	console.log("=== Error_Handler ===\n");
	console.log(err);
	console.log("=== End Of Error ===\n");
};

Diablo.on('polling_error', telegram_error_handler);
Diablo.on('webhook_error', telegram_error_handler);

function MidnightStart() {
	console.log("Ustanawiam odliczanie do północy.");
	const delay = ToMidnight();
	setTimeout(() => { MidnightRestart(); }, delay);
}

function MidnightRestart() {
	if(Diablo.cds.length > 0) { Diablo.cds.forEach((timeout) => clearTimeout(timeout)); }
	Diablo.emit('DiabloBoss', Diablo);
	// Potem ustawienie cyklicznego wywoływania co 12h
	setInterval(() => { MidnightRestart(); }, 12 * 60 * 60 * 1000);
}