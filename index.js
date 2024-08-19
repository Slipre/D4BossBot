require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const Bot = new TelegramBot(process.env.D4BossBot, { polling: false });
Bot.cds = new Set();
Bot.cmds = new Map();
console.log("=== D4BossBot ===");
Bot.startPolling();
for(let handler of ["events", "cmds"]) require(`./handlers/${handler}`)(Bot);
console.log("=== START ===\n");

function telegram_error_handler(err) {
	console.log("=== Error_Handler ===\n");
	console.log(err);
	console.log("=== End Of Error ===\n");
};

Bot.on('polling_error', telegram_error_handler);
Bot.on('webhook_error', telegram_error_handler);