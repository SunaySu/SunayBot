const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8)` + "** | **" + `[Web Sitesi](https://dlive.tv/RX7-Sunayy)` + "** | **" + `[DLive](https://dlive.tv/RX7-ismailmarkham)  `, false)
              return message.channel.send(Genel)


       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Link", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8)` + "** | **" + `[Web Sitesi](https://dlive.tv/RX7-Sunayy)` + "** | **" + `[DLive](https://dlive.tv/RX7-ismailmarkham)  `, false)
              return message.channel.send(Sunucu)



       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8)` + "** | **" + `[Web Sitesi](https://dlive.tv/RX7-Sunayy)` + "** | **" + `[DLive](https://dlive.tv/RX7-ismailmarkham)  `, false)
   return message.channel.send(Eğlence)


           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8)` + "** | **" + `[Web Sitesi](https://dlive.tv/RX7-Sunayy)` + "** | **" + `[DLive](https://dlive.tv/RX7-ismailmarkham)  `, false)
   return message.channel.send(Moderasyon)


               return;
  }

//YARDIM KOMUTU

  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\` \n **Örnek:** \`${prefix}yardım Genel\``)
  .addField('Kategoriler:', `
  **[${prefix}yardım Genel]**
  **[${prefix}yardım Eğlence]**
  **[${prefix}yardım Moderasyon]**
  **[${prefix}yardım Sunucu]**
  `)
  .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=801805901392248837&scope=bot&permissions=8)` + "** | **" + `[Web Sitesi](https://dlive.tv/RX7-Sunayy)` + "** | **" + `[DLive](https://dlive.tv/RX7-ismailmarkham)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)


}

//SUNAY AYDIN TARAFINDAN HAZRLANMIŞTIR!

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
