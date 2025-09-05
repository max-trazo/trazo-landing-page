// Demo script to test email templates
// This file can be used to preview the email templates

import { EmailTemplates } from './emailTemplates';

// Demo function to generate sample emails
export function generateSampleEmails() {
    const sampleEmail = "demo@trazo.design";
    
    return {
        waitlistEmail: EmailTemplates.waitlistWelcome(sampleEmail),
        betaEmail: EmailTemplates.betaWelcome(sampleEmail),
        newsletterEmail: EmailTemplates.newsletterConfirmation(sampleEmail)
    };
}

// Test function to validate templates
export function testEmailTemplates() {
    const samples = generateSampleEmails();
    
    console.log("✅ Waitlist Email Template Generated");
    console.log("✅ Beta Program Email Template Generated");  
    console.log("✅ Newsletter Email Template Generated");
    
    return {
        success: true,
        templates: Object.keys(samples),
        logoUrl: "https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_logo.png"
    };
}
