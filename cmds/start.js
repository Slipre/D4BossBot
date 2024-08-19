module.exports = {
	name: "/start",
	async execute(Bot, msg) {
		console.log(msg.chat.id);
        return Bot.sendMessage(msg.chat.id, 'Hello, I m diablo Bot.. I will trackdown all bosses ;D', { parse_mode: 'Markdown' });
	}
}