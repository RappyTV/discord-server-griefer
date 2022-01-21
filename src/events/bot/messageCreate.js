const { Message } = require("discord.js");

let bot;

module.exports = {
    description: `Is triggered everytime the Client is started.`,
    async init(client) {
        bot = client;
    },

    /**
     * 
     * @param {Message} message 
     */

    trigger: async (message) => {
        if(message.author.bot) return;
        if(!message.content.startsWith(bot.cfg.prefix)) return;
        let parts = message.content.split(/ +/);

        let dummyparts = message.content.slice(bot.cfg.prefix.length).trim().split(/ +/);
        let dummycmd = dummyparts.shift().toLowerCase();
        let comm = bot.commands.get(dummycmd) || bot.commands.find(a => a.aliases && a.aliases.includes(dummycmd));

        if(comm) {
            try {
                comm.execute(bot, message, parts);
            } catch(err) {
                console.error(new Error(err));
            }
        } else {
            console.error(new Error(`The command ${parts[0]} is non-existent!`))
        }
    }
}