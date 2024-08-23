module.exports = {
	name: "/help",
	async execute(Diablo, msg) {
		let text = "Hi! I'm your Diablo boss notification bot.\n" +
		"I'm here to keep you updated about upcoming bosses.\n\n" +
		"Here are the commands you can use:\n" +
		"/start - _Enable notifications_.\n" +
		"/stop - _Disable notifications_.\n" +
		"/notification - _Set the times for notifications_."
        return Diablo.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' });
	}
}