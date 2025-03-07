/* eslint-disable no-undef */
// import dotenv from 'dotenv';
// import express from 'express';
// import bodyParser from 'body-parser';
// import axios from 'axios';
// import cors from 'cors';

// dotenv.config();

// const app = express();
// const PORT = 3002;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/send', async (req, res) => {
//     try {
//         const { name, email, message } = req.body;
//         const text = `📩 Новое сообщение с сайта:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📝 Сообщение: ${message}`;

//         // eslint-disable-next-line no-undef
//         const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
//         const response = await axios.post(url, {
//             // eslint-disable-next-line no-undef
//             chat_id: process.env.TELEGRAM_CHAT_ID,
//             text: text,
//             parse_mode: 'HTML'
//         });

//         if (response.data.ok) {
//             res.json({ success: true, message: 'Сообщение отправлено!' });
//         } else {
//             res.status(500).json({ success: false, message: 'Ошибка отправки!' });
//         }
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Ошибка сервера!', error: error.message });
//     }
// });

// app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

// Настройка nodemailer с универсальной SMTP-конфигурацией
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true для портов, использующих SSL (например, 465)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Эндпоинт для отправки email
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const emailText = `📩 Новое сообщение с сайта:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📝 Сообщение: ${message}`;

        const mailOptions = {
            from: `"Сайт" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: 'Новое сообщение с сайта',
            text: emailText,
            // Если требуется HTML-версия письма, можно добавить поле html:
            // html: `<p>${emailText.replace(/\n/g, '<br>')}</p>`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email успешно отправлен:', info.response);

        res.json({ success: true, message: 'Сообщение отправлено!' });
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        res.status(500).json({ success: false, message: 'Ошибка отправки email', error: error.message });
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
