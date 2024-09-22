import { Router } from "express";
import { OrderService } from "./order.service";

const router = Router()

const orderService = new OrderService()

router.post('/order', (req, res) => {
    const orderToSeller = orderService.orderToSeller(req.body)
    res.status(200)

    const orderToClient = orderService.orderToClient(req.body)
    res.status(200)
})

export const orderRouter = router