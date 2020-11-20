const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Clarisa Kısıtlı Koruma')
.addField("️:tools: c!fal","Dene Ve Gör",true)
.addField(":tools: c!aşk","Dene Ve Gör",true)
.addField(":tools: c!soda","Dene Ve Gör",true)
.addField(":tools: c!tokat","Dene Ve Gör",true)   
.addField("️:tools: c!kare","Dene Ve Gör",true)
.addField(":tools: c!öp","Dene Ve Gör",true)
.addField(":tools: c!karıştır","Dene Ve Gör",true)
.addField(":tools: c!kaçcm","Dene Ve Gör",true)                      
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'botresim'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardim-eğlence","yardım-eglence","yardim-eglence"],
  permLevel: 0
}

exports.help = {
  name: 'yardım-eğlence'
};