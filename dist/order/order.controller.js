"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_service_1 = require("./order.service");
const router = (0, express_1.Router)();
const orderService = new order_service_1.OrderService();
router.post('/order', (req, res) => {
    const orderToSeller = orderService.orderToSeller(req.body);
    res.status(200);
    const orderToClient = orderService.orderToClient(req.body);
    res.status(200);
});
exports.orderRouter = router;
