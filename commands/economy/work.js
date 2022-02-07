const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("ms");

let answers = [
  "500",
  "270",
  "140",
  "260",
  "330",
  "300",
  
];

    module.exports = {
  name: "work",
  aliases: [],
  run: async (bot, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let user = message.author;
    let author = await db.fetch(`work_${message.author.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:x:  You have already worked recently\n\nTry again after some time`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<a:money:908685366184271923> You worked as a ${replies[result]} and earned ${answer} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.author.id}`, answer)
        db.set(`work_${message.author.id}`, Date.now())
    };
}
    }