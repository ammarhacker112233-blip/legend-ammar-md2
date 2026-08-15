module.exports = async (sock, from, args, msg, botData) => {
    if (!botData.goodbyeSettings) botData.goodbyeSettings = {};
    const sub = args[0] ? args[0].toLowerCase() : '';
    if (sub === 'on') {
        botData.goodbyeSettings[from] = true;
        await sock.sendMessage(from, { text: '✅ *Goodbye message has been enabled for this group!*' }, { quoted: msg });
    } else if (sub === 'off') {
        botData.goodbyeSettings[from] = false;
        await sock.sendMessage(from, { text: '❌ *Goodbye message has been disabled for this group!*' }, { quoted: msg });
    } else {
        const status = botData.goodbyeSettings[from] ? 'Enabled ✅' : 'Disabled ❌';
        await sock.sendMessage(from, { text: `👋 *Goodbye Feature Status:* ${status}\n\n*Usage:*\n.goodbye on\n.goodbye off\n.setgoodbye <custom message>` }, { quoted: msg });
    }
};
