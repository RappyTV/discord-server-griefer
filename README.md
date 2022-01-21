# Discord Server Griefer

## With this tool you can easily destroy servers who deserve to be destroyed!

### All you need is a _bot_ **OR** _client_ token

---

<br>

## Step 1: Installation
Just simply install this repository by typing `git clone https://github.com/RappyTV/discord-server-griefer.git` into your git bash or just download this repository as a zip file.
(You have to have (Node.js)[https://nodejs.org] installed!)

## Step 2: Configuration
If you have downloaded and extracted all the files you should look for a file named `config.json` and in this file it should look like this:
```json
{
    "token": "",
    "prefix": "",
    "botAccount": true,
    "presence": {
        "allActivated": true,
        "presence": "online",
        "useStatus": true,
        "statusType": "PLAYING",
        "status": "around with Servers",
        "useUrl": false,
        "url": ""
    },
    "messages": {
        "renameRoles": "",
        "spamEveryone": "",
        "renameChannels": "",
        "kickReason": "",
        "banReason": ""
    }
}
```
In this file you can configure everything! <br>

**Note:** <br>
If your token gives access to a user account, you **have** to set `botAccount` to `false`!

_Prefix:_ <br>
In this field you just put the prefix you later want to execute the commands with. For example: g/nuke

_Presence:_
If you want to use a URL you have to use the `statusType` named `STREAMING` and set `useUrl` to `true`!

Valid `presence`-Values:

- online
- idle
- dnd
- offline

Valid `statusType`-Values:

- PLAYING
- LISTENING
- WATCHING
- STREAMING

## Step 3: Start the client
> Windows
Just open the `start.bat` File and the client starts!
If there are any errors, they will be displayed in the console...

> Linux
You have to execute `node index.js` in a terminal to run the client.

> MacOS
You have to execute `node index.js` in a terminal to run the client.

## Step 4: Have fun!
Here is a list of all commands and their functions:

- nuke > Deletes all channels and creates new ones. The name will be the value of `messages.renameChannels`
- rr > Renames all roles to the value of `messages.renameRoles`
- spameveryone > Spams @everyone Pings in all possible Channels (Message is just the value of `messages.spamEveryone`)
- kickall > Kicks all members with the reason `messages.kickReason`
- banall > Bans all members with the reason `messages.banAll`

---

### Social Networks

[<img align="left" alt="RappyTV | Website" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="RappyTV | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
[<img align="left" alt="RappyTV | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="RappyTV | Discord" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/discord.svg" />][dcServer]
[<img align="left" alt="RappyTV | TikTok" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tiktok.svg" />][tiktok]

[website]: https://rappytv.com/
[youtube]: https://youtube.com/c/RappyTVTutorials
[instagram]: https://instagram.com/rappyytv
[dcbotplaylist]: https://youtube.com/playlist?list=PL-NddfqjbJVZ2-CGquW0I42J9IGUkXq12
[dcServer]: https://rappytv.com/server
[dcBot]: https://rappytv.com/bot
[tiktok]: https://tiktok.com/@rappytv