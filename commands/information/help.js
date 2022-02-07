const Discord = require('discord.js')

const ms = require("ms");
const discord = require("discord.js");
const fs = require("fs");
const { Client, Collection } = require("discord.js");


const client = new Discord.Client()


const { MessageButton, MessageActionRow } = require('discord-buttons');
const { MessageMenuOption, MessageMenu } = require('discord-buttons');

const { MessageEmbed } =  require("discord.js") 

module.exports = {
  name: "help",
  description: "Gives the Help Menu of the bot!",

  run: async (client, message, args ) => {  
      if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.reply("There is no command in the bot with name **" + args[0] + "**.");
      }

const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`s!\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`s!${command.name} ${command.usage}\``
            : `\`s!${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("RANDOM");
      return message.channel.send(embed);
    } 
    
        let option1 = new MessageMenuOption()
            .setLabel("Config Commands")
            .setEmoji("908685063330353232")
            .setValue("Option 1") 
            .setDescription("Shows All the Config Commands")
            .setDefault()

        
         let option2 = new MessageMenuOption()
            .setLabel("Economy Commands")
            .setEmoji("908685366184271923")
            .setDescription("Shows All the Economy Commands")
            .setValue("Option 2")
            .setDefault()

        let option3 = new MessageMenuOption()
            .setLabel("Fun Commands")
            .setEmoji("908686069464174593")
            .setDescription("Shows All the Fun Commands")
            .setValue("Option 3")
            .setDefault()
      
       let option4 = new MessageMenuOption()
            .setLabel("Game Commands")
            .setEmoji("913354253890879488")
            .setDescription("Shows All the Game Commands")
            .setValue("Option 4")
            .setDefault()

      let option5 = new MessageMenuOption()
            .setLabel("Giveaway Commands")
            .setEmoji("908688273218625556")
            .setValue("Option 5") 
            .setDescription("Shows All the Giveaway Commands")
            .setDefault()

      let option6 = new MessageMenuOption()
            .setLabel("Information Commands")
            .setEmoji("908687982666608640")
            .setValue("Option 6") 
            .setDescription("Shows All the Information Commands")
            .setDefault()
            
      let option7 = new MessageMenuOption()
            .setLabel("Moderation Commands")
            .setEmoji("908668383464157185")
            .setValue("Option 7") 
            .setDescription("Shows All the Moderation Commands")
            .setDefault()
            
      let option8= new MessageMenuOption()
            .setLabel("Music Commands")
            .setEmoji("908668497498869792")
            .setValue("Option 8") 
            .setDescription("Shows All the Music Commands")
            .setDefault()
            
      let option9 = new MessageMenuOption()
            .setLabel("Owner Commands")
            .setEmoji("908665530506965022")
            .setValue("Option 9") 
            .setDescription("Shows All the Owner Commands")
            .setDefault()

      let option10 = new MessageMenuOption()
            .setLabel("Search Commands")
            .setEmoji("883527782418743316")
            .setDescription("Shows All the Search Commands")
            .setValue("Option 10")
            .setDefault()

      let option11 = new MessageMenuOption()
            .setLabel("Ticket Commands")
            .setEmoji("918084814173798410")
            .setDescription("Shows All the Ticket Commands")
            .setValue("Option 11")
            .setDefault()

      let option12 = new MessageMenuOption()
            .setLabel("Utility Commands")
            .setEmoji("908668615102955550")
            .setDescription("Shows All the Utility Commands")
            .setValue("Option 12")
            .setDefault()

      let option13 = new MessageMenuOption()
            .setLabel("Image Commands")
            .setEmoji("935426373571461130")
            .setDescription("Shows All the Image Commands")
            .setValue("Option 13")
            .setDefault()

      let bt3 = new MessageButton()
        .setStyle("url")
        .setLabel(`Join Now`)
        .setURL(`https://dsc.gg/coders-cafe`);

            
      
      
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("My Commands")
            .addOption(option1)
            .addOption(option2)
             .addOption(option3)
            .addOption(option4)
            .addOption(option5)
            .addOption(option13)
            .addOption(option6)
            .addOption(option7)
            .addOption(option8)
            .addOption(option9)
            .addOption(option10)
            .addOption(option11)
            .addOption(option12)
            

            
       let embed = new Discord.MessageEmbed()
        .setTitle("Skyla Help Menu")

        .setDescription("**Prefix**: `s!` | You Can Also Mention <@870868241457774652> to get Prefix Info.")
       .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
        
        .addField(
          "<a:arrow:883915864980746270>Command Help",
          "```Do s!help <cmd> for information about a command.```"
        )
          .addField(
          "<a:verified_developer:883527407611551775> Owner",
          "```Prabhat</>#5890```"
        )
         .addField(
          "<a:arrow:883915864980746270>Important Links",
          `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.com/invite/9dbcQVE4Uc)\`|\`[Website](https://skylabot.tk/)**`
        )
    .setThumbnail(client.user.displayAvatarURL())
  const row = new MessageActionRow()
       .addComponent(selection)
       

       

 

          
    
        let menumsg = await message.channel.send({embed: embed , components: [row]})

        
        
         const commands = await client.commands;
          let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                  let embed6 = new MessageEmbed()
                  .setTitle("<a:settings:908685063330353232> Config Commands")
                  .setColor("#FFA07A")
                  
.setFooter("Config Commands")
                     
                    .setDescription("`chatbotsetup` `disablemodlogchannel` `disablemuterole` `disableverification` `setboostchannel` `setlogchannel`")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                    menu.reply.send('', {embed: embed6, ephemeral:true})
                break;
                case "Option 2": 
                   let embed4 = new MessageEmbed()
                   .setTitle("<a:money:908685366184271923> Economy Commands")
                   .setColor("#FFA07A")
.setFooter("Economy Commands")
                   .setDescription("`balance` `daily` `deposit` `give` `withdraw` `work`")
                   .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                    menu.reply.send('', {embed: embed4, ephemeral:true})
                break;
                case "Option 3": 
                  let embed5 = new MessageEmbed()
                  .setTitle("<a:ADanceyDance:908686069464174593> Fun Commands")
                    .setFooter("Fun Commands")
                  .setDescription("`8ball` `clyde` `coolrate` `dankrate` `free-nitro` `gayrate` `hack` `meme` `nitro` `owo` `say` `scroll` `sudo` `sus`")
                  .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setColor("#FFA07A")
                    menu.reply.send('', {embed: embed5, ephemeral:true})
                break;
                  case "Option 4": 
                  let embed7 = new MessageEmbed()
                  .setTitle("<a:minecraft:913354253890879488> Game Commands")
                  .setColor("#FFA07A")
                    .setFooter("Game Commands")
                  .setDescription("`8ball` `akinator` `pokemon` `snakegame`")
                  .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                    menu.reply.send('', {embed: embed7, ephemeral:true})
                break;
                case "Option 5": 
                  let embed8 = new MessageEmbed()
                  .setTitle("<a:giveaway:908688273218625556> Giveaway Commands")
                  .setColor("#FFA07A")
                    .setFooter("Giveaway Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`g-end` `g-list` `g-reroll` `g-start`")
                    menu.reply.send('', {embed: embed8, ephemeral:true})
                break;
                case "Option 6": 
                  let embed9 = new MessageEmbed()
                  .setTitle("<a:info:908687982666608640> Information Commands")
                  .setColor("#FFA07A")
                  .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                    .setFooter("Information Commands")
                  .setDescription("`anime` `botinfo` `channelinfo` `covid` `dev` `emoji` `help` `invite` `maps` `message` `ping` `report` `role` `roles` `serverinfo` `userinfo` `weather`")
                    menu.reply.send('', {embed: embed9, ephemeral:true})
                break;
                     case "Option 7": 
                  let embed10 = new MessageEmbed()
                  .setTitle("<:hydroxmod:908668383464157185> Moderation Commands")
                  .setColor("#FFA07A")
                    .setFooter("Moderation Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`addrole` `allvcmute` `allvcunmute` `anti-raidmode` `antivcbackup` `ban` `createchat` `createvc` `delchannel` `delrole` `delwarns` `dm` `bans` `hackban` `kick` `lock` `massban` `dmall` `mute` `poll` `purge` `removerole` `rolecreate` `timeout` ")
                    menu.reply.send('', {embed: embed10, ephemeral:true})
                break;
                  case "Option 8": 
                  let embed11 = new MessageEmbed()
                  .setTitle("<a:music:908668497498869792> Music Commands")
                  .setColor("#FFA07A")
                    .setFooter("Music Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`24/7` `addrelated` `autoplay` `clearqueue` `forward` `grab` `join` `jump` `loop` `lyrics` `moveme` `mycustom` `nowplaying` `pause` `play` `playsc` `playskip` `queue` `removetrack` `replay` `resume` `rewind` `search` `searchrelated` `searchsc`")
                    menu.reply.send('', {embed: embed11, ephemeral:true})
                break;
                    case "Option 9": 
                  let embed12 = new MessageEmbed()
                  .setTitle("<a:king:908665530506965022> Owner Commands")
                  .setColor("#FFA07A")
                    .setFooter("Owner Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`addmoney` `eval` `leaveserver` `serverlist` `setstatus` `shutdown`")
                    menu.reply.send('', {embed: embed12, ephemeral:true})
                break;
                case "Option 10": 
                  let embed13 = new MessageEmbed()
                  .setTitle("<:search:883527782418743316> Search Commands")
                  .setColor("#FFA07A")
                    .setFooter("Search Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`appstore` `google` `pinterest` `spotify` `wikipedia` `youtube`")
                    menu.reply.send('', {embed: embed13, ephemeral:true})
                break;
                case "Option 11": 
                  let embed14 = new MessageEmbed()
                  .setTitle("<a:Ticket:918084814173798410> Ticket Commands")
                  .setColor("#FFA07A")
                    .setFooter("Ticket Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`t-add` `t-close` `t-delete` `t-new` `t-open` `t-remove`")
                    menu.reply.send('', {embed: embed14, ephemeral:true})
                break;
                case "Option 12": 
                  let embed15 = new MessageEmbed()
                  .setTitle("<:hydroxserver:908668615102955550> Utility Commands")
                  .setColor("#FFA07A")
                    .setFooter("Utility Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`afk` `ascii` `avatar` `binary` `calculate` `enlarge` `isgd` `react` `rolememberinfo` `ship` `translate` `tts` `userroles` `vgd` `web-screen` `yt-together` `zalgo`")
                    menu.reply.send('', {embed: embed15, ephemeral:true})
                break;
                 case "Option 13": 
                  let embed16 = new MessageEmbed()
                  .setTitle("<a:skylawhack:935426373571461130> Image Commands")
                  .setColor("#FFA07A")
                    .setFooter("Image Commands")
                    .setImage("https://cdn.discordapp.com/attachments/874548198910332949/928497477416529970/skyla.gif") 
      .setThumbnail(client.user.displayAvatarURL())
                  .setDescription("`biden` `captcha` `caution` `cry` `cti` `delete` `drake` `hug` `ios-alert` `iphonex` `kiss` `laugh` `mc-achievement` `meeting` `memestealinglicense` `pat` `punch` `rickroll` `simpcard` `slap` `triggered` `tweet` `wasted`")
                    menu.reply.send('', {embed: embed16, ephemeral:true})
                break;
            }
          
        }
            
    
        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send("Only the user who has run the command can choose, type `s!help` instead", true)
            }
        })
        
    }


};