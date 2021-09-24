
const Discord = require("discord.js");
var client = new Discord.Client();

//client.on("ready", function() {
        /*var dd = new Date;
        var h = dd.getUTCHours();
        var m = dd.getUTCMinutes();
        var hh = ""; var mm = "";
        if(h < 10){hh = "0"} else if(h > 9){hh = ""}
        if(m < 10){mm = "0"} else if(m > 9){mm = ""}*/
        //console.log("Bot is up.")
        /*client.channels.cache.get("890021970765303898").send(new Discord.MessageEmbed()
        .setColor("#F2F2F2")
        .setTitle("Bot was deployed at __" + hh + h + ":" + mm + m + " GMT__."))*/
        //client.user.setStatus("idle")
//});


client.on("message", async function(message) {
if (message.author.equals(client.user)) return;


if (!message.content.startsWith("?")) return;
var args = message.content.substring("?".length).split(" ");
switch (args[0].toLowerCase()) {

    case "help":
        message.channel.send(new Discord.MessageEmbed()
        .setColor("#020613")
        .setTitle(`Commands:`)
        .addField("?help","Mosa3ada ;-;."));
    break;

    
    // OWNER COMMANDS

    case "lock":
        message.delete()
        if(message.author.id == "634872299069374488"){
            message.channel.createOverwrite("860669274237304882", {'VIEW_CHANNEL':false})
        }
    break;

    case "unlock":
        message.delete()
        if(message.author.id == "634872299069374488"){
            message.channel.createOverwrite("860669274237304882", {'VIEW_CHANNEL':true})
        }
    break;

    case "say":
        if(message.author.id == "634872299069374488"){
            message.delete();
            const emb2 = new Discord.MessageEmbed()
                .setColor("#079898")
                .setTitle(message.content.split("?say "))
            message.channel.send(emb2)
        }
    break;

    }
});

client.login(process.env.TOKEN);
