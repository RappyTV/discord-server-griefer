# Discord Server Griefer

## With this tool you can easily destroy servers who deserve to be destroyed!

### All you need is a _bot_ **OR** _client_ token

---

<br>

## Step 1: Installation
Just simply install this repository by typing `git clone https://github.com/RappyTV/discord-server-griefer.git` into your git bash or just download this repository as a zip file.

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

## Step 3: Have fun!
Here is a list of all commands and their functions:

- nuke > Deletes all channels and creates new ones. The name will be the value of `messages.renameChannels`
- rr > Renames all roles to the value of `messages.renameRoles`
- spameveryone > Spams @everyone Pings in all possible Channels (Message is just the value of `messages.spamEveryone`)
- kickall > Kicks all members with the reason `messages.kickReason`
- banall > Bans all members with the reason `messages.banAll`