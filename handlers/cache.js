module.exports = (Diablo) => {
	try {
		Diablo.cds = new Array();
		Diablo.cmds = new Map();
		Diablo.userSwitch = Set();
		Diablo.userChoices = {};
		return console.log(`👌 | Prawidłowo zarejestrowano cache.`);
	} catch (err) {
		console.error("🤬 | Nie załadowano cache.");
		return console.log(err);
	}
}

