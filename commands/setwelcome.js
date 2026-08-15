module.exports = async (sock, from, args, msg, botData) => {
    if (!botData.customWelcome) botData.customWelcome = {};
    if (!botData.welcomeSettings) botData.welcomeSettings = {};
    const text = args.join(' ');
    if (!text) {
        return await sock.sendMessage(from, { text: '❌ *Please provide a welcome message!*\n\n*Example:* .setwelcome Hello @user, welcome to @group!' }, { quoted: msg });
    }
    botData.customWelcome[from] = text;
    botData.welcomeSettings[from] = true;
    await sock.sendMessage(from, { text: `✅ *Custom welcome message set successfully!*\n\n*Message:* ${text}` }, { quoted: msg });
};
