const { readdirSync } = require("fs");
module.exports = (Diablo) => {
    Diablo.cmds = new Map();
    const cmds = readdirSync("./cmds").filter(file => file.endsWith(".js"));
    let k = 0;
    for (let file of cmds) {
        try {
            const command = require(`../cmds/${file}`);
            Diablo.cmds.set(command.name, command);
        } catch (err) {
            console.error("🤬 | Nie załadowano komend.");
            return console.log(err);
        }
    }
    return console.log(`👌 | Prawidłowo zarejestrowano ${Diablo.cmds.size} komend.`);
}