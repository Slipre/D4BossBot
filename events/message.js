module.exports = {
	run: async (Diablo, msg) => {
		try {
			console.log(`${msg.chat.title} (${msg.chat.id}) ${msg.chat.type}`);
			console.log(`[${msg.from.id}] ${msg.from.username} (${msg.from.first_name} / ${msg.from.last_name})`);
			console.log(`(${msg.message_id}) Wiadomość:`);
			console.log(msg.text);
			console.log('===\n');
			if(Diablo.cmds.has(msg.text)) Diablo.cmds.get(msg.text).execute(Diablo, msg);
			console.log("msg event done.");
			return;
		} catch (err) { console.error(err); return; }
	}
}