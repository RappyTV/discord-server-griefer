const { Client } = require("discord.js");

let client;

module.exports = {
    description: `Is triggered everytime the Client is started.`,
    async init(cclient) {
        client = cclient;
    },

    trigger: async () => {
        console.log(``);

        if(client.cfg.presence.allActivated) {
            let presence;
            let statusType;
            let status;
            let url;

            if(!client.cfg.presence.presence) presence = `online`
                else if(client.cfg.presence.presence.toLowerCase() == `idle`) presence = `idle`
                else if(client.cfg.presence.presence.toLowerCase() == `dnd`) presence = `dnd`
                else if(client.cfg.presence.presence.toLowerCase() == `offline`) presence = `invisible`
                else if(client.cfg.presence.presence.toLowerCase() == `invisible`) presence = `invisible`
                else presence = `online`

            if(client.cfg.presence.useStatus) {
                if(!client.cfg.presence.statusType) statusType = null;
                else if(client.cfg.presence.statusType.toUpperCase() == `PLAYING`) statusType = `PLAYING`
                else if(client.cfg.presence.statusType.toUpperCase() == `LISTENING`) statusType = `LISTENING`
                else if(client.cfg.presence.statusType.toUpperCase() == `WATCHING`) statusType = `WATCHING`
                else if(client.cfg.presence.statusType.toUpperCase() == `STREAMING`) statusType = `STREAMING`

                if(client.cfg.presence.status == '' || typeof client.cfg.presence.status !== 'string') status = undefined;
                else status = client.cfg.presence.status;
            }

            if(client.cfg.presence.useUrl && statusType == `STREAMING`) url = client.cfg.presence.url;
            else url = null;

            client.user.setPresence({
                activity: [{
                    name: status,
                    type: statusType,
                    url,
                }],
                status: presence
            })
        }
    }
}