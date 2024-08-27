require('dotenv').config();
module.exports = {
	run: async (Diablo, text) => {
		try{
			return Diablo.sendMessage(process.env.PublicChannel, text, { parse_mode: 'Markdown' });
		} catch (err) {
			console.log('=== sendToPublic_Error_Handler ===');
			console.error(err);
			return;
		}
	}
}