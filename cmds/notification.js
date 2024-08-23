const { createButtons, setButtons } = require('../utils/createButtons');
module.exports = {
	name: "/notification",
	async execute(Diablo, msg) {
		console.log("usrcho: ");
		console.log(Diablo.userChoices[msg.chat.id]);
		if(!Diablo.userChoices[msg.chat.id]) { Diablo.userChoices[msg.chat.id] = await setButtons(); }
		console.log(" === ");
		console.log(Diablo.userChoices[msg.chat.id]);
		const options = { reply_markup: { inline_keyboard: createButtons(msg.chat.id) } };
		Diablo.sendMessage(msg.chat.id, 'Boss Notifications:', options);
	}
}