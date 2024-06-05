import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface EmailRequest extends NextApiRequest {
    body: {
        name: string
        email: string
        subject: string
        message: string
    }
}

const handler = async (req: EmailRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, // Add a RECEIVER_EMAIL in your .env.local
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }

        try {
            await transporter.sendMail(mailOptions)
            res.status(200).json({ success: true })
        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, error: "An error occured" })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}

export default handler
