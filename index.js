const Discord = require("discord.js");
const Client, Message, MessageEmbed, Collection = require("discord.js");


const fs = require("fs");
const colors = require("colors")
const ms = require('pretty-ms');
const moment = require("moment")
const os = require('os');

const config = require("./config/config.json");
const map = new Map()
require('canvas').registerFont("Genta.ttf", {
  family: "Genta"
}); //loading a font
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  disableEveryone: true,
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
require("discord-buttons")(client);
const DisTube = require("distube");
// MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoose, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(console.log("MongoDB Connected.."));
const prefix = config.prefix;
client.prefix = prefix;
client.config = config;
module.exports = client;
client.distube = new DisTube(client, {
  searchSongs: false,
  emitNewSongOnly: false,
  highWaterMark: 1024 * 1021 * 64,
  leaveOnEmpty: false,
  leaveOnFinish: false,
  leaveOnStop: false,
  youtubeDL: true,
  updateYouTubeDL: true,
  // youtubeCookie: config.ytk,
  // requestOptions: {
  //   agent
  // }
});
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

//Loading files, with the client variable like Command Handler, Event Handler, ...
["command", "distube"].forEach((handler) => {
  require(`./handlers/${handler}`) (client)
});

["chatbot","logger","jointocreate"].forEach(handler => {
  require(`./utils/etc/${handler}`) (client)
});


// host bot

const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Skyla")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})




//databases setups
const Enmap = require("enmap");
client.settings = new Enmap({
  name: "settings",
  ensureProps : false
  // dataDir: "./databases/settings"
});
client.setups = new Enmap({
  name: "setups",
  ensureProps : false
  // dataDir: "./databases/setups"
});
client.chatbot = new Enmap({
  name: "chatbot",
  ensureProps : false
  // dataDir: "./databases/setups"
});
client.infos = new Enmap({
  name: "infos",
  ensureProps : false
  // dataDir: "./databases/infos"
});
client.custom = new Enmap({
  name: "custom",
  ensureProps : false
  // dataDir: "./databases/playlist"
});
client.custom2 = new Enmap({
  name: "custom",
  ensureProps : false
  // dataDir: "./databases/playlist2"
});
client.jointocreatemap = new Enmap({
  name: "settings",
  ensureProps : false
  // dataDir: "./databases/playlist2"
});


/// giveawat bot

// Initialise discord giveaways
const { GiveawaysManager } = require("discord-giveaways");
const { settings } = require("cluster");
client.giveawaysManager = new GiveawaysManager(client, {
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉"
  }
});

client.on("message", async (message) => {


  const { escapeRegex } = require("./handlers/function");
  if (!message.guild) return;
  
 //anti invite 
let regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/
if (regex.test(message.content) && client.settings.get(message.guild.id, "antiinvite")) {
 if (message.member.permissions.has("ADMINISTRATOR")) return;
 message.reply(`***${message.author.tag}***, invite links are not allowed!`).then(m => m.delete({ timeout: 10000 }))
 message.author.send(`** Oye , Don't Send Invite Link In Server **`)
 message.delete()
 }



  // // image only set
  // if (client.settings.get(message.guild.id, "imagechannel").length) {
  //   for (let i = 0; i < client.settings.get(message.guild.id, "imagechannel").length; i++) {
  //     if (client.settings.get(message.guild.id, "imagechannel")[i] === message.channel.id && message.attachments.size < 1) {
  //       message.delete()
  //       message.author.send('You said something that was not an image in an `image only` channel!')
  //     }
  //   }
  // }

  if (message.author.bot) return;
  if (message.channel.partial) await message.channel.fetch();
  if (message.partial) await message.fetch();
  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) {
    if (matchedPrefix.includes(client.user.id)) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setFooter("Made by Prabhat#5890")
          .setAuthor(message.author.tag)
          .setTitle(`Prefix Information`)
          .setDescription("My prefix in this server is `s!`. We are working on customizable prefix."
          )
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      );
    }
  }

  if(cmd.length === 0){
    if(message.mentions.has(message.guild.owner.id)){
      message.reply(`Don't Ping Owner Noob... Imagine pinging`) 
    }
  }


if(message.content === `s!botinfo`) {
     if (message.author.bot) return;
    let status;
        switch (client.presence.status) {
            case "online":
                status = "🟢 Online";
                break;
            case "dnd":
                status = "⛔ Do Not Disturb";
                break;
            case "idle":
                status = "🌙 Idle";
                break;
            case "offline":
                status = "⚫️ Offline";
                break;
        }
           let circles = {
      green: "🟢 Low Issues.",
      yellow: "🟡 Medium Issues.",
      red: "🔴 High Issues."
  }
                  let model = os.cpus()[0].model;
        let cores = os.cpus().length;
        let platform = os.platform();
  let embed = new Discord.MessageEmbed()
  .setTitle("Skyla's Information!")
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ format: 'png' })}`)
   .setDescription("All info is up to date at all time!")
   .setURL("https://discord.com/oauth2/authorize?client_id=870868241457774652&permissions=139557076470&scope=bot%20applications.commands")
   .setTimestamp()
  .setColor("RANDOM")
  .addField("> Statistics", `\`\`\`js\n Total Guilds : ${client.guilds.cache.size} \n Total Users : ${client.users.cache.size} \n Total Channels : ${client.channels.cache.size} \n Connected to :  ${client.voice.connections.size} Voice channels \n Total Emojis : ${client.emojis.cache.size} \n Total Shards : ${message.client.ws.shards.size}\`\`\``)
  .addField("> Other", `\`\`\`js\n Node : 16.13.2 \n Platform : Windows 11 \n Arch : ${process.arch} \n Discord.js : 13.5.3 \n Developers : Prabhat#5890 \n ID : 870868241457774652 \n Bot Created : Saturday, July 31 2021 \n Username :  ${client.user.username} \n Discriminator : #${client.user.discriminator}  \n Version : v4.1.0 \n Status : ${status}\n Activity : Watching s!help | ${client.guilds.cache.size} servers\`\`\``)
  .addField("> Hosting", `\`\`\`js\n Websocket Ping : ${client.ws.ping}ms \n Uptime : ${ms(client.uptime)} \n Response Time : ${Date.now() - message.createdTimestamp}ms \n Host : Replit \n Monitor : Uptime Robot \n Issues : 🟢No Issues \n Memory : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap \n Cores : ${cores} \n CPU Model : Intel(R) Core(TM) i5-8250U CPU\`\`\``)
  .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(embed)
}

  if (message.content === "s!nitro") {
 message.channel.send(`https://imgur.com/NQinKJB`)
}

  if (message.content.startsWith("s!servers"))
  {
    message.channel.send(`Skyla is in **${client.guilds.cache.size}** servers serving **${client.users.cache.size}** users.`)
  }

})


/* Client's GiveawaysManager Events */
client.giveawaysManager.on(
  "giveawayReactionAdded",
  async (giveaway, reactor, messageReaction) => {
    if (reactor.user.bot) return;
    try {
      if (giveaway.extraData) {
        await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
      }
      reactor.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("Entry Approved!")
          .setDescription(
            `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been approved!`
          )
          .setFooter("happy to help ")
          .setTimestamp()
      );
    } catch (error) {
      const guildx = client.guilds.cache.get(giveaway.extraData.server)
      messageReaction.users.remove(reactor.user);
      reactor.send(new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(":x: Entry Denied")
        .setDescription(
          `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) has been denied as you did not join **${guildx.name}**`
        )
        .setFooter("happy to help ")
      );
    }
  }
);
// Check if user reacts on an ended giveaway
client.giveawaysManager.on('endedGiveawayReactionAdded', (giveaway, member, reaction) => {
  reaction.users.remove(member.user);
  member.send(`**Aw snap! Looks Like that giveaway has already ended!**`)

});
// Dm our winners
client.giveawaysManager.on('giveawayEnded', (giveaway, winners) => {
  winners.forEach((member) => {
    member.send(new Discord.MessageEmbed()
      .setTitle(`🎁 Let's goo!`)
      .setDescription(`Hello there ${member.user}\n You have won **[This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nClaim your prize by either making a ticket or dm the giveaway host.`)
      .setTimestamp()
      .setFooter(member.user.username, member.user.displayAvatarURL())
    );
  });
});
// Dm Rerolled winners
client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
  winners.forEach((member) => {
    member.send(new Discord.MessageEmbed()
      .setTitle(`🎁 Let's goo! We Have A New Winner`)
      .setDescription(`Hello there ${member.user}\n I heard that the host rerolled and you have won **[This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})**\n Good Job On Winning **${giveaway.prize}!**\nClaim your prize by either making a ticket or dm the giveaway host.`)
      .setTimestamp()
      .setFooter(member.user.username, member.user.displayAvatarURL())
    );
  });
});
// When They Remove Reaction
client.giveawaysManager.on('giveawayReactionRemoved', (giveaway, member, reaction) => {
  return member.send(new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle('❓ Hold Up Did You Just Remove a Reaction From A Giveaway?')
    .setDescription(
      `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) was recorded but you un-reacted, since you don't need **${giveaway.prize}** I would have to choose someone else 😭`
    )
    .setFooter("Think It was a mistake? Go react again!")
  );
});
client.on("message", async (message) => {

      if (message.author.bot) return;
  let msg = message.content;

  let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
  if (!emojis) return;
  emojis.forEach(m => {
    let emoji = client.emojis.cache.find(x => x.name === m)
    if (!emoji) return;
    let temp = emoji.toString()
    if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
    else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
  })

  if (msg === message.content) return;

  let webhook = await message.channel.fetchWebhooks();
  let number = randomNumber(1, 2);
  webhook = webhook.find(x => x.name === "NQN" + number);

  if (!webhook) {
    webhook = await message.channel.createWebhook(`NQN` + number, {
      avatar: client.user.displayAvatarURL({ dynamic: true })
    });
  }

  await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({ dynamic: true })
  })

  message.delete().catch(err => { })
  webhook.send(msg).catch(err => { })

  await webhook.edit({
    name: `NQN` + number,
    avatar: client.user.displayAvatarURL({ dynamic: true })
  })
})



function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
client.login('ODcwODY4MjQxNDU3Nzc0NjUy.YQTBQA.nS6bO6W3kkxNl8Lvvaw2vS__aJ0');
