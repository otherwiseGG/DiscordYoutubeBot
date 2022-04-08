console.clear();
console.log(`[YOUTUBE] Starting Service`)

const {Discord, Client, Collection, Message, MessageEmbed} = require("discord.js");
const dClient = new Client({intents: 32767});
dClient.db = require("quick.db");
dClient.request = new(require("rss-parser"))();
dClient.config = require("./config.js");

dClient.on("ready", () => {
    console.log(`[YOUTUBE] Service Started`);
    console.log(`For Support please join https://discord.gg/PrGCCWpDbP`)
    handleUploads();
});

function handleUploads() {
    if (dClient.db.fetch(`postedVideos`) === null) dClient.db.set(`postedVideos`, []);
    setInterval(() => {
        dClient.request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${dClient.config.channel_id}`)
            .then(data => {
                if (dClient.db.fetch(`postedVideos`).includes(data.items[0].link)) return;
                else {
                    dClient.db.set(`videoData`, data.items[0]);
                    dClient.db.push("postedVideos", data.items[0].link);
                    const parsed = dClient.db.fetch(`videoData`);
                    const channel = dClient.channels.cache.get(dClient.config.discord_channel);
                    if (!channel) return;
                    const message = dClient.config.messageText
                    .replace(/{author}/g, parsed.author)
                    .replace(/{url}/g, parsed.link);
                    channel.send(message);
                    console.log(`[YOUTUBE] Sent Video Update to ${dClient.config.discord_channel}`)
                }
            });
    }, dClient.config.refreshInterval);
}

dClient.login(dClient.config.discordBotToken);