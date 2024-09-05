module.exports = {
	name: "/author",
	async execute(Diablo, msg) {
		let text = "If You have questions or need help\nfeel free to contact with me.\nTelegram: @Slipre7"
		return Diablo.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' });
	}
}