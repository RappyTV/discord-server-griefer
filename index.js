const cfg = require('./config.json');
const fs = require('fs');
require('colors');

// TODO: Write all output messages
//! Write all output messages

if(cfg.botAccount == true) {
    const { Client, Intents } = require('discord.js');
    const bot = new Client({
        restTimeOffset: 0,
        intents: [
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
            Intents.FLAGS.DIRECT_MESSAGE_TYPING,
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_BANS,
            Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
            Intents.FLAGS.GUILD_INTEGRATIONS,
            Intents.FLAGS.GUILD_INVITES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_MESSAGE_TYPING,
            Intents.FLAGS.GUILD_PRESENCES,
            Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
            Intents.FLAGS.GUILD_VOICE_STATES,
            Intents.FLAGS.GUILD_WEBHOOKS
        ],
        partials: [
            'CHANNEL',
            'GUILD_MEMBER',
            'GUILD_SCHEDULED_EVENT',
            'MESSAGE',
            'REACTION',
            'USER'
        ]
    });
    bot.cfg = cfg;

    // Handlers
    require('./src/handlers/commandHandler').initialize(true, bot);
    require('./src/handlers/eventHandler').initialize(true, bot);

    if(!cfg.token || typeof cfg.token !== 'string') {
        return console.log(`${`[ERROR]`.red} ${`An invalid token was provided!`.yellow}`);
    }
    try {
        bot.login(cfg.token);
    } catch(err) {
        return console.log(`${`[ERROR]`.red} ${`Please provide a valid token!`.yellow}`);
    }
} else {
    const { Client } = require('discord.js-selfbot');
    const client = new Client({
        restTimeOffSet: 0,
        partials: [
            'CHANNEL',
            'GUILD_MEMBER',
            'GUILD_SCHEDULED_EVENT',
            'MESSAGE',
            'REACTION',
            'USER'
        ]
    });
    client.cfg = cfg;

    // Handlers
    require('./src/handlers/commandHandler').initialize(false, client);
    require('./src/handlers/eventHandler').initialize(false, client);

    if(!cfg.token || typeof cfg.token !== 'string') {
        return console.log(`${`[ERROR]`.red} ${`An invalid token was provided!`.yellow}`);
    }
    try {
        client.login(cfg.token);
    } catch(err) {
        return console.log(`${`[ERROR]`.red} ${`Please provide a valid token!`.yellow}`);
    }
}