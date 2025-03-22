/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';
import Mailjet from 'node-mailjet';

// 1. Человек регается на Mailjet, создает API_KEY и SECRET_KEY
// 2. Мы пишем это в .env

dotenv.config();

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('✅ Сервер работает!');
});

app.post('/send/telegram', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Отсутствуют данные' });
        }

        const text = `📩 Новое сообщение с сайта:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📝 Сообщение: ${message}`;
        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        const telegramResponse = await axios.post(url, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        });

        if (telegramResponse.data.ok) {
            res.json({ success: true, message: 'Сообщение отправлено в Telegram!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка отправки в Telegram!' });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '❌ Ошибка сервера (Telegram)!',
            error: error.message
        });
    }
});

app.post('/send/mailjet', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Отсутствуют данные' });
        }

        const mailjet = new Mailjet.Client({
            apiKey: process.env.MAILJET_API_KEY,
            apiSecret: process.env.MAILJET_SECRET_KEY
        });

        const request = mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'alexandrkoverza@gmail.com',
                        Name: name
                    },
                    To: [
                        {
                            Email: email,
                            Name: name
                        }
                    ],
                    Subject: 'Новое сообщение с сайта (Mailjet)',
                    TextPart: message
                }
            ]
        });

        request
            .then(result => {
                console.log('Письмо отправлено успешно:', result.body);
                res.json({ success: true, message: 'Письмо отправлено через Mailjet!' });
            })
            .catch(err => {
                console.error('Ошибка отправки письма:', err.statusCode, err.message);
                res.status(500).json({
                    success: false,
                    message: 'Ошибка отправки письма (Mailjet)!',
                    error: err.message
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '❌ Ошибка сервера (Mailjet)!',
            error: error.message
        });
    }
});

app.listen(PORT, () => console.log(`✅ Сервер запущен на http://localhost:${PORT}`));
