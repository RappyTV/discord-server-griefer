const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");

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
                if(!event.description || !event.trigger) return console.log(``)

                client.events.set(file.slice(0, -3), event);

                event.init(client);
                client.on(file.slice(0, -3), event.trigger);
            }
        } else {
            const dir = readdirSync('./src/events/client').filter(file => file.endsWith('.js'));

            for(const file of dir) {
                const event = require(`../events/client/${file}`);
                if(!event.description || !event.trigger) return console.log(``)

                event.init(client);
                client.events.set(file.slice(0, -3), event);
            }
        }
    }
}