const { readdirSync } = require("fs");
module.exports = (Diablo) => {
	Diablo.cmds = new Map();
	const cmds = readdirSync("./cmds").filter(file => file.endsWith(".js"));
	for (let file of cmds) {
		try {
			const command = require(`../cmds/${file}`);
			Diablo.cmds.set(command.name, command);
		} catch (err) {
			console.error("🤬 | Commands not loaded.");
			return console.log(err);
		}
	}
	return console.log(`👌 | ${Diablo.cmds.size} Commands loaded correctly.`);
}