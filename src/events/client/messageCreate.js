const { Message } = require("discord.js");
require('colors');

let client;

module.exports = {
    description: `Is triggered everytime the Client is started.`,
    async init(cclient) {
        client = cclient;
    },

    /**
     * 
     * @param {Message} message 
     */

    trigger: async (message) => {
        if(message.author.bot) return;
        if(!message.content.startsWith(client.cfg.prefix)) return;
        if(client.cfg.myID != '' || client.cfg.myID != message.author.id) return;
        let parts = message.content.split(/ +/);

        let dummyparts = message.content.slice(client.cfg.prefix.length).trim().split(/ +/);
        let dummycmd = dummyparts.shift().toLowerCase();
        let comm = client.commands.get(dummycmd) || client.commands.find(a => a.aliases && a.aliases.includes(dummycmd));

        if(comm) {
            try {
                comm.execute(client, message, parts);
            } catch(err) {
                console.log(`${`[ERROR]`.red} ${`${err}`.yellow}`);
            }
        } else {
            console.log(`${`[ERROR]`.red} ${`The command you tried to execute is non-existent!`.yellow}`);
        }
    }
}