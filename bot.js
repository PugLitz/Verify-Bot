const Discord = require("discord.js");
const client = new Discord.Client();
const footer = "Verifier"

const prefix = "!";

client.on("ready", () => {
    console.log("Verifier has loaded.")
    client.user.setActivity('Verifier Bot')
});

client.on("guildMemberAdd", member => {
    var nonverified = member.guild.roles.find('Non-Verified')
    member.addRole(nonverified)
});

client.on('message', function(message) {
    if (message.channel.name == "verify") {
        if (message.content === "!verify") {
            const verifyRole = message.guild.roles.find('name', 'V');
            var role = massage.guild.roles.find('name', 'Non-Verified')
            message.member.addRole(verifyRole);
            message.member.removeRole(role);
            message.author.send({ embed: {
                color: 0xffffff,
                title: 'Verifier',
                description: ':white_check_mark: You have verified your self.',
                footer: {
                    text: 'Verifier'
                },
                timestamp: new Date()
            }})
            message.delete(100)
         } else message.delete()
    };
});

client.on('message', (message) => {
    let cont = message.content.slice(prefix.length).split("") // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only Leaving the arguments
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.toLowerCase().startsWith(prefix + 'fakejoin')) {
        client.emit("guildMemberAdd", message.member);
    }

    if (message.content.toLowerCase().startsWith(prefix + 'verify')) {
        if (MessageChannel.channel.name === "verify") {
            return;
        }
        else {
            message.delete();
            const embed = new Discord.RichEmbed()
            .setColor(0xfffff) // White
            .setTitle('Verifier')
            .setDescription(':x: You cannot be verified again')
            .setFooter(footer)
            return message.author.send({ embed: embed});

        }
    }


});

client.login('NDkxNjMyMjUxMTU5ODM4NzUw.DoLReQ.pYTMyzIHYB7AjSzFQkc1vnw_z2M')
