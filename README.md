[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://github.com/otherwiseDE/DiscordTwitterBot/blob/main/LICENSE)

# otherwiseDE's Youtube Bot!

Hey.
Welcome and Thanks for your interest in my Discord Youtube Bot Project.
Please read this File completly to not miss out on Information.

To receive Support from me, Join my [Discord](https://discord.gg/PrGCCWpDbP) and head to `#support` and monitor `#github-feeds` for any updates!


# Preview

![image](https://i.imgur.com/k02Sr1O.png)


# Dependencies
You will need:

 - NodeJS v16
 - NPM v6 (or higher)

# Dependencies Installation
 Open the terminal / Windows PowerShell in the folder the code is (where index.js and config.json are)
 Please then enter the following commands: 
 

 - `npm i discord.js`
 - `npm i quick.db`
 - `npm i rss-parser`

Please do each line at one time, this shouldn’t take more than a minute.

## Configuration (config.json)

The file says: `“discordBotToken”:””, “discord_channel”:””,` (continuous)

So when talking about for example the `discordBotToken`, please change it so it looks like: `“discordBotToken”:””,` `“discord_channel”:””,`

 - To find the discordBotToken, go to [https://discord.com/developers/applications](https://discord.com/developers/applications) , create an application by pressing “New Application” or go for a pre-existing application, then in the section “Bot”, create one. Beneath the username it should say “Token”. Hit “Copy” and enter it in

## Bot Configuration


 - To find the `discord_channel`, Enable Discord Developer Mode and Right-Click on the Channel where you want the Bot to post the Updates in.
 - `messageText` is the Text, the Bot posts along with the URL. The Bot can Ping `everyone`, `here` and Roles. `{author}` and `{url}` are for the Channel Name and the Video Link. Please at all time keep both of them within this Text.
 - `channel_id` describes the Youtube Channel ID. To find this, please head to the Youtube Channel you want to monitor, copy the Link and paste it on this [Website ](https://commentpicker.com/youtube-channel-id.php "Website "). Afterwards, copy the `Channel ID` and paste it into the config.json. Usally Channel ID's look like this `UC-lHJZR3Gqxm24_Vd_AJ5Yw`
 - `refreshInterval` is the amount of Time in Milliseconds between each Video Upload Refresh. 30000 Milliseconds is 30 Seconds.

## Credits

A huge Thanks goes out to [DevAndromeda](https://github.com/DevAndromeda "DevAndromeda") who published his [Youtube Notification](https://github.com/DevAndromeda/youtube-notification-bot "Youtube Notification") a few Years ago which has been starting ground for this bot.

If you, DevAndromeda, have any issues regarding this or want this Bot taken down - Don't hesitate to E-Mail me at `bthiele@otherwisede.net`.

