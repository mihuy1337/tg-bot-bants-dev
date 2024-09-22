import { bot, CHAT_ID, USERNAME_SELLER } from "../bot/globalVars";


interface IOrder {
    color: string
    size: string
}
interface IReqBody {
    username: string
    totalPrice: number
    chat_id: string | number
    order: IOrder[]
}

export class OrderService {
    orderToSeller(reqBody: IReqBody) {
        const orderDetails = reqBody.order.map((order) => (
            `Цвет: ${order.color},\nРазмер: ${order.size}`
        )).join('\n\n'); // Объединяем элементы массива в строку

        bot.telegram.sendMessage(CHAT_ID, `@${reqBody.username} сделал(а) заказ!\n\n${orderDetails}\n\nСумма заказа: ${reqBody.totalPrice} ₽`);
    }

    orderToClient(reqBody: IReqBody) {
        const orderDetails = reqBody.order.map((order) => (
            `Цвет: ${order.color},\nРазмер: ${order.size}`
        )).join('\n\n'); // Объединяем элементы массива в строку

        bot.telegram.sendMessage(reqBody.chat_id, `Ты сделал(а) заказ у @${USERNAME_SELLER}!\n\n${orderDetails}\n\nСумма заказа: ${reqBody.totalPrice} ₽`);
    }
}
