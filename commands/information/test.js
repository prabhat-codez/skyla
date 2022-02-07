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
  name: "test",
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
        const embed1 = new Discord.MessageEmbed()
                .setTitle('')
                        .addField("ㅤ⠀⠀⠀ \n🛡️ **Admin**",
                                  "> `addemoji`, `addrole`, `auditlog`, `ban`, `dm`, `embedsay`, `hackban`, `kick`, `lock`, `nuke`, `removerole`, `unban`, `unlock`\n\n🔨 **Moderation**\n> `lock`, `mute`, `purge`, `reset-warns`, `say`, `slowmode`, `unlock`, `unmute`, `warn`, `warning`\n\n⚔️ **Auto-Moderation**\n> `anti-alt`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `roleall`"
                                          )
                                                .setThumbnail(client.user.displayAvatarURL())
                                                      .setColor("RANDOM");
        const embed2 = new Discord.MessageEmbed()
              .setTitle('')
                    .addField("⠀⠀⠀ \n📜 **Info**",
                            "> `botinfo`, `bugreport`, `developer`, `djs`, `feedback`, `github`, `help`, `roleinfo`,`servers`, `serverinfo`, `translate`, `uptimer`, `userinfo`,`weather`\n\n🔮 **Aura**\n> `addword`, `blacklist-server`, `blacklist-user`, `delword`, `whitelist-add`, `whitelist-delete`, `whitelist`, `wordlist`\n\n📘 **General**\n> `akinator`, `ascii`, `avatar`, `calculator`, `choose`, `colour`, `country`, `emojify`, `firstmessage`, `invite`, `reverse`, `servericon`, `weather`"
                                  )
                                        .setThumbnail(client.user.displayAvatarURL())
                                              .setColor("RANDOM");
        const embed3 = new Discord.MessageEmbed()
              .setTitle('')
                    .addField("ㅤ⠀⠀⠀ \n🤣 **Fun**","> `battleship`, `coinflip`, `coronavirus`, `deepfry`, `drake`, `eightball`, `flipcoin`,`free-nitro`, `hack`, `hangman`, `joke`, `meme`, `snipe`, `sudo`, `sus`, `tictactoe`, `trivia`, `yt`\n\n🖼️ **Image**\n> `dog`, `fire`, `biden`, `qrcode`, `wasted`, `shame`, `meeting`, `web-screen`, `drake`, `iosalert`, `iphonex`, `caution`, `fox`, `gay`, `jail`, `kangaroo`, `tweet`,`qrcode`, `baka`, `poke`")
                          .setThumbnail(client.user.displayAvatarURL())
                                .setColor("RANDOM");
       const embed4 = new Discord.MessageEmbed()
             .setTitle('')
                   .addField("ㅤ⠀⠀⠀ \n👑 **Owner**",
                           "> `eval`, `reloadcmd`, `serverlist`, `bot-token`\n\n💬 ChatBot\n> `Make a channel name 'chat-with-skyla' and Skyla will start talking there.`\n\n⚙️ **Utility**\n> `advice`, `announce`, `binary`, `minecraft`, `membercount`, `members`, `serverinfo`"
                                 )
                                       .setThumbnail(client.user.displayAvatarURL())
                                             .setColor("RANDOM");

       const embed5 = new Discord.MessageEmbed()
             .setTitle('')
                   .addField("ㅤ⠀⠀⠀ \n🎟️ **Ticket**",
                           "> `tadd`, `tclose`, `tnew`, `tremove`\n\n🎉 **Giveaways**\n> `gstart [channel] [time] [winners] [prize]`,\n> `gend [giveaway-id]`,\n> `greroll [giveaway-id]`\n\n💰 **Economy **\n> `balance`, `daily`, `deposit`,`withdraw`")
                                 .setThumbnail(client.user.displayAvatarURL())
                                       .setColor("RANDOM");
        //-----------------------------OPTIONS----------------------
        let option1 = new MessageMenuOption()
                .setLabel('🛡️ Admin, 🔨 Moderation & ⚔️ Auto-Moderation')
                        .setEmoji('898223278005571614')
                                .setValue('option1')
                                
        let option2 = new MessageMenuOption()
                .setLabel('📜 Info, 🔮 Aura & 📘 General')
                        .setEmoji('898223316106641488')
                                .setValue('option2')
                                
        let option3 = new MessageMenuOption()
                .setLabel('🤣 Fun & 🖼️ Images')
                        .setEmoji('898223347383566406')
                                .setValue('option3')
                                
        let option4 = new MessageMenuOption()
                .setLabel('👑 Owner, 💬 ChatBot & ⚙️ Utility')
                        .setEmoji('898223364143972403')
                                .setValue('option4')
                                
        let option5 = new MessageMenuOption()
                .setLabel('🎫 Ticket, 🎉 Giveaways & 💰Economy')
                        .setEmoji('898223378362695722')
                                .setValue('option5')
                                
    let select = new MessageMenu()
            .setID('selector')
                    .setPlaceholder('Click here to view the help menu!')
                            .setMaxValues(1)
                                    .setMinValues(1)
                                            .addOptions(option1, option2, option3, option4, option5)
        //-----------------------------OPTIONS----------------------
    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
        let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });
    collector.on("collect" , (b) => {
            if(b.values[0] == "option1") {
                        Sendmenu.edit(embed1, select)
                                }
        if(b.values[0] == "option2") {
                    Sendmenu.edit(embed2, select)
                            }
        if(b.values[0] == "option3") {
                    Sendmenu.edit(embed3, select)
                            }
        if(b.values[0] == "option4") {
                    Sendmenu.edit(embed4, select)
                            }
        if(b.values[0] == "option5") {
                    Sendmenu.edit(embed5, select)
                            }
        if(b.values[0] == "option6") {
                    Sendmenu.edit(embed6, select)
                            }
        b.reply.defer();
            })
    collector.on("end", (b) => {
            Sendmenu.edit("❌ This help menu is expired! Please retype the command to view again.")
                })
        
    }


};