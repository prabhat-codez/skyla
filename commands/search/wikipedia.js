
const Discord = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    
        name: 'wikipedia',
        description: 'Searchs for results on Wikipedia',
        aliases: ["wikipedia"],
        usage: '<query>',
        accessableby: "",
    
    run: async (client, message, args) => {
        const text = args.join(' ');
        const body = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`,
          ).then(res => res.json().catch(() => {}));
        
        if (!body) return message.channel.sendmessage.channel.send({embed: {
                      color: "RANDOM",
                      title: "❌ Error Page Not Found."
                  }})
          if (body.title && body.title === "Not found.") return message.channel.send({embed: {
                      color: "RANDOM",
                      title: "❌ Error Page Not Found."
                  }});
      
        const embed = new Discord.MessageEmbed()
            .setTitle(`Wikipedia Search`)
            .addField(`You Searched for`, `${text}`)
        .addField("Results",`[Click Here!](${body.content_urls.desktop.page})`, true)
            
            .setColor(`RANDOM`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/874548198910332949/926378000537239562/wikipedia.png`)
        
        message.channel.send(embed);

    }
}