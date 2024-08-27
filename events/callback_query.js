const { createButtons, setButtons } = require('../utils/createButtons');
module.exports = {
	run: async (Diablo, query) => {
		try {
            // Jeśli użytkownik nie ma jeszcze zapisanych wyborów, inicjalizujemy tablicę
            if(!Diablo.userChoices[query.message.chat.id]) { Diablo.userChoices[query.message.chat.id] = setButtons(); }
			// Przełączanie stanu kliknięcia
			Diablo.userChoices[query.message.chat.id][query.data] = !Diablo.userChoices[query.message.chat.id][query.data];
			// Tworzenie zaktualizowanego menu z przyciskami
			const options = { reply_markup: { inline_keyboard: createButtons(Diablo, query.message.chat.id) } };
			// Aktualizowanie wiadomości z menu przycisków
			Diablo.editMessageReplyMarkup(options.reply_markup, {
				chat_id: query.message.chat.id,
				message_id: query.message.message_id
			});
			return;
		}
		catch (err) { console.error(err); return; }
	}
}