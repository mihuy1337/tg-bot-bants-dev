import { Telegraf, Markup } from "telegraf"



const token = '7393108446:AAHiyc6ZpYXlRdcWaJWT2W3pyUnPRgz44RQ'
const webAppUrl = 'https://avazoom.netlify.app/'

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