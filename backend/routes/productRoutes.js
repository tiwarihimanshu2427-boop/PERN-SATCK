import express from "express"

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("test route")
})

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { id: 1, name: "Product 1", price: 10.99 },
            { id: 2, name: "Product 2", price: 20.99 },
            { id: 3, name: "Product 3", price: 30.99 },
        ],
    })
})

export default router
