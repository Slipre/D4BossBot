module.exports = {
	run: async (Diablo, err) => {
		const { say } = require('../utils/say');
		say("[ERROR] Webhook_error_EVENT: You can silence this event in ./events/webhook_error.js");
		console.log("=== Webhook_Error_Handler ===\n");
		console.log(err);
		console.log("=== End Of Error ===\n");
	}
}