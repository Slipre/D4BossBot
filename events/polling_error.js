module.exports = {
	run: async (Diablo, err) => {
		const { say } = require('../utils/say');
		say(" ");
		console.log("=== Polling_Error_Handler ===\n");
		console.log(err);
		console.log("=== End Of Error ===\n");
	}
}