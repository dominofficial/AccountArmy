const Discord = require("discord.js");
const client = new Discord.Client();
const async = require("async");
const config = require("./config.json");

client.on('ready', () => {
	client.user.setActivity(`>army | witch ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users`, {url: "https://www.twitch.tv/dominofficial"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users.`);
});

client.on("guildCreate", guild => {
    client.channels.get("553623985259020319")
  var newguild = new Discord.RichEmbed()
	  .addField("Thx", `${guild.name} For Adding ${client.user.tag}`)	
	  .addField("New Bot Info", `on ${client.guilds.size} servers with ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users`)									
	  .setColor("RANDOM")
	  .setThumbnail(`https://cdn.discordapp.com/attachments/553733596242771988/553969998553677835/hello.png}`)
	  .setFooter(`@${client.user.tag} Just Meet New Users!`)

	client.channels.get("553623985259020319").send(newguild);
});

client.on("guildDelete", guild => {
	client.channels.get("553623985259020319")
	var newguild = new Discord.RichEmbed()
		.addField("Nooooo!!!", `${guild.name} Just Kick Out ${client.user.tag}`)	
		.addField("New Bot Info", `on ${client.guilds.size} servers with ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users`)									
		.setColor("RANDOM")
		.setThumbnail(`https://cdn.discordapp.com/attachments/553733596242771988/553970729650094091/bye-bye-border.png`)
		.setFooter(`@${client.user.tag} Just Left Some Users!`)
  
	client.channels.get("553623985259020319").send(newguild);
  });

client.on('message', msg => {
	if (msg.guild && msg.content.startsWith('>private')) {
	  let text = msg.content.slice('XDNIE!private'.length); 
	  msg.guild.members.forEach(member => {
		if (member.id != client.user.id && !member.user.bot) member.send(text);
	  });
	}
  });

client.on('message', async msg => {
	
	if (msg.author.bot) return; 
		if (msg.channel.type !== 'text') return; 

	if (msg.content.startsWith(config.prefix + "ping")){
		const m = await msg.channel.send("Ping?");
		m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
		msg.react('👌');
		return;
	}
	if (msg.content.startsWith(config.prefix + "invite")){
		const m = await msg.channel.send("Wait Creating Invite!!");
		m.edit(`https://discordapp.com/api/oauth2/authorize?client_id=552516895253987348&permissions=0&scope=bot`);
		return;
	} 	
	client.on('message', msg => {
		if (msg.guild && msg.content.startsWith('>private')) {
			let text = msg.content.slice('>private'.length); 			
		var pv = new Discord.RichEmbed()
		.setTitle(`**You Message Was Send Successly!**`)
		.setDescription(`Message Was Send To ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} users`)
		.addField(`You Message Was:`, `${text}`)                                    
		.setColor("RANDOM")
		.setFooter(`@${msg.author.tag} Send Private Message To ${client.guilds.reduce((a, g) => a + g.memberCount, 0)} Members!`)
		msg.channel.send(pv);
	};
	})

	if (!msg.content.startsWith(config.prefix)) return; 
	console.log(`[${msg.guild.name}] ${msg.author.tag} >> ${msg.content}`); 
	const cmd = msg.content.toLowerCase().slice(config.prefix.length).split(' ')[0]; 
	if (commands.hasOwnProperty(cmd)){ 
		commands[cmd](msg); 
	}
});

client.on('guildMemberAdd', member => {
	member.send("Join Here https://discord.gg/tjHhqQx Free stuff (no scam)");
})
//BOT STATS
const botStats = {
	totalGuildsID: '553599991038607360',
	totalUsersID: '553600009048686612',
	totalChannelsID: '553600032218021888',

}
	
client.on('guildCreate', guild => {

	client.channels.get(botStats.totalGuildsID).setName(`Total Servers: ${client.guilds.size}`);
	client.channels.get(botStats.totalUsersID).setName(`Total Users: ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
	client.channels.get(botStats.totalChannelsID).setName(`Total Channels: ${client.channels.size}`);

});

client.on('guildDelete', guild => {

	client.channels.get(botStats.totalGuildsID).setName(`Total Servers: ${client.guilds.size}`);
	client.channels.get(botStats.totalUsersID).setName(`Total Users: ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
	client.channels.get(botStats.totalChannelsID).setName(`Total Channels: ${client.channels.size}`);

});	
//SERVER STATS
const serverStats = {
	guildID: '552156969201434634',
	userCountID: '552157202430033929',
	memberCountID: '552157214836785167',
	botCountID: '552157232293478400',

}
	
client.on('guildMemberAdd', member => {

  if (member.guild.id !== serverStats.guildID) return;

	client.channels.get(serverStats.userCountID).setName(`User Count: ${member.guild.memberCount}`);
	client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
	client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {

	if (member.guild.id !== serverStats.guildID) return;

	client.channels.get(serverStats.userCountID).setName(`User Count: ${member.guild.memberCount}`);
	client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
	client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
});

function commandIs(str, msg){
	return msg.content.toLowerCase().startsWith(prefix + str);
}

client.on('message', async msg => {

	if (msg.author.bot) return; 
			if (msg.channel.type !== 'text') return;

if (msg.content.startsWith(config.prefix + "army")){
	var help = new Discord.RichEmbed()
		.setTitle("All Army Commands", `Bot Prefix: ${config.prefix}`, true)
		.addField(`${config.prefix}army`, "All Bot Commands")
		.addField(`${config.prefix}ping`, "Show You Ping")
		.addField(`${config.prefix}invite`, "Bot invite")
		.addField(`${config.prefix}data`, "Bot Info")
		.addField(`${config.prefix}serverinfo`, "Server Info")
		.addField(`${config.prefix}userinfo`, "User Info")
		.addField(`${config.prefix}suggestion`, "Give Suggestion in channel `#suggestion` in discord `https://discord.gg/tjHhqQx`")
		.addField(`More Soon`, "Lol")											
		.setColor("RANDOM")
		.setThumbnail(msg.author.avatarURL)
		.setFooter(`@${msg.author.username} Ask For Help!`)

	msg.channel.send(help);	
    }
});

client.on('message', async msg => {
	
	if (msg.author.bot) return; 
		if (msg.channel.type !== 'text') return; 

	if (msg.content.startsWith(config.prefix + "serverinfo")){
		var ss = new Discord.RichEmbed()
		    //.addField('Server Name', `${msg.guild.name}`, true)			
			.addField('Owner', `${msg.guild.owner}`, true)						
			.addField(`Total Members`, `${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`, true)	
			.addField(`Region`, `${msg.guild.region}`, true)
			.setColor("RANDOM")
			.setThumbnail(msg.guild.iconURL)
			.setFooter(`Server Created on: ${msg.guild.createdAt}`)

		msg.channel.send(ss);	
		}
	});
	
	client.on('message', async msg => {
	
		if (msg.author.bot) return; 
			if (msg.channel.type !== 'text') return; 
	
	if (msg.content.startsWith(config.prefix + "userinfo")){
		var profill = new Discord.RichEmbed()
      .addField(`**@${msg.author.tag} Profile**`, `**INFORMATION**`)
			.addField(`:pencil2:Discord Name:`, `@${msg.author.tag}`)
			.addField(`:calendar:Date Of Join:`, `**${msg.member.joinedAt}**`)
			.setColor("RANDOM")
			.setFooter(`All You Info!`)
	
			msg.channel.send(profill);	
		}
	});
  
	client.on('message', async msg => {
	
		if (msg.author.bot) return; 
			if (msg.channel.type !== 'text') return; 

	if (msg.content.startsWith(config.prefix + "data")){
		var info = new Discord.RichEmbed()
      .setTitle(`**DISCORD BOT: @${client.user.tag} DATA**`)
			.addField(`:busts_in_silhouette: Users data:`, `● Users: ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`, true)
			.addField(`:pager: Guilds data:`, `● Guilds: ${client.guilds.size}`, true)
			.addField(`:electric_plug: Shards data:`, `● Enable: 0
			● Not answer: 0`, true)
			.setColor("RANDOM")
	
			msg.channel.send(info);	
	};
});

client.on('message', async msg => {

	if (msg.author.bot) return; 
		if (msg.channel.type !== 'text') return; 

client.on('message', async (msg) => {
	if (msg.guild && msg.content.startsWith('!suggestion')) {
			let text = msg.content.slice('!suggestion'.length); 
			client.channels.get("555105728801538059");
			var newguild = new Discord.RichEmbed()
					.setDescription(`**New suggestion!**`)
					.addField("Suggestion:", `${text}`)
					.addBlankField(true)                                        
					.setColor("RANDOM")
					.setThumbnail(`${msg.guild.iconURL}`)
					.setFooter(`@${msg.author.tag} Give a Suggestion!`)
			const mssg = await client.channels.get("555105728801538059").send(newguild);
			await mssg.react(`✅`);
			await mssg.react(`❎`);
  	}
});
})

client.login(config.token);
