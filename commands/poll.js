const Discord = require('discord.js')

exports.run = async (client, message, arge, tools) => {

    if (message.member.roles.find(r => r.name === 'poll')) return message.channel.send('This requires the role: poll')
 
    if (message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permision: ADMINISTRATOR')

    if (!args[0]) return message.channel.send('Proper Usage: >poll QUESTION')

    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote')
        .setDescription(args.join(''))
        .setTitle(`Poll Create By ${message.author.username}`);

    let msg = await message.channel.send(embed);
    
    await msg.react('YES EMOGI');
    await msg.react('NO EMOGI');

    message.delete({timeout: 1000});
}

module.exports.help = {
  name:"poll"
}