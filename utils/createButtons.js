function createButtons(Diablo, chatId) {
	try {
		const buttons = Object.keys(Diablo.userChoices[chatId]).map((button) => {
			const buttonText = Diablo.userChoices[chatId][button] ? `✔ ${button}` : `${button}`;
			return { text: buttonText, callback_data: button };
		});
		const inlineKeyboard = [];
		for (let i = 0; i < buttons.length; i += 2) {
			inlineKeyboard.push(buttons.slice(i, i + 2));
		}
		return inlineKeyboard;
	}
	catch (err) { console.error(err); return; }
}
async function setButtons() {
	return {
		"30min": false,
		"15min": false,
		"10min": false,
		"5min": false,
		"1min": false,
		"about time": false,
	};
}
module.exports = { createButtons, setButtons }