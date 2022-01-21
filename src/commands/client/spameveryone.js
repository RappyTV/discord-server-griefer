const { Client, Message, Permissions } = require("discord.js");
require('colors');
require('colors');

module.exports = {
    name: 'spameveryone',
    description: 'Spams everyone in all possible channels.',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        message.guild.channels.cache.forEach(ch => {
            if(ch.type == 'text') return;
            if(ch.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) {
                console.log(`${`[INFO]`.cyan} ${`Started spamming @Everyone Pings!`.yellow}`)
                let b = true;

                const filter = (m) => m.author.id == message.author.id;
                const col = message.channel.createMessageCollector({ filter });

                col.on('collect', async msg => {
                    let array = msg.content.split(/ +/);

                    if(array[0].toLowerCase() == `${bot.cfg.prefix}stop`) {
                        b = false;
                        col.stop("fs");
                    }
                })

                col.on('end', async (collected, reason) => {
                    if(reason == `fs`) {
                        console.log(`${`[INFO]`.cyan} ${`Stopped spamming @Everyone Pings!`.yellow}`)
                    }
                })

                while(b == true) {
                    ch.send({ content: `${bot.cfg.messages.spamEveryone}`});
                }
            }
        })
    }
}