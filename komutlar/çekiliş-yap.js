const ms = require('ms')
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(` Lütfen bir kanal süre, kazanan ve ödül belirtin!\nÖrnek kullanım: \`g?çekiliş-yap #kanal [ZAMAN] [SAYI] [ÖDÜL]\``);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(` Lütfen bir kanal süre, kazanan ve ödül belirtin!\nÖrnek kullanım: \`g?çekiliş-yap #kanal [ZAMAN] [SAYI] [ÖDÜL]\``);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(` Lütfen bir kanal süre, kazanan ve ödül belirtin!\nÖrnek kullanım: \`g?çekiliş-yap #kanal [ZAMAN] [SAYI] [ÖDÜL]\``);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(` Lütfen bir kanal süre, kazanan ve ödül belirtin!\nÖrnek kullanım: \`g?çekiliş-yap #kanal [ZAMAN] [SAYI] [ÖDÜL]\``);
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: ":tada:   **ELECUS GIVEAWAY**   :tada:",
                giveawayEnded: ":tada:   **ÇEKİLİŞ SONLANDI**   :tada:",
                timeRemaining: "Kalan süre: **{duration}**!",
                inviteToParticipate: ":tada: Emojisine basarak katıl!",
                winMessage: ":confetti_ball: Tebrikler, {winners}! **{prize}** ödülünü kazandınız!",
                embedFooter: "Çekiliş",
                noWinner: "Bir kazanan belirlenemedi!",
                hostedBy: "Çekiliş Yapan: {user}",
                winners: "Kazananlar",
                endedAt: "Bitiş tarihi",
units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false 
                }
            }
        });

    message.channel.send(`:confetti_ball: **Çekiliş** ${giveawayChannel} adlı kanalda başlatıldı!`).then(a => a.delete({timeout: 10000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-başlat'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yap',
  description: 'çekiliş',
  usage: 'çekiliş-yap'
};
