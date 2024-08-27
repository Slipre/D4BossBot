require('dotenv').config();
module.exports = {
	run: async (Diablo, text, button) => {
		try {
			for (const Online of Diablo.userOnline) {
				if(Diablo.userChoices[Online] && (Diablo.userChoices[Online][button])) Diablo.sendMessage(Online, text, { parse_mode: 'Markdown' }); 
			}
			return;
		} catch (err) {
			console.log('=== sendToPrivate_Error_Handler ===');
			console.error(err);
			return;
		}
	}
}