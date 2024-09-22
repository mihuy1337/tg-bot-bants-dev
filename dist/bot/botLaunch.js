"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botLaunch = botLaunch;
const globalVars_1 = require("./globalVars");
function botLaunch() {
    globalVars_1.bot.command('start', (ctx) => {
        ctx.reply('Добро пожаловать. Чтобы сделать заказ воспользуйся с помощью одной из кнопок.');
    });
    globalVars_1.bot.command('getChatIdSeller', (ctx) => {
        ctx.reply('CHAT_ID продавца: ' + globalVars_1.CHAT_ID);
    });
    globalVars_1.bot.launch();
}
