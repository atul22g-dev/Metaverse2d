import express from "express";
import { router } from "./routes/v1";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use("/api/v1", router);

app.listen(process.env.PORT || 3000);
