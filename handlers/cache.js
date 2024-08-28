module.exports = (Diablo) => {
	try {
		Diablo.touts = new Array();
		Diablo.cmds = new Map();
		Diablo.userOnline = new Set();
		Diablo.userChoices = {};
		return console.log(`👌 | Cache loaded correctly.`);
	} catch (err) {
		console.error("🤬 | Cache not loaded.");
		return console.log(err);
	}
}

