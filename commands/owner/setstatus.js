const {Client, Message} = require('discord.js')

module.exports = {
    name : 'setstatus',
    description : 'Used to set bot status. Owner only command!',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run : async(client, message, args) => {
        if (message.author.id !== `806924400494248006`) return message.channel.send(`You are not my owner!`);
        const botStatus = args.slice(0).join(" ").replace("{client.users}", `${client.users.cache.size}`).replace("{client.guilds}", `${client.guilds.cache.size}`).replace("{client.commands}", `${client.commands.size}`)
        client.user.setActivity(botStatus);
    }
}