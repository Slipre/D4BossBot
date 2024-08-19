require('dotenv').config();
const TelegramDiablo = require('node-telegram-bot-api');
const Diablo = new TelegramDiablo(process.env.D4BossBot, { polling: false });
Diablo.cds = new Set();
Diablo.cmds = new Map();
console.log("=== D4BossDiablo ===");
Diablo.startPolling();
for(let handler of ["events", "cmds"]) require(`./handlers/${handler}`)(Diablo);
console.log("=== START ===\n");

function telegram_error_handler(err) {
	console.log("=== Error_Handler ===\n");
	console.log(err);
	console.log("=== End Of Error ===\n");
};

Diablo.on('polling_error', telegram_error_handler);
Diablo.on('webhook_error', telegram_error_handler);