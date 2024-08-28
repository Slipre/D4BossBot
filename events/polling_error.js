module.exports = {
	run: async (Diablo, err) => {
		const { say } = require('../utils/say');
		say("[ERROR] Polling_error_EVENT: You can silence this event in ./events/polling_error.js");
		console.log("=== Polling_Error_Handler ===\n");
		console.log(err);
		console.log("=== End Of Error ===\n");
	}
}