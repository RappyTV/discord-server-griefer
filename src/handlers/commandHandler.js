const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
require('colors');

module.exports = {

    /**
     * 
     * @param {Boolean} bot Specifies, if the account is a bot account or a user account
     * @param {Client} client Hands the client over
     */

    async initialize(bot, client) {

        client.commands = new Collection();
        if(bot) {
            const dir = readdirSync('./src/commands/bot').filter(file => file.endsWith('.js'));

            for(const file of dir) {
                const cmd = require(`../commands/bot/${file}`);
                if(!cmd.name || !cmd.description || !cmd.execute) return console.log(`${`[ERROR]`.red} ${`The ${cmd}-Command has no valid name, description or execute function!`.yellow}`);

                client.commands.set(cmd.name, cmd);
            }
        } else {
            const dir = readdirSync('./src/commands/client').filter(file => file.endsWith('.js'));

            for(const file of dir) {
                const cmd = require(`../commands/client/${file}`);
                if(!cmd.name || !cmd.description || !cmd.execute) return console.log(`${`[ERROR]`.red} ${`The ${cmd}-Command has no valid name, description or execute function!`.yellow}`);

                client.commands.set(cmd.name, cmd);
            }
        }
    }
}