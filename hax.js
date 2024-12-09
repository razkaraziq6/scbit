/*
• Base Ori RevanXmods X RevanOFFC
Penting ‼️

Hapus Bagian/Teks Ini? Masuk Neraka Paling Bawah

Script Ini Murni Bikinan Sendiri, Saya Hanya Sekedar Kroco Penghuni Inti Bumi.

Thanks To :                                
- Allah Swt 
- Nabi Muhammad Saw         
- My Parents       
- Revan [ Develover Sc ]  
- RevanOFFC [ Support ]
- Revan [Recode]
- Pengguna Bot Yang Selalu Support

• Recode By ( Revan  )
*/

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const settings = require('./settings')
const botToken = settings.token;
const owner = settings.adminId;
const adminfile = 'adminID.json';
const premiumUsersFile = 'premiumUsers.json';
const domain = settings.domain;
const plta = settings.plta;
const pltc = settings.pltc;
try {
    premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
}
const bot = new TelegramBot(botToken, { polling: true });
try {
    adminUsers = JSON.parse(fs.readFileSync(adminfile));
} catch (error) {
    console.error('Error reading adminUsers file:', error);
}
function getRuntime(startTime) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
const nama = 'RevanMods';
const author = 'RevanKroco';
// Informasi waktu mulai bot
const startTime = Date.now();
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const startTime = Date.now();
    const menuText = `
ʜᴀɪ @${sender} sᴀʏᴀ ᴀᴅᴀʟᴀʜ ${nama}

┌ – ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ –
  🤖 ɴᴀᴍᴀ ʙᴏᴛ: ${nama}
  👤 ᴏᴡɴᴇʀ: ${author}
  ⏲️ ʀᴜɴᴛɪᴍᴇ: ${getRuntime(startTime)}
└ 
┌ – ᴄᴇᴋ ɪᴅ –
│ /ᴄᴇᴋɪᴅ
└ 

┌ – ᴍᴇɴᴜ ᴘʀᴇᴍɪᴜᴍ –
│ /ᴘᴀɴᴇʟ
│ /ʀᴀᴍʟɪsᴛ
└ 
┌ – ᴍᴇɴᴜ ᴏᴡɴᴇʀ –
│ /ᴀᴅᴅᴏᴡɴᴇʀ
│ /ᴅᴇʟᴏᴡɴᴇʀ
│ /ᴀᴅᴅᴘʀᴇᴍ
│ /ᴅᴇʟᴘʀᴇᴍ
│ /ʟɪsᴛsʀᴠ
│ /ᴅᴇʟsʀᴠ
│ /ᴄʀᴇᴀᴛᴇᴀᴅᴍɪɴ
│ /ʟɪsᴛᴀᴅᴍɪɴ
└ RevanOFC –`;
// Event listener for button 'Start'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === 'start') {
        const chatId = callbackQuery.message.chat.id;
        const startTime = Date.now();

        const menuText = `
ʜᴀɪ @${pushname} sᴀʏᴀ ᴀᴅᴀʟᴀʜ ${nama}

┌ – ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ –
  🤖 ɴᴀᴍᴀ ʙᴏᴛ: ${nama}
  👤 ᴏᴡɴᴇʀ: ${author}
  ⏲️ ʀᴜɴᴛɪᴍᴇ: ${getRuntime(startTime)}
└ 

┌ – ᴄᴇᴋ ɪᴅ –
│ /ᴄᴇᴋɪᴅ
└ 

┌ – ᴍᴇɴᴜ ᴘʀᴇᴍɪᴜᴍ –
│ /ᴘᴀɴᴇʟ
│ /ʀᴀᴍʟɪsᴛ
└ 
┌ – ᴍᴇɴᴜ ᴏᴡɴᴇʀ –
│ /ᴀᴅᴅᴏᴡɴᴇʀ
│ /ᴅᴇʟᴏᴡɴᴇʀ
│ /ᴀᴅᴅᴘʀᴇᴍ
│ /ᴅᴇʟᴘʀᴇᴍ
│ /ʟɪsᴛsʀᴠ
│ /ᴅᴇʟsʀᴠ
│ /ᴄʀᴇᴀᴛᴇᴀᴅᴍɪɴ
│ /ʟɪsᴛᴀᴅᴍɪɴ
└ RevanOFC –`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '💾 ʀᴀᴍʟɪsᴛ', callback_data: 'ramlist' }],

                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// cekid
bot.onText(/\/cekid/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const id = msg.from.id;
    const owner = '7333598244'; // Ganti dengan ID pemilik bot 
    const text12 = `ʜᴀɪ @${sender} 👋
    
👤 ᴅᴀʀɪ ${id}
  └🙋🏽 ᴋᴀᴍᴜ
  
 ɪᴅ ᴛᴇʟᴇɢʀᴀᴍ ᴋᴀᴍᴜ ᴀᴅᴀʟᴀʜ : ${id}
 ɴᴀᴍᴀ ᴀɴᴅᴀ ᴀᴅᴀʟᴀʜ : @${sender}
 
 ᴅᴇᴠᴇʟᴏᴘᴇʀ : RevanOFC`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'ʀᴇᴠᴀɴᴏғᴄʜᴏsᴛɪɴɢ', url: 'https://t.me/revanstorejb' }, { text: '-', url: 'https://t.me/revanstorejb' }],
                [{ text: '-', url: 'https://t.me/revanstorejb' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// ramlist
bot.onText(/\/ramlist/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const owner = '7333598244'; // Ganti dengan ID pemilik bot 
    const text12 = `*Hi @${sender} 👋*
    
– ʀᴀᴍ ᴅᴀɴ ᴄᴘᴜ –
• 𝟷ɢʙ - 25% ᴄᴘᴜ
• 𝟸ɢʙ - 50% ᴄᴘᴜ
• 𝟹ɢʙ - 75% ᴄᴘᴜ
• 𝟺ɢʙ - 100% ᴄᴘᴜ
• 𝟻ɢʙ - 200% ᴄᴘᴜ
• 𝟼ɢʙ - 200% ᴄᴘᴜ
• 𝟽ɢʙ - 200% ᴄᴘᴜ
• 𝟾ɢʙ - 200% ᴄᴘᴜ
• 𝟿ɢʙ - 225% ᴄᴘᴜ
• 𝟷𝟶ɢʙ - 250% ᴄᴘᴜ
• ᴜɴʟɪ - ᴜɴʟɪ% ᴄᴘᴜ

– RevanOFC –
`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🖥️ Buy Panel', url: 'https://t.me/revanstorejb/buy_panel' }, { text: '👤 Buy Admin', url: 'https://t.me/revanstorejb/buyadminp & ptpanel' }],
                [{ text: '🇲🇨 Buy Vps', url: 'https://t.me/revanstorejb/buyvps' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// ramlist2
const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [
  [{ text: '💾 ʀᴀᴍʟɪsᴛ', callback_data: 'ramlist' }],

            ]
        }
    }; 
    bot.sendMessage(chatId, message, keyboard);
});
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'ramlist') {
    bot.answerCallbackQuery(callbackQuery.id);
    const ramListMessage = "– ʀᴀᴍ ᴅᴀɴ ᴄᴘᴜ –\n• 𝟷ɢʙ - 25% ᴄᴘᴜ\n• 𝟸ɢʙ - 𝟻𝟶% ᴄᴘᴜ\n• 𝟹ɢʙ - 𝟽𝟻% ᴄᴘᴜ\n• 𝟺ɢʙ - 𝟷𝟶𝟶% ᴄᴘᴜ\n• 𝟻ɢʙ - 𝟸𝟶𝟶% ᴄᴘᴜ\n• 𝟼ɢʙ 𝟸𝟶𝟶% ᴄᴘᴜ\n• 𝟽ɢʙ - 𝟸𝟶𝟶% ᴄᴘᴜ\n• 𝟾ɢʙ - 𝟸𝟶𝟶% ᴄᴘᴜ\n•  𝟿ɢʙ 𝟸𝟸𝟻% ᴄᴘᴜ\n• 𝟷𝟶ɢʙ 𝟸𝟻𝟶% ᴄᴘᴜ\n• ᴜɴʟɪ - ᴜɴʟɪ% ᴄᴘᴜ\n – RevanOFC –";
    bot.editMessageText(ramListMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'ᴋᴇᴍʙᴀʟɪ ᴋᴇ ᴍᴇɴᴜ sᴛᴀʀᴛ', callback_data: 'start' }]
        ]
      }
    });
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// addprem
bot.onText(/\/addprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!premiumUsers.includes(userId)) {
            premiumUsers.push(userId);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴇʀʜᴀsɪʟ ᴅɪsɪᴍᴘᴀɴ ᴅᴀʟᴀᴍ ᴅᴀᴛᴀʙᴀsᴇ ᴘʀᴇᴍɪᴜᴍ.`);
        } else {
            bot.sendMessage(chatId, `ɪᴅ ${userId} sᴜᴅᴀʜ ᴀᴅᴀ ᴅɪ ᴅᴀʟᴀᴍ ᴅᴀᴛᴀʙᴀsᴇ ᴘʀᴇᴍɪᴜᴍ.`);
        }
    } else {
        bot.sendMessage(chatId, 'Khusus Owner, tolll🤓.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delprem
bot.onText(/\/delprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];  
    if (msg.from.id.toString() === owner) {
        const index = premiumUsers.indexOf(userId);
        if (index !== -1) {
            premiumUsers.splice(index, 1);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴇʀʜᴀsɪʟ ᴅɪ ʜᴀᴘᴜs ᴅᴀʀɪ ᴅᴀᴛᴀʙᴀsᴇ ᴘʀᴇᴍɪᴜᴍ.`);
        } else {
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ.`);
        }
    } else {
        bot.sendMessage(chatId, 'Khusus Owner, tolll🤓.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// addowner
bot.onText(/\/addowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!adminUsers.includes(userId)) {
            adminUsers.push(userId);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴇʀʜᴀsɪʟ ᴅɪsɪᴍᴘᴀɴ ᴅᴀʟᴀᴍ ᴅᴀᴛᴀʙᴀsᴇ ᴏᴡɴᴇʀ.`);
        } else {
            bot.sendMessage(chatId, `ɪᴅ ${userId} sᴜᴅᴀʜ ᴀᴅᴀ ᴅɪ ᴅᴀʟᴀᴍ ᴅᴀᴛᴀʙᴀsᴇ ᴏᴡɴᴇʀ.`);
        }
    } else {
        bot.sendMessage(chatId, 'Khusus Owner, tolll🤓.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delowner
bot.onText(/\/delowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        const index = adminUsers.indexOf(userId);
        if (index !== -1) {
            adminUsers.splice(index, 1);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴇʀʜᴀsɪʟ ᴅɪ ʜᴀᴘᴜs ᴅᴀʀɪ ᴅᴀᴛᴀʙᴀsᴇ ᴏᴡɴᴇʀ.`);
        } else {
            bot.sendMessage(chatId, `ɪᴅ ${userId} ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ.`);
        }
    } else {
        bot.sendMessage(chatId, 'Khusus Owner, tolll 🤓.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// panel
bot.onText(/\/panel/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const owner = '7333598244'; // Ganti dengan ID pemilik bot 
    const text12 = `*ʜᴀɪ @${sender} 👋*
    ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ᴘᴀɴᴇʟ ᴋᴇᴛɪᴋ /ʀᴀᴍ ᴜsᴇʀɴᴀᴍᴇ,ɪᴅᴛᴇʟᴇ
ᴄᴏɴᴛᴏʜ : /𝟷ɢʙ ʀᴇᴠᴀɴᴏғᴄ,7333598244
ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ʀᴀᴍʟɪsᴛ ᴋᴇᴛɪᴋ /ʀᴀᴍʟɪsᴛ
`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🖥️ Buy Panel', url: 'https://t.me/revanstorejb/buy_panel' }, { text: '👤 Buy Admin', url: 'https://t.me/revanstorejb/buyadminp & ptpanel' }],
                [{ text: '🇲🇨 Buy Vps', url: 'https://t.me/revanstorejb/buyvps' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 1gb
bot.onText(/\/1gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Kasihannnn, Beli Ke Owner Aja', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'RevanOFC', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '1GB';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '1024';
  const cpu = '25';
  const disk = '1024';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}223`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴇᴍᴀɪʟ ᴛᴇʀsᴇʙᴜᴛ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 2gb
bot.onText(/\/2gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ Owner', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '2gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '2048';
  const cpu = '50';
  const disk = '2048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}221`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 3gb
bot.onText(/\/3gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id)); 
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '3gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '3072';
  const cpu = '75';
  const disk = '6144';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}77qr`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 4gb
bot.onText(/\/4gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '4gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '4048';
  const cpu = '100';
  const disk = '4048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/np  m uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}1112`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 5gb
bot.onText(/\/5gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '5gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '5048';
  const cpu = '200';
  const disk = '5048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}pp1q`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 6gb
bot.onText(/\/6gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '6gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '6048';
  const cpu = '200';
  const disk = '6048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}w3e1`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 7gb
bot.onText(/\/7gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '7gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '7048';
  const cpu = '200';
  const disk = '7048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}sdzj121`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 8gb
bot.onText(/\/8gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '8gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '8048';
  const cpu = '200';
  const disk = '8048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}zhks1`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 9gb
bot.onText(/\/9gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '9gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '9048';
  const cpu = '225';
  const disk = '9048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}871`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 10gb
bot.onText(/\/10gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '10000';
  const cpu = '250';
  const disk = '10000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}881`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ɴᴀᴍᴀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ:  ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `📦 ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}

🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});

// unli
bot.onText(/\/unli (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'ʟᴜ ʙᴜᴋᴀɴ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, ʙᴇʟɪ ᴀᴛᴀᴜ ᴍɪɴᴛᴀ ᴀᴅᴅᴘʀᴇᴍ ᴋᴇ ʀᴇᴠᴀɴᴏғᴄ', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Owner', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'ᴘᴇɴɢɢᴜɴᴀᴀɴ sᴀʟᴀʜ ᴋᴇᴛɪᴋ /ᴘᴀɴᴇʟ');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + 'unli';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '0';
  const cpu = '0';
  const disk = '0';
  const email = `${username}panel@gmail.com`;
  const akunlo = settings.pp;
  const startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const password = `${username}2322`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'ᴜsᴇʀɴᴀᴍᴇ sᴜᴅᴀʜ ᴀᴅᴀ, ɢᴀɴᴛɪ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: startup_cmd,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴀɴᴅᴀ
ᴜsᴇʀ: ${username}
ᴇᴍᴀɪʟ: ${email}
ɪᴅ: ${user.id}
ʀᴀᴍ: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
ᴅɪsᴋ: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
ᴄᴘᴜ: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `📦ᴘᴀᴋᴇᴛ ᴜɴᴛᴜᴋ @${u}


🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${user.username}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password} 
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɢᴀɴᴛɪ ᴘᴀssᴡᴏʀᴅ
==============================`
        });
      bot.sendMessage(chatId, 'ᴅᴀᴛᴀ ᴘᴀɴᴇʟ ᴅɪᴋɪʀɪᴍ ᴋᴇ ɪᴅ ʏᴀɴɢ ᴛᴇʀᴛᴇʀᴀ.');
    }
  } else {
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴇʀʀᴏʀ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
//batas
fs.readFile('adminID.json', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminID = JSON.parse(data);
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// createadmin
bot.onText(/\/createadmin (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
  const isAdmin = adminUsers.includes(String(msg.from.id));  
  if (!isAdmin) {
    bot.sendMessage(chatId, 'Khusus Owner, Wlee🤓', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'RevanOFC', url: 'https://t.me/revanstorejb' }
          ]
        ]
      }
    });
    return;
  }
  const commandParams = match[1].split(',');
  const panelName = commandParams[0].trim();
  const telegramId = commandParams[1].trim();
  if (commandParams.length < 2) {
    bot.sendMessage(chatId, 'ғᴏʀᴍᴀᴛ sᴀʟᴀʜ!');
    return;
  }
  const password = panelName + "11212";
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: `${panelName}@gmail.com`,
        username: panelName,
        first_name: panelName,
        last_name: "ADMIN",
        language: "en",
        root_admin: true,
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      bot.sendMessage(chatId, JSON.stringify(data.errors[0], null, 2));
      return;
    }
    const user = data.attributes;
    const userInfo = `
TYPE: user
➟ ɪᴅ: ${user.id}
➟ ᴜsᴇʀɴᴀᴍᴇ: ${user.username}
➟ ᴇᴍᴀɪʟ: ${user.email}
➟ ɴᴀᴍᴀ: ${user.first_name} ${user.last_name}
➟ ʙᴀʜᴀsᴀ : ${user.language}
➟ ᴀᴅᴍɪɴ: ${user.root_admin}
➟ ᴅɪʙᴜᴀᴛ : ${user.created_at}
➟ ʟᴏɢɪɴ: ${domain}
    `;
    bot.sendMessage(chatId, userInfo);
    bot.sendMessage(telegramId, `
📦 ᴘᴀᴋᴇᴛ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ

ʙᴇʀɪᴋᴜᴛ ᴅᴀᴛᴀ ᴀᴋᴜɴ ᴀɴᴅᴀ ⤵️
🚩 ʟᴏɢɪɴ : ${domain}
🚩 ᴇᴍᴀɪʟ : ${user.email}
🚩 ᴜsᴇʀɴᴀᴍᴇ : ${panelName}
🚩 ᴘᴀssᴡᴏʀᴅ : ${password}
==============================
➡️ ʀᴜʟᴇs : 

• ᴊᴀɴɢᴀɴ ʙᴜᴋᴀ/ʀᴜsᴜʜ/ᴅᴏᴡɴʟᴏᴀᴅ ᴅɪ sᴇʀᴠᴇʀ ᴏʀᴀɴɢ ʟᴀɪɴ
• ᴊᴀɴɢᴀɴ ʙᴜᴋᴀ/ʀᴜsᴜʜ/ᴅᴏᴡɴʟᴏᴀᴅ ᴅɪ sᴇʀᴠᴇʀ ᴀᴅᴍɪɴ
• ᴊᴀɴɢᴀɴ ᴇᴅɪᴛ ᴅɪ ʙᴀɢɪᴀɴ ᴄᴏɴᴛʀᴏʟ ᴀᴅᴍɪɴ/ʟᴏᴄᴀᴛɪᴏɴ/ɴᴏᴅᴇs/ᴇɢɢ/ɴᴇsᴛ
• ᴊᴀɴɢᴀɴ ᴀᴋᴛɪғɪɴ ᴀ𝟸ғ
• sᴇʀᴠᴇʀ ᴛɪᴅᴀᴋ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ sᴇʟᴀɪɴ ʙᴏᴛ ʀɪɴɢᴀɴ
• ᴅɪʟᴀʀᴀɴɢ ᴋᴇʀᴀs ᴍᴇᴍʙᴜᴀᴛ ᴀᴋᴜɴ ᴀᴅᴍɪɴ ᴋᴇᴄᴜᴀʟɪ ᴀɴᴅᴀ ᴘᴛ/ᴏᴡɴ ᴅᴀʀɪ ʀᴇᴠᴀɴᴏғᴄ

ʟᴀɴɢɢᴀʀ? ʙʟᴀᴄᴋʟɪsᴛ/sᴇʀᴠᴇʀ ᴏғғʟɪɴᴇ 𝟷-𝟽 ʜᴀʀɪ
==============================
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴜʙᴀʜ ᴘᴀssᴡᴏʀᴅ
==============================
    `);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'ᴀᴅᴀ ᴋᴇsᴀʟᴀʜᴀɴ ᴅɪ ʙᴀɢɪᴀɴ sᴇᴛᴛɪɴɢs ʙᴀɴɢ @revanstorejb');
  }
});
fs.readFile(adminfile, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminIDs = JSON.parse(data);
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// listsrv
bot.onText(/\/listsrv/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));   
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Kusus Owner, Wlee🤓', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'revanstr', url: 'https://t.me/revanstorejb' }
                    ]
                ]
            }
        });
        return;
    }
    let page = 1; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "ʙᴇʀɪᴋᴜᴛ ʟɪsᴛ sᴇʀᴠᴇʀ:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;

            messageText += `ɪᴅ sᴇʀᴠᴇʀ: ${s.id}\n`;
            messageText += `ɴᴀᴍᴀ sᴇʀᴠᴇʀ: ${s.name}\n`;
            messageText += `sᴛᴀᴛᴜs: ${status}\n\n`;
        }

        bot.sendMessage(chatId, messageText);
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ ᴛɪᴅᴀᴋ ᴛᴇʀᴅᴜɢᴀ.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//delsrv
bot.onText(/\/delsrv(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const srv = match[1].trim();

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Khusus Owner, Wlee🤓', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Owner', url: 'https://t.me/revanstorejb' }
                    ]
                ]
            }
        });
        return;
    }

    if (!srv) {
        bot.sendMessage(chatId, 'ғᴏʀᴍᴀᴛ sᴀʟᴀʜ, ғᴏʀᴍᴀᴛ: /delsrv ɪᴅ');
        return;
    }

    try {
        let f = await fetch(`${domain}/api/application/servers/${srv}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            bot.sendMessage(chatId, 'ᴛɪᴅᴀᴋ ᴀᴅᴀ sᴇʀᴠᴇʀ ᴘᴀᴅᴀ ɪᴅ ᴛᴇʀsᴇʙᴜᴛ');
        } else {
            bot.sendMessage(chatId, 'ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢʜᴀᴘᴜs sᴇʀᴠᴇʀ');
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ ᴛɪᴅᴀᴋ ᴛᴇʀᴅᴜɢᴀ.');
    }
});
// listadmin
bot.onText(/\/listadmin/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Khusus Owner, Wlee🤓', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Owner', url: 'https://t.me/revanstorejb' }
                    ]
                ]
            }
        });
        return;
    }
    let page = '1';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "ʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ᴀᴅᴍɪɴ :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
                messageText += `🆔 ɪᴅ: ${u.id} - 🌟 sᴛᴀᴛᴜs: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'ʙʏ ʙᴏᴋᴇᴋᴀᴄᴛʏʟ';
            }
        }
        messageText += `ᴘᴀɢᴇ: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `ᴛᴏᴛᴀʟ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ: ${res.meta.pagination.count}`;
        const keyboard = [
            [
                { text: 'ᴋᴇᴍʙᴀʟɪ', callback_data: JSON.stringify({ action: 'back', page: parseInt(res.meta.pagination.current_page) - 1 }) },
                { text: 'ʟᴀɴᴊᴜᴛ', callback_data: JSON.stringify({ action: 'next', page: parseInt(res.meta.pagination.current_page) + 1 }) }
            ]
        ];
        bot.sendMessage(chatId, messageText, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// batas akhir
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ ᴛɪᴅᴀᴋ ᴛᴇʀᴅᴜɢᴀ.');
   //▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// cvps 
      const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Konfigurasi Bot
const token = '6441710033'; 
const bot = new TelegramBot(token, { polling: true });

// ID Pemilik Bot (ganti dengan ID pengguna Anda)
const OWNER_ID ='6441710033';

// Konfigurasi Pterodactyl API
const PTERO_URL = 'panel.tridatucloud.store'; 
const PTERO_API_KEY = '6441710033'; 

// Penyimpanan sementara untuk data percakapan pengguna
const userSessions = {};

// Fungsi untuk memeriksa apakah pengguna adalah pemilik
function isOwner(userId) {
  return userId === OWNER_ID;
}

// Fungsi membuat VPS
async function createVPS(userId, serverName, ram, disk, cpu) {
  try {
    const response = await axios.post(`${PTERO_URL}/client/servers`, {
      name: serverName,
      user: userId, 
      egg: 'Vpsegg', 
      docker_image: 'ubuntu:20.04',
      startup: 'bash start.sh', 
      limits: {
        memory: ram, 
        swap: 0,
        disk: disk, 
        io: 500,
        cpu: cpu, 
      },
      feature_limits: {
        databases: 1,
        backups: 1,
      },
      allocation: {
        default: 1,
      },
    }, {
      headers: {
        'Authorization': `Bearer ${PTERO_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return `✅ VPS berhasil dibuat! ID: ${response.data.attributes.id}`;
  } catch (error) {
    console.error(error.response.data || error.message);
    return `❌ Gagal membuat VPS: ${error.response.data.errors[0].detail || error.message}`;
  }
}

// Handler untuk perintah /createvps
bot.onText(/\/createvps/, (msg) => {
  const chatId = msg.chat.id;

  // Cek apakah pengirim adalah pemilik bot
  if (!isOwner(chatId)) {
    return bot.sendMessage(chatId, '*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
  }

  // Mulai dengan meminta nama server
  bot.sendMessage(chatId, 'Apa nama server VPS yang Anda inginkan?');
  userSessions[chatId] = {}; // Mulai sesi percakapan baru
});

// Handler untuk pesan berikutnya (interaksi bertahap)
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // Cek apakah pengirim adalah pemilik bot
  if (!isOwner(chatId)) {
    return bot.sendMessage(chatId, '*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
  }

  // Cek apakah pengguna sedang dalam sesi pembuatan VPS
  if (userSessions[chatId]) {
    const session = userSessions[chatId];

    // Cek apakah nama server sudah dimasukkan
    if (!session.serverName) {
      session.serverName = msg.text;
      return bot.sendMessage(chatId, 'Berapa besar RAM (dalam MB) yang Anda inginkan untuk VPS ini?');
    }

    // Tanya RAM
    if (!session.ram) {
      const ram = parseInt(msg.text);
      if (isNaN(ram) || ram <= 0) {
        return bot.sendMessage(chatId, 'Masukkan jumlah RAM yang valid (dalam MB).');
      }
      session.ram = ram;
      return bot.sendMessage(chatId, 'Berapa besar disk (dalam MB) yang Anda inginkan untuk VPS ini?');
    }

    // Tanya disk
    if (!session.disk) {
      const disk = parseInt(msg.text);
      if (isNaN(disk) || disk <= 0) {
        return bot.sendMessage(chatId, 'Masukkan jumlah disk yang valid (dalam MB).');
      }
      session.disk = disk;
      return bot.sendMessage(chatId, 'Berapa besar CPU (dalam %) yang Anda inginkan untuk VPS ini?');
    }

    // Tanya CPU
    if (!session.cpu) {
      const cpu = parseInt(msg.text);
      if (isNaN(cpu) || cpu <= 0) {
        return bot.sendMessage(chatId, 'Masukkan jumlah CPU yang valid (dalam %).');
      }
      session.cpu = cpu;

      // Buat VPS setelah semua data lengkap
      const { serverName, ram, disk, cpu } = session;
      const userId = 1; // Ganti dengan ID pengguna di Pterodactyl

      const response = await createVPS(userId, serverName, ram, disk, cpu);
      bot.sendMessage(chatId, response);

      // Hapus sesi pengguna setelah proses selesai
      delete userSessions[chatId];
    }
  }
});
    }
});