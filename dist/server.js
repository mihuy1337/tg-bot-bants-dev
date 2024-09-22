"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const botLaunch_1 = require("./bot/botLaunch");
const order_controller_1 = require("./order/order.controller");
const app = (0, express_1.default)();
const webAppUrl = 'https://bants.netlify.app';
function main() {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use('/api', order_controller_1.orderRouter);
    app.listen(4200, () => {
        console.log('Server run');
    });
}
main();
(0, botLaunch_1.botLaunch)();
