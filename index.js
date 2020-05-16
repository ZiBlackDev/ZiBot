const Discord = require('discord.js');
const bot = new Discord.Client 

const token = process.env.token;

const ping = require('minecraft-server-util')


const PREFIX = '!'

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'dev': 
            message.channel.send('ZiBlack#0666')
            break;
        case 'discord':
            message.channel.send('https://discord.gg/BaHSJGX')
            break;
        case 'info':
            if (args[1] === 'version'){
                message.channel.send('version 1.0.1');
            }else{
                message.channel.send('Invalid Args')
            } 
                break;
            case 'clear':
              if(!args[1]) return message.reply('error 404')
              message.channel.bulkDelete(args[1]);
            break;
            }
            switch(args[0]){
            case 'profile':
                const embed = new Discord.MessageEmbed()
                .setTitle('User Info')
                .addField('User Name', message.author.username)
                .setColor (0x9CF02F)
                .addField('Version', '1.0.1')
                .addField('Current Server', message.guild.name)
                .addField('Iq', (Math.floor)(Math.random() * 100 + 1) )
                .setThumbnail(message.author.displayAvatarURL());
                message.channel.send(embed);
            break;
            }
            switch(args[0]){
                case 'mc' :
                    ping('142.44.253.187', 25565, (error, Response)=>{
                        if(error) throw error;
          
                       consele.log(Response)
                    })
                    break
          }
          
    }
)

bot.on('ready', () =>{
    console.log('this bot is online!')
} )
    
bot.login(token);