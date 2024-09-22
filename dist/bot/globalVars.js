"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME_SELLER = exports.CHAT_ID = exports.bot = void 0;
const telegraf_1 = require("telegraf");
const token = '7362319667:AAELXPek9dlpGD8VcH0i-TrjmeVyA-H1jhk';
exports.bot = new telegraf_1.Telegraf(token);
exports.CHAT_ID = '';
exports.USERNAME_SELLER = '';
exports.bot.command('newChatIdSeller', (ctx) => {
    exports.CHAT_ID = ctx.chat.id;
    exports.USERNAME_SELLER = ctx.from.username;
    ctx.reply('Новый CHAT_ID продавца: ' + exports.CHAT_ID);
});
