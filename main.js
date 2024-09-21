import { Telegraf, Markup } from "telegraf"



const token = '7362319667:AAELXPek9dlpGD8VcH0i-TrjmeVyA-H1jhk'
const webAppUrl = 'https://bants.netlify.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать. Чтобы сделать заказ воспользуйся с помощью одной из кнопок.',
        Markup.keyboard([
            Markup.button.webApp(
                'Открыть каталог',
                webAppUrl
            )
        ])
    )
})

bot.launch()