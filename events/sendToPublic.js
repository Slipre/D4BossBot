require('dotenv').config();
module.exports = {
	run: async (Diablo, text) => {
		try{
			if (process.env.PublicChannel)
				{ return Diablo.sendMessage(process.env.PublicChannel, text, { parse_mode: 'Markdown' }); }
			else { return; }
		} catch (err) {
			console.log('=== sendToPublic_Error_Handler ===');
			console.error(err);
			return;
		}
	}
}