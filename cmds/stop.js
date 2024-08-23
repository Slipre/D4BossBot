module.exports = {
	name: "/stop",
	async execute(Diablo, msg) {
		if(Diablo.userOnline.has(msg.chat.id)) Diablo.userOnline.delete(msg.chat.id);
        return Diablo.sendMessage(msg.chat.id, `Notifications are OFF`);
	}
}