const Discord = require ("discord.js")

module.exports.run = async (client, message, args) => {

  const YeniYardımMenüm = new Discord.MessageEmbed()
.setColor("#6d09e8")
.setDescription(`:joy: Botumuz İsteklerinizle Güzelleşiyor`)
.addField(":tools: c!kayıt-mesaj","Kayıt kanalında ki üyeleri karşılayan sistem",true)
.addField(":tools: c!sunucu-kayıt","İsimli ve etiket ile (Erkek - Kadın) kayıt sistem",true)
.addField(":tools: c!mesaj-tag","Tag ayarlamak için kullanımı basit sistem",true)
.addField(":tools: c!tagrol-sistem","Tagınızı Alana Rol Verir(Beta)",true)
.addField(":tools: c!isim","İsmin başına birşey ekletmek için **c!isim-tag** kullanabilirsin. Etiketlediğiniz **üyenin ismini** değişirsiniz)",true)
.addField(":tools: c!say","Sunucu Bilgierinizi Sayar.",true)  
.addField(":tools: c!koruma aç/kapat","Sunucunuz için koruma sistem aktif edersin",true)
.addField(":tools: c!aktiflik aç/kapat","(c!profile & c!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true)  
.addField(":tools: c!sayaç-sistem","(c!profile & c!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true) 
.addField(":tools: c!aktiflik aç/kapat","(c!profile & c!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true)   
.addField("️:tools: c!toplu-rol-sistem"," Toplu Rol Sistemini Görürsünüz.",true) 
.addField("️:tools: c!yasak-tag-sistem","Sunucunuz için güvenliği arttırın.",true)  
.addField("️:tools: c!toplu-rol-sistem"," Kayıt Sistemini Görürsünüz.",true)  
.addField("️:tools: c!toplu-rol-sistem"," Kayıt Sistemini Görürsünüz.",true)    
  
    message.channel.send(YeniYardımMenüm)

    
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayit","yardim-kayit","yardım-kayıt"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardim-kayıt',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
