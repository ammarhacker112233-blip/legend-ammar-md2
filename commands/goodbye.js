module.exports = async (sock, from, msg, isAdmin, botData, saveBotData, args) => {
    if (!isAdmin || !from.endsWith('@g.us')) {
        return await sock.sendMessage(from, { text: '❌ Only admins can use this command in groups.' }, { quoted: msg });
    }
    if (!botData.goodbyeSettings) botData.goodbyeSettings = {};
    const sub = args[0] ? args[0].toLowerCase() : '';
    if (sub === 'on') {
        botData.goodbyeSettings[from] = true;
        saveBotData();
        await sock.sendMessage(from, { text: '✅ *Goodbye message has been enabled for this group!*' }, { quoted: msg });
    } else if (sub === 'off') {
        botData.goodbyeSettings[from] = false;
        saveBotData();
        await sock.sendMessage(from, { text: '❌ *Goodbye message has been disabled for this group!*' }, { quoted: msg });
    } else {
        const status = botData.goodbyeSettings[from] ? 'Enabled ✅' : 'Disabled ❌';
        await sock.sendMessage(from, { text: `👋 *Goodbye Feature Status:* ${status}\n\n*Usage:*\n.goodbye on\n.goodbye off\n.setgoodbye <custom message>` }, { quoted: msg });
    }
};
