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
         .addField("Help Center: \n __General:__ \n =invite: Invite the bot to your server \n =support: Sends you the link to the support server \n =say (whatevever u want): Makes the bot say whatever you want \n __Info:__ \n =botinfo: Bot info \n =serverinfo: Server info", "Gen Center")
         .addField("__Gen:__ \n =spotify: Spotify Premium \n =nitro: Nitro \n =fortnite: Fortnite \n =roblox: Roblox" , "More accounts below!")
         .addField("__Some more accounts__ \n =crunchyroll: Crunchyroll \n =minecraft: Minecraft" , "More accounts coming soon!")
         
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
client.on("message", async message => {
    const prefix = "=";

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }

    if (cmd === "say") {
        // Check if you can delete the message
        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
        
        // Role color
        const roleColor = message.guild.me.highestRole.hexColor;

        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColorv)
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});
client.login(precess.env.BOT_TOKEN);
