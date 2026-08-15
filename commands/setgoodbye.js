module.exports = async (sock, from, args, msg, botData) => {
    if (!botData.customGoodbye) botData.customGoodbye = {};
    if (!botData.goodbyeSettings) botData.goodbyeSettings = {};
    const text = args.join(' ');
    if (!text) {
        return await sock.sendMessage(from, { text: '❌ *Please provide a goodbye message!*\n\n*Example:* .setgoodbye Goodbye @user, we will miss you!' }, { quoted: msg });
    }
    botData.customGoodbye[from] = text;
    botData.goodbyeSettings[from] = true;
    await sock.sendMessage(from, { text: `✅ *Custom goodbye message set successfully!*\n\n*Message:* ${text}` }, { quoted: msg });
};
