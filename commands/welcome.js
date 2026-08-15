module.exports = async (sock, from, args, msg, botData) => {
    if (!botData.welcomeSettings) botData.welcomeSettings = {};
    const sub = args[0] ? args[0].toLowerCase() : '';
    if (sub === 'on') {
        botData.welcomeSettings[from] = true;
        await sock.sendMessage(from, { text: '✅ *Welcome message has been enabled for this group!*' }, { quoted: msg });
    } else if (sub === 'off') {
        botData.welcomeSettings[from] = false;
        await sock.sendMessage(from, { text: '❌ *Welcome message has been disabled for this group!*' }, { quoted: msg });
    } else {
        const status = botData.welcomeSettings[from] ? 'Enabled ✅' : 'Disabled ❌';
        await sock.sendMessage(from, { text: `👋 *Welcome Feature Status:* ${status}\n\n*Usage:*\n.welcome on\n.welcome off\n.setwelcome <custom message>` }, { quoted: msg });
    }
};
