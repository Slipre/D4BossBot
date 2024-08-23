module.exports = {
	name: "/start",
	async execute(Diablo, msg) {
		if(!Diablo.userOnline.has(msg.chat.id)) Diablo.userOnline.add(msg.chat.id);
        return Diablo.sendMessage(msg.chat.id, `Notification are ON`);
	}
}