"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const globalVars_1 = require("../bot/globalVars");
class OrderService {
    orderToSeller(reqBody) {
        const orderDetails = reqBody.order.map((order) => (`Цвет: ${order.color},\nРазмер: ${order.size}`)).join('\n\n'); // Объединяем элементы массива в строку
        globalVars_1.bot.telegram.sendMessage(globalVars_1.CHAT_ID, `@${reqBody.username} сделал(а) заказ!\n\n${orderDetails}\n\nСумма заказа: ${reqBody.totalPrice} ₽`);
    }
    orderToClient(reqBody) {
        const orderDetails = reqBody.order.map((order) => (`Цвет: ${order.color},\nРазмер: ${order.size}`)).join('\n\n'); // Объединяем элементы массива в строку
        globalVars_1.bot.telegram.sendMessage(reqBody.chat_id, `Ты сделал(а) заказ у @${globalVars_1.USERNAME_SELLER}!\n\n${orderDetails}\n\nСумма заказа: ${reqBody.totalPrice} ₽`);
    }
}
exports.OrderService = OrderService;
