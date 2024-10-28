import pkg from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

const {Client,LocalAuth} = pkg

export function BotWpp(){

    const client = new Client({
        authStrategy: new LocalAuth({
            dataPath:'sessionsFolder'
        })
    });
    
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        qrcode.generate(qr, {small: true});
        console.log('QR RECEIVED', qr);
    });
    
    
    
    client.on('ready',()=>{
        console.log('Client is ready!');

        const subfijo = '@c.us'
        const phoneNumber = '5491151278287'
        const chatId = phoneNumber+subfijo

        client.sendMessage(chatId,"Test de bot con auth")
    })
    
    
    
    client.on('message', msg => {
        if (msg.body == '!ping') {
            msg.reply('pong');
        }
    });
    
    client.initialize();
}

