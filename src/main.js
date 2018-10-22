import Discord from 'discord.js';
import fs from 'fs';
import axios from 'axios';

const client = new Discord.Client();
const config = JSON.parse(fs.readFileSync('config.json'));

client.on('ready', () => {
    console.log('Ready!');
});

const availableCommands = [
    '!astolfo',
    '!astolfo unknown',
    '!astolfo safe',
    '!astolfo questionable',
    '!astolfo explicit',
];

client.on('message', (message) => {
    const adjustedMessage = message.content.toLowerCase();

    if (availableCommands.includes(adjustedMessage)) {
        const uri = adjustedMessage.split(' ')[1] || '';

        axios.get('https://astolfo.rocks/api/v1/images/random/' + uri).then((response) => {
            message.channel.send(`Rating: ${response.data.rating}\nViews: ${response.data.views}\n<http://unlimitedastolfo.works/post/view/${response.data.external_id}>\n${response.data.url}`);
        }).catch((error) => {
            console.log('https://astolfo.rocks/api/v1/images/random/' + uri);
            message.channel.send('There was an error getting an image of Astolfo :cry:');
        });
    }
});

client.login(config.token);