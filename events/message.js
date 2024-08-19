module.exports = {
	run: async (Bot, msg) => {
		try {
			console.log(`${msg.chat.title} (${msg.chat.id}) ${msg.chat.type}`);
			console.log(`[${msg.from.id}] ${msg.from.username} (${msg.from.first_name} / ${msg.from.last_name})`);
			console.log(`(${msg.message_id}) Wiadomość:`);
			console.log(msg.text);
			console.log('===\n');
			(msg.chat.id != '-1002082128374')?console.log("Wiadomość spoza grupy"):console.log("Wiadomość w grupie");
			if(Bot.cmds.has(msg.text)) Bot.cmds.get(msg.text).execute(Bot, msg);
			console.log("msg event done.");
			return;
		} catch (err) { console.error(err); return; }
	}
}