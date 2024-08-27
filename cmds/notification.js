const { createButtons, setButtons } = require('../utils/createButtons');
module.exports = {
	name: "/notification",
	async execute(Diablo, msg) {
		if(!Diablo.userChoices[msg.from.id]) { Diablo.userChoices[msg.from.id] = await setButtons(); }
		const options = { reply_markup: { inline_keyboard: createButtons(Diablo, msg.from.id) } };
		return Diablo.sendMessage(msg.from.id, 'Boss Notifications:', options);
	}
}