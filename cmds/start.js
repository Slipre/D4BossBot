const { setButtons } = require('../utils/createButtons');
module.exports = {
	name: "/start",
	async execute(Diablo, msg) {
		if(!Diablo.userOnline.has(msg.from.id)) {
			Diablo.userOnline.add(msg.from.id);
			if(!Diablo.userChoices[msg.from.id]) { Diablo.userChoices[msg.from.id] = await setButtons(); }
			Diablo.sendMessage(msg.from.id, `Notification turned ON`);
		} else { Diablo.sendMessage(msg.from.id, `Notifiactions are ON`); }
		return;
	}
}