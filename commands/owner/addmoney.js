const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
        name: "addmoney",
        aliases: ["am"],
    run: async (client, message, args) => {
       if (message.author.id !== '806924400494248006') return message.channel.send("❌ You do not have permission to use this command!");
        if (!args[0]) return message.channel.send("**Please Enter A User!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Enter A Valid User!**")
        if (!args[1]) return message.channel.send("**Please Enter A Amount!**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Your Amount Is Not A Number!**`);
        if (args[0] > 10000) return message.channel.send("**Cannot Add That Much Amount!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Added ${args[1]} coins\n\nNew Balance: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}