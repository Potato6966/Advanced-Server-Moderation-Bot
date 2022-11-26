const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now! [Modified by Ano Gaming YT#5457]`)
    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} servers`, `${totalUsers} users!` ], i = 0;
    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities} | { type: "WATCHING" }),5000)
    
};