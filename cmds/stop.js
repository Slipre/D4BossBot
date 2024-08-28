module.exports = {
	name: "/stop",
	async execute(Diablo, msg) {
		if(Diablo.userOnline.has(msg.from.id)) {
			Diablo.userOnline.delete(msg.from.id);
			Diablo.sendMessage(msg.from.id, `Notifications turned off`);
		} else { Diablo.sendMessage(msg.from.id, `Notifications are already turned off`); }
		return;
	}
}