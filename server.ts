import express from 'express'
import cors from 'cors'
import { botLaunch } from './src/bot/botLaunch'
import { orderRouter } from './src/order/order.controller'

const app = express()

const webAppUrl = 'https://bants.netlify.app'

function main () {
    app.use(express.json())
    app.use(cors())

    app.use('/api', orderRouter)

    app.listen(4200, () => {
        console.log('Server run')
    })


}

main()
botLaunch()