const { Client, Message } = require("discord.js");
require('colors');

module.exports = {
    name: 'restart',
    description: 'Restarts the bot.',

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     */

    async execute(bot, message, parts) {
        console.log(`${`[CLIENT]`.blue} ${`Restarting...`.yellow}`)
        .then(() => bot.destroy())
        .then(() => bot.login(require('../../../config.json').token))
        .then(async () => {
            console.log(`${`[CLIENT]`.blue} ${`Successfully restarted!`.yellow}`);
            await message.react('✅')
        })
    }
}