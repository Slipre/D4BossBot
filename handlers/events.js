const { readdirSync } = require("fs");
module.exports = (Bot) => {
    const events = readdirSync("./events").filter(file => file.endsWith(".js"));
    let k = 0;
    for (let file of events) {
        try {
            let event = require(`../events/${file}`);
            if (event.event && typeof event.event !== "string") { console.log(file, `Powinien być string`); continue; }
            event.event = event.event || file.replace(".js","");
            Bot.on(event.event, event.run.bind(null, Bot));
            k++;
        } catch(err){
            console.error("🤬 | Nie załadowano eventów.");
            return console.log(err); 
        }
    }
    return console.log(`👌 | Prawidłowo załadowano ${k} eventów.`);
}