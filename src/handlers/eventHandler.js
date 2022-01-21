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

        client.events = new Collection();
        if(bot) {
            const dir = readdirSync('./src/events/bot').filter(file => file.endsWith('.js'));

            for(const file of dir) {
                const event = require(`../events/bot/${file}`);
                if(!event.description || !event.trigger) return console.log(`${`[ERROR]`.red} ${`The ${event}-Event has no valid desctiption, or trigger!`.yellow}`);

                client.events.set(file.slice(0, -3), event);

                event.init(client);
                client.on(file.slice(0, -3), event.trigger);
            }
        } else {
            const dir = readdirSync('./src/events/client').filter(file => file.endsWith('.js'));

            for(const file of dir) {
                const event = require(`../events/client/${file}`);
                if(!event.description || !event.trigger) return console.log(`${`[ERROR]`.red} ${`The ${event}-Event has no valid desctiption, or trigger!`.yellow}`);

                event.init(client);
                client.events.set(file.slice(0, -3), event);
            }
        }
    }
}