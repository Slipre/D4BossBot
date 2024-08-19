module.exports = {
	name: "/start",
	async execute(Diablo, msg) {
		console.log(msg.chat.id);
		Diablo.emit('DiabloBoss', Diablo);
        return Diablo.sendMessage(msg.chat.id, 'Hello, I m diablo Diablo.. I will trackdown all bosses ;D', { parse_mode: 'Markdown' });
	}
}