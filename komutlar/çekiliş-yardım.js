const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Elecus Giveaway Yardım Menüsü!')

  .addField("__Bir Tane Çekiliş Başlatırsınız.__",`\`g?çekiliş-yap\``)
  
  .addField("__Başlayan Çekilişi Bitirirsiniz.__",`\`g?çekiliş-bitir\``)
  
  .addField("__Bulunan Bir Çekilişi Düzenlersiniz.__",`\`g?çekiliş-düzenle\``)
  
  .addField("__Çekilişlerin Listesini Atar.__",`\`g?çekiliş-liste\``)

  .addField("__Çekilişte Yeni Kazanan Belirler.__",`\`g?reroll\``)
  
  .setDescription("[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=802550451752927272&permissions=8&scope=bot) | [Botun Destek Sunucusu](https://discord.gg/3VyJMWrh3K) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}
