const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Clarisa Kısıtlı Koruma')
.addField("️:tools: c!selam aç/kapat","Selam karşılama sistemini ayarlarsınız.",true)
.addField(":tools: c!küfür aç/kapat","Küfür Kısıtlamak.",true)
.addField(":tools: c!reklam aç/kapat","Reklam Kısıtlamak",true)
.addField(":tools: c!caps aç/kapat","Büyük Harf Kısıtlamak",true)                    
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'botresim'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardim-kısmod","yardım-kısmod"],
  permLevel: 0
}

exports.help = {
  name: 'yardım-kismod'
};