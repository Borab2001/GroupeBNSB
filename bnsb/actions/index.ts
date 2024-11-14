"use server";

import { EmailSchema } from "@/schema";
import { z } from "zod";
import { Resend } from "resend";
import BNSBContactEmail from "@/emails/page";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (values: z.infer<typeof EmailSchema>) => {
    try {
        const formattedMessage = values.message.replace(/\n/g, "<br>");
        
        const { data, error } = await resend.emails.send({
            from: 'BNSB Website <onboarding@resend.dev>',
            to: ['dianeanhduong@gmail.com'],
            subject: 'New Contact Submission',
            replyTo: values.email,
            react: React.createElement(BNSBContactEmail, {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                subject: values.subject,
                message: formattedMessage,
            }),
        });
        
        if (error) {
            console.error(error);
            throw new Error("Error while sending email");
        }

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error while sending email");
    }
};