import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json()); 

app.post("/send", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const text = `📩 Новое сообщение с сайта:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📝 Сообщение: ${message}`;
        
        // eslint-disable-next-line no-undef
        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
        const response = await axios.post(url, {
            // eslint-disable-next-line no-undef
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: "HTML",
        });

        if (response.data.ok) {
            res.json({ success: true, message: "Сообщение отправлено!" });
        } else {
            res.status(500).json({ success: false, message: "Ошибка отправки!" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Ошибка сервера!", error: error.message });
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
