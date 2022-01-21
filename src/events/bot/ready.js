const { Client } = require("discord.js");

let bot;

module.exports = {
    description: `Is triggered everytime the Client is started.`,
    async init(client) {
        bot = client;
    },

    trigger: async () => {
        console.log(`Logged in`);

        if(bot.cfg.presence.allActivated) {
            let presence;
            let statusType;
            let status;
            let url;

            if(!bot.cfg.presence.presence) presence = `online`
                else if(bot.cfg.presence.presence.toLowerCase() == `idle`) presence = `idle`
                else if(bot.cfg.presence.presence.toLowerCase() == `dnd`) presence = `dnd`
                else if(bot.cfg.presence.presence.toLowerCase() == `offline`) presence = `invisible`
                else if(bot.cfg.presence.presence.toLowerCase() == `invisible`) presence = `invisible`
                else presence = `online`

            if(bot.cfg.presence.useStatus) {
                if(!bot.cfg.presence.statusType) statusType = null;
                else if(bot.cfg.presence.statusType.toUpperCase() == `PLAYING`) statusType = `PLAYING`
                else if(bot.cfg.presence.statusType.toUpperCase() == `LISTENING`) statusType = `LISTENING`
                else if(bot.cfg.presence.statusType.toUpperCase() == `WATCHING`) statusType = `WATCHING`
                else if(bot.cfg.presence.statusType.toUpperCase() == `STREAMING`) statusType = `STREAMING`

                if(bot.cfg.presence.status == '' || typeof bot.cfg.presence.status !== 'string') status = undefined;
                else status = bot.cfg.presence.status;
            }

            if(bot.cfg.presence.useUrl && statusType == `STREAMING`) url = bot.cfg.presence.url;
            else url = null;

            bot.user.setPresence({
                activities: [{
                    name: status,
                    type: statusType,
                    url,
                }],
                status: presence
            })
        }
    }
}