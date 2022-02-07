const { prefix } = require('../index')
const client = require('../index')






client.on('ready', () => {
 client.user.setActivity(`s!help | ${client.guilds.cache.size} servers`, { type: 'WATCHING', url: "https://www.youtube.com/watch?v=x31tDT-4fQw" })
})

