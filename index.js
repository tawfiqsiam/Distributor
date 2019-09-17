const Discord = require('discord.js');
const client = new Discord.Client();

usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('Bot running...')
    client.user.setPresence({ game: { name: `=help | ${client.guilds.size} Servers`, type: "Playing"}});
});
client.on('message', msg =>{
    if (msg.content === '=help'){
         let supportembed = new Discord.RichEmbed()
         .setDescription("Help")
         .setColor("#15f153")
         .addField("Help Center: \n __General:__ \n =invite: Invite the bot to your server \n =support: Sends you the link to the support server \n __Info:__ \n =botinfo: Shows you some info on the bot \n =serverinfo: Shows you some info of the server", "Gen Center")
         .addField("__Gen:__ \n =spotify: Gets you a Spotify Premium account \n =crunchyroll: Gets you a Crunchyroll account" , "More stuff coming soon!")
         
         msg.reply(supportembed);
    }
});
client.on('message', msg => {
    if (msg.content === '=invite') {
         let supportembed = new Discord.RichEmbed()
         .setDescription("Invite")
         .setColor("#15f153")
         .addField("Invite the bot here: https://discordapp.com/api/oauth2/authorize?client_id=622913750860562492&permissions=8&scope=bot", "Thank you for adding the bot!")

         msg.reply(supportembed);
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
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Cooldown.. Please let other people get accounts.`')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 100000)
    var string = 
    `https://filemedia.net/43300/00001 If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00002  If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00003  If the account doesnt work it means someone already claimed it.
    https://filemedia.net/43300/00004  If the account doesnt work it means someone already claimed it.
    https://direct-link.net/43300/00005  If the account doesnt work it means someone already claimed it.`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=crunchyroll'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Cooldown.. Please let other people get accounts.`')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 100000)
    var string = 
    `https://filemedia.net/43300/00006  If the account doesnt work it means someone already claimed it.`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=fortnite'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Cooldown.. Please let other people get accounts.`')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 100000)
    var string = 
    `https://direct-link.net/43300/00007  If the account doesnt work it means someone already claimed it.`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.reply("Check your DMs")
    message.author.send(`${random}`);
       
};
};
});
client.login(process.env.BOT_TOKEN);
