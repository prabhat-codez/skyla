const shorten = require('isgd');

module.exports = {
    name: "isgd",
    aliases: ["shorten"],
    category: "Utility",
    description: "Shortens your URL to is.gd format !!",
    example: `s!linkshorten https://skylabot.tk skyla`,

    run: async (client, message, args) => {

        if (!args[0]) return message.reply(`Provide the link to shorten !! \`s!isgd <link> <name>\``)

        if (!args[0]) {
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:')) return message.reply(`Provide a valid url **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        } else {

            shorten.custom(args[0], args[1], function(res) {
                if(res.startsWith('Error:')) return message.reply(`**${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        }

    }
}