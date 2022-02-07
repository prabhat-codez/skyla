const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
  name: "hack",
  description: "Hack a user",
  aliases: ["hax"],
  run: async(client, message, args) => {
    const user = message.mentions.users.first();
if(!user) return message.channel.send("Mention Someone to hack")
message.channel.send("**Finding IP Address..**").then(m => {
setTimeout(() => {
m.edit("**Ip Address Found! Trying to bypass password by D9F Bypass Method..** ").then(m2 => {
setTimeout(() => {
m2.edit("**D9F Bypass Method cracked your account. C2K Hack injected Trojan.**").then(m3 => {
setTimeout(() => {
m3.edit("**C2K Hack worked perfectly. Disabling Discord's Security from account.** ").then(m4 => {
setTimeout(() => {
m4.edit("**Disabled Discord's Security from account and selling all details to Hacker's Community.** ").then(m5 => {
setTimeout(() => {
m5.edit(`The dangerous hack was completed successfully. Details are leaked successfully.
${user.username}'s Personal Details. 
Email:${user.username}@gmail.com 
Password: ${user.username}123 
IP Address: ||11.201.host.nn.${user.username}||`)
}, 2200);
});
}, 2200);
});
}, 2200);
});
}, 2200);
});
}, 2200);
});
    

  }
}