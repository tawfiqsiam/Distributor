const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjIyOTEzNzUwODYwNTYyNDky.XX6z2Q.vbnqFZ1smeW96X2Lv4F1GfH4Kaw';
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
      msg.reply('If you need any help using the bot please join https://discord.gg/fa9GyVX. Once you joined do `-new` in any channel for help.');
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
client.login(process.env.NjIyOTEzNzUwODYwNTYyNDky.XX6z2Q.vbnqFZ1smeW96X2Lv4F1GfH4Kaw);