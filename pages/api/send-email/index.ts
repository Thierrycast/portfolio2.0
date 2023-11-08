import nodemailer from 'nodemailer';
import {NextApiRequest, NextApiResponse} from 'next'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  export default async function SendMail(req: NextApiRequest, res: NextApiResponse) {

    
    const {method, body} = req

     const mailOptions = {
      from: `${body.nome} <${body.email}>`,
      to: process.env.AUTH_EMAIL,
      subject: `${body.nome} <${body.email}>`,
      html: `
        <h1>Mensagem de ${body.nome}</h1>
        <br/>
        <p>${body.mensagem}</p>
        <br/>
        <span>${body.email}</span>
      `,
    };

    try {
      if(method !== 'POST') return res.status(500).json('error')
    
      await transporter.sendMail(mailOptions);

      return res.status(200).json({"mensagem":"Email enviado com sucesso"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({ "mensagem": error })
    }
}