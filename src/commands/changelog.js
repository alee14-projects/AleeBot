module.exports.run = async (client, message) => {
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
    .setAuthor('AleeBot ' + '2.1.0 Beta ' + 'Changelog', 'https://cdn.discordapp.com/avatars/282547024547545109/6c147a444ae328c38145ef1f74169e38.png?size=2048')
    .setDescription('What\'s new in AleeBot 2.1 Beta?')
    .addField('! Coming soon music commands!', true)
    .addField('! Coming soon moderation commands!', true)
    .addField('And even more!', true)
    .setFooter('AleeCorp Copyright 2017')
    .setColor('#1fd619');
  message.channel.sendEmbed(embed);

};

exports.conf = {
  aliases: [],
  guildOnly: false,
};
exports.help = {
  name: 'changelog',
  description: 'What\'s new',
  usage: 'changelog',
  category: '- General Commands',
};