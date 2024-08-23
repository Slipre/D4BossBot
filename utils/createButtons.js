function createButtons(Diablo, chatId) {
	try {
		// Przygotowanie przycisków z zaznaczeniami
		const buttons = Object.keys(Diablo.userChoices[chatId]).map((button) => {
			const buttonText = Diablo.userChoices[chatId][button] ? `✔ ${button}` : `${button}`;
			return { text: buttonText, callback_data: button };
		});
		// Grupowanie przycisków w dwóch kolumnach
		const inlineKeyboard = [];
		for (let i = 0; i < buttons.length; i += 2) {
			inlineKeyboard.push(buttons.slice(i, i + 2));
		}
		return inlineKeyboard;
	}
	catch (err) { console.error(err); return; }
}
function setButtons() {
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