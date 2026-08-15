module.exports = async (sock, from, msg, isAdmin, botData, saveBotData, args) => {
    if (!isAdmin || !from.endsWith('@g.us')) {
        return await sock.sendMessage(from, { text: '❌ Only admins can use this command in groups.' }, { quoted: msg });
    }
    if (!botData.customGoodbye) botData.customGoodbye = {};
    if (!botData.goodbyeSettings) botData.goodbyeSettings = {};
    const text = args.join(' ');
    if (!text) {
        return await sock.sendMessage(from, { text: '❌ *Please provide a goodbye message!*\n\n*Example:* .setgoodbye Goodbye @user, we will miss you!' }, { quoted: msg });
    }
    botData.customGoodbye[from] = text;
    botData.goodbyeSettings[from] = true;
    saveBotData();
    await sock.sendMessage(from, { text: `✅ *Custom goodbye message set successfully!*\n\n*Message:* ${text}` }, { quoted: msg });
};
