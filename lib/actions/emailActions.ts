"use server"

import resend from "@/server/resend";
import { EmailTemplates } from "@/lib/emailTemplates";

// Send waitlist welcome email
export async function sendWaitlistEmail(email: string) {
    try {
        const response = await resend.emails.send({
            from: 'max@trazo.design',
            to: email,
            subject: 'Welcome to Trazo Waitlist - You\'re In! 🎉',
            html: EmailTemplates.waitlistWelcome(email)
        })
        return response;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

// Send beta program welcome email
export async function sendBetaEmail(email: string) {
    try {
        const response = await resend.emails.send({
            from: 'max@trazo.design',
            to: email,
            subject: 'Welcome to Trazo Beta Program - Exclusive Access Granted! 🚀',
            html: EmailTemplates.betaWelcome(email)
        })
        return response;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

// Send newsletter subscription confirmation email
export async function sendNewsletterEmail(email: string) {
    try {
        const response = await resend.emails.send({
            from: 'max@trazo.design',
            to: email,
            subject: 'Trazo Newsletter - Subscription Confirmed! 📰',
            html: EmailTemplates.newsletterConfirmation(email)
        })
        return response;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

// Legacy function for backward compatibility
export async function sendEmail(email: string) {
    return sendWaitlistEmail(email);
}