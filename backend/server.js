import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("HELLO WORLD BACKEND");
});

app.get("/api/products/test", (req, res) => {
    res.send("TEST ROUTE WORKING");
});

app.get("/api/products", (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                id: 1,
                name: "Product 1",
                price: 10.99
            },
            {
                id: 2,
                name: "Product 2",
                price: 20.99
            },
            {
                id: 3,
                name: "Product 3",
                price: 30.99
            }
        ]
    });
});

app.use((req, res) => {
    res.status(404).send("NOT FOUND");
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});