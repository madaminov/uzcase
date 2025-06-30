require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('EMAIL_USER и/или EMAIL_PASS не заданы в .env');
  process.exit(1);
}

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  app.use(
    cors({
      origin: 'https://uzcase.tech',
      methods: ['POST'],
      allowedHeaders: ['Content-Type'],
    })
  );
}

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: 'madaminov.d@gmail.com,o.o.kolesnikov@gmail.com,madaminov.d@yandex.ru',
    replyTo: email,
    subject: 'New message from site',
    html: `
      <h3>Контактные данные</h3>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Сообщение:</strong><br>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Письмо отправлено' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res
      .status(500)
      .json({ success: false, message: 'Ошибка при отправке письма' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
