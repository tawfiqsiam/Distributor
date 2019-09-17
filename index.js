const Discord = require('discord.js');
const client = new Discord.Client();

usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('Bot running...')
    client.user.setPresence({ game: { name: `=help | ${client.guilds.size} Servers`, type: "Playing"}});
});
client.on('message', message =>{
    if (message.content === '=help'){
        message.author.send('`Help Center (commands): \n _General:_ \n =invite: Invite the bot to your server \n =support: Sends you the link to the support server \n _Gen:_ \n =spotify: Gets you a Spotify Premium account` \n More stuff coming soon!');
    };
});
client.on('message', msg => {
    if (msg.content === '=invite') {
      msg.reply('Invite the bot here: https://discordapp.com/api/oauth2/authorize?client_id=622913750860562492&permissions=8&scope=bot');
    }
});
client.on('message', msg => {
    if (msg.content === '=support') {
        let bicon = client.user.displayAvatarURL;
        let supportembed = new Discord.RichEmbed()
        .setDescription("Support")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("If you need any help using the bot please join https://discord.gg/fa9GyVX. Once you joined do `-new` in any channel for help.", "Thanks for all your support!")
        .addField("If you have any suggestions, you're welcome to join our support server!" , ";)")

      msg.reply(supportembed);
    }
});
  client.on('message', msg => {
    if (msg.content === '=botinfo') {
        let bicon = client.user.displayAvatarURL;
        let clientembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail (bicon)
        .addField("Bot Name", client.user.username)
        .addField("Created On" , client.user.createdAt)
    
        msg.reply(clientembed);
    }
});
client.on('message', msg => {
    if (msg.content === '=serverinfo') {
        let sicon = msg.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name" , msg.guild.name)
        .addField("Created On" , msg.guild.createdAt)
        .addField("You Joined" , msg.member.joinedAt)
        .addField("Total Members" , msg.guild.memberCount);

        msg.reply(serverembed);
    }
});
client.on("message", async message => {
    const prefix = "=";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }
    
    if (cmd === "say") {
        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
        
        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColorv)

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Cooldown.. Please let other people get accounts.`')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = 
    `https://filemedia.net/43300/00001 If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00002  If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00003  If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00004  If the account doesnt work it means someone already claimed it.`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(process.env.BOT_TOKEN);
