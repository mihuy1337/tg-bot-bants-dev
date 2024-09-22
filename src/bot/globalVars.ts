import { Telegraf} from "telegraf"

const token = '7362319667:AAELXPek9dlpGD8VcH0i-TrjmeVyA-H1jhk'
export const bot = new Telegraf(token)

export let CHAT_ID: string | number = ''
export let USERNAME_SELLER: string | undefined = ''

bot.command('newChatIdSeller', (ctx) => {

    CHAT_ID = ctx.chat.id
    USERNAME_SELLER = ctx.from.username

    ctx.reply(
        'Новый CHAT_ID продавца: ' + CHAT_ID
    )
})