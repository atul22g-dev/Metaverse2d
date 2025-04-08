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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
});
