const { createButtons, setButtons } = require('../utils/createButtons');
module.exports = {
	name: "/notification",
	async execute(Diablo, msg) {
		if(!Diablo.userChoices[msg.chat.id]) { Diablo.userChoices[msg.chat.id] = setButtons(); }
		// Tworzenie menu z przyciskami
		const options = {
			reply_markup: {
				inline_keyboard: createButtons(msg.chat.id)
			}
		};
		Diablo.sendMessage(msg.chat.id, 'Boss Notifications:', options);
	},
}