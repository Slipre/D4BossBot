module.exports = {
	name: "/start",
	async execute(Diablo, msg) {
        return Diablo.sendMessage(msg.chat.id, `Hello, I'm diablo Diablo.. I will trackdown all bosses ;D [Dev]`, { parse_mode: 'Markdown' });
	}
}