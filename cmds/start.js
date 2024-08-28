const { setButtons } = require('../utils/createButtons');
module.exports = {
	name: "/start",
	async execute(Diablo, msg) {
		if(!Diablo.userOnline.has(msg.from.id)) {
			Diablo.userOnline.add(msg.from.id);
			if(!Diablo.userChoices[msg.from.id]) { Diablo.userChoices[msg.from.id] = await setButtons(); }
			Diablo.sendMessage(msg.from.id, `Notification turned on`);
		} else { Diablo.sendMessage(msg.from.id, `Notifications are already turned on`); }
		return;
	}
}