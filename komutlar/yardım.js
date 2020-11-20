const Discord = require ("discord.js")

module.exports.run = async (client, message, args) => {

  const YeniYardımMenüm = new Discord.MessageEmbed()
.setColor("#6d09e8")
.setDescription(`:joy: Botumuz İsteklerinizle Güzelleşiyor`)
.addField("️:tools: c!yardim-kayit"," Kayıt Sistemini Görürsünüz.",true)
.addField(":tools: c!yardım-kısmod"," Kisitlama Sistemini Görürsünüz.",true)
.addField(":tools: c!yardım-eglence"," Eğlence Sistemini Görürsünüz.(Yakında)",true)
.addField(":tools: c!nsfw"," NSFW Sistemini Görürsünüz.",true)
  
    message.channel.send(YeniYardımMenüm)

    
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","h"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
