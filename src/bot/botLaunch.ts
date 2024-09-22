import { bot, CHAT_ID } from "./globalVars"

export function botLaunch() {
    bot.command('start', (ctx) => {
        ctx.reply(
            'Добро пожаловать. Чтобы сделать заказ воспользуйся с помощью одной из кнопок.'
        )
    })

    bot.command('getChatIdSeller', (ctx) => {
        ctx.reply('CHAT_ID продавца: ' + CHAT_ID)
    })

    bot.launch() 
}