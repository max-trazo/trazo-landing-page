// Email templates for Trazo - Design Collaboration Platform
// All templates are responsive and follow Trazo branding

export const EmailTemplates = {
  
  // Waitlist Welcome Email
  waitlistWelcome: (userEmail: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Trazo Waitlist</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
                 .header {
             background: linear-gradient(135deg, #0c0e12 0%, #181d27 100%);
             padding: 40px 40px 30px;
             text-align: center;
         }
         
         .logo {
             width: 120px;
             height: auto;
             margin-bottom: 20px;
         }
        
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            color: #e9d5ff;
            margin: 10px 0 0;
            font-size: 16px;
            font-weight: 400;
        }
        
        .content {
            padding: 40px;
        }
        
        .welcome-text {
            font-size: 18px;
            color: #181d27;
            margin-bottom: 24px;
            font-weight: 500;
        }
        
        .description {
            font-size: 16px;
            color: #535862;
            margin-bottom: 32px;
            line-height: 1.7;
        }
        
        .features {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 32px;
            margin: 32px 0;
        }
        
        .features h3 {
            color: #181d27;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
        }
        
        .feature-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            font-size: 15px;
            color: #535862;
        }
        
        .feature-item:last-child {
            margin-bottom: 0;
        }
        
                 .feature-icon {
             width: 20px;
             height: 20px;
             background-color: #0c0e12;
             border-radius: 50%;
             margin-right: 12px;
             margin-top: 2px;
             flex-shrink: 0;
             display: flex;
             align-items: center;
             justify-content: center;
         }
        
        .checkmark {
            width: 12px;
            height: 12px;
            color: white;
        }
        
        .cta-section {
            text-align: center;
            margin: 32px 0;
        }
        
        .cta-text {
            font-size: 16px;
            color: #535862;
            margin-bottom: 24px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin: 24px 0;
        }
        
        .social-link {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #f4ebff;
            border-radius: 8px;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
        }
        
        .social-link:hover {
            background-color: #6941c6;
        }
        
        .footer {
            background-color: #0c0e12;
            padding: 40px;
            text-align: center;
        }
        
        .footer-text {
            color: #94979c;
            font-size: 14px;
            margin: 0 0 16px;
        }
        
        .footer-links {
            color: #535862;
            font-size: 14px;
            text-decoration: none;
            margin: 0 8px;
        }
        
                 .footer-links:hover {
             color: #0c0e12;
         }
         
         @media (max-width: 640px) {
             .container {
                 margin: 0 16px;
             }
             
             .header,
             .content {
                 padding: 32px 24px;
             }
             
             .features {
                 padding: 24px;
             }
             
             .header h1 {
                 font-size: 24px;
             }
         }
    </style>
</head>
<body>
    <div style="padding: 40px 20px;">
        <div class="container">
                         <!-- Header -->
             <div class="header">
                 <img src="https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_logo.png" alt="Trazo Logo" class="logo" />
                 <h1>Welcome to the Future!</h1>
                 <p>You're now on the Trazo waitlist</p>
             </div>
            
            <!-- Content -->
            <div class="content">
                <div class="welcome-text">
                    Hi there! 👋
                </div>
                
                <div class="description">
                    Thank you for joining the Trazo waitlist! We're thrilled to have you as part of our community of forward-thinking architects and interior designers.
                </div>
                
                <div class="description">
                    You're among the first to discover <strong>Trazo</strong> - the revolutionary design collaboration platform that brings together versions, feedback, and tasks in one unified canvas. No more juggling between tools or losing track of revisions!
                </div>
                    
                <!-- CTA Section -->
                <div class="cta-section">
                    <div class="cta-text">
                        We'll keep you updated on our progress and let you know as soon as Trazo is ready for you to experience.
                    </div>
                    
                    <div style="color: #535862; font-size: 14px; background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 24px 0;">
                        <strong>Your email:</strong> ${userEmail}
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-text">
                    Thank you for your interest in Trazo
                </div>
                <div class="footer-text">
                    © 2025 Trazo, Inc. All rights reserved.
                </div>
                <div style="margin-top: 16px;">
                    <a href="#" class="footer-links">Privacy Policy</a>
                    <a href="#" class="footer-links">Unsubscribe</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,

  // Beta Program Welcome Email
  betaWelcome: (userEmail: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Trazo Beta Program</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .header {
            background: linear-gradient(135deg, #0c0e12 0%, #181d27 100%);
            padding: 40px 40px 30px;
            text-align: center;
        }
        
        .logo {
            width: 120px;
            height: auto;
            margin-bottom: 20px;
        }
        
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            color: #e9d5ff;
            margin: 10px 0 0;
            font-size: 16px;
            font-weight: 400;
        }
        
        .content {
            padding: 40px;
        }
        
        .welcome-text {
            font-size: 18px;
            color: #181d27;
            margin-bottom: 24px;
            font-weight: 500;
        }
        
        .description {
            font-size: 16px;
            color: #535862;
            margin-bottom: 32px;
            line-height: 1.7;
        }
        
        .features {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 32px;
            margin: 32px 0;
        }
        
        .features h3 {
            color: #181d27;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
        }
        
        .feature-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            font-size: 15px;
            color: #535862;
        }
        
        .feature-item:last-child {
            margin-bottom: 0;
        }
        
        .feature-icon {
            width: 20px;
            height: 20px;
            background-color: #0c0e12;
            border-radius: 50%;
            margin-right: 12px;
            margin-top: 2px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .checkmark {
            width: 12px;
            height: 12px;
            color: white;
        }
        
        .cta-section {
            text-align: center;
            margin: 32px 0;
        }
        
        .cta-text {
            font-size: 16px;
            color: #535862;
            margin-bottom: 24px;
        }
        
        .footer {
            background-color: #0c0e12;
            padding: 40px;
            text-align: center;
        }
        
        .footer-text {
            color: #94979c;
            font-size: 14px;
            margin: 0 0 16px;
        }
        
        .footer-links {
            color: #535862;
            font-size: 14px;
            text-decoration: none;
            margin: 0 8px;
        }
        
        .footer-links:hover {
            color: #0c0e12;
        }
        
        @media (max-width: 640px) {
            .container {
                margin: 0 16px;
            }
            
            .header,
            .content {
                padding: 32px 24px;
            }
            
            .features {
                padding: 24px;
            }
            
            .header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div style="padding: 40px 20px;">
        <div class="container">
            <!-- Header -->
            <div class="header">
                <img src="https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_logo.png" alt="Trazo Logo" class="logo" />
                <h1>Welcome to Beta Program!</h1>
                <p>You're now part of Trazo Beta</p>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="welcome-text">
                    Hi there! 👋
                </div>
                
                <div class="description">
                    Thank you for joining the Trazo Beta Program! We're thrilled to have you as part of our exclusive community of forward-thinking architects and interior designers.
                </div>
                
                <div class="description">
                    You're among the first to experience <strong>Trazo</strong> - the revolutionary design collaboration platform that brings together versions, feedback, and tasks in one unified canvas. As a beta user, you'll help shape our product!
                </div>
                
                
                
                <!-- CTA Section -->
                <div class="cta-section">
                    <div class="cta-text">
                        We'll send you your login credentials and setup instructions soon. Get ready to experience the future of design collaboration!
                    </div>
                    
                    <div style="color: #535862; font-size: 14px; background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 24px 0;">
                        <strong>Your email:</strong> ${userEmail}
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-text">
                    Thank you for your interest in Trazo
                </div>
                <div class="footer-text">
                    © 2025 Trazo, Inc. All rights reserved.
                </div>
                <div style="margin-top: 16px;">
                    <a href="#" class="footer-links">Privacy Policy</a>
                    <a href="#" class="footer-links">Unsubscribe</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,

  // Newsletter Subscription Confirmation
  newsletterConfirmation: (userEmail: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Trazo Newsletter</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .header {
            background: linear-gradient(135deg, #0c0e12 0%, #181d27 100%);
            padding: 40px 40px 30px;
            text-align: center;
        }
        
        .logo {
            width: 120px;
            height: auto;
            margin-bottom: 20px;
        }
        
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            color: #e9d5ff;
            margin: 10px 0 0;
            font-size: 16px;
            font-weight: 400;
        }
        
        .content {
            padding: 40px;
        }
        
        .welcome-text {
            font-size: 18px;
            color: #181d27;
            margin-bottom: 24px;
            font-weight: 500;
        }
        
        .description {
            font-size: 16px;
            color: #535862;
            margin-bottom: 32px;
            line-height: 1.7;
        }
        
        .features {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 32px;
            margin: 32px 0;
        }
        
        .features h3 {
            color: #181d27;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
        }
        
        .feature-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            font-size: 15px;
            color: #535862;
        }
        
        .feature-item:last-child {
            margin-bottom: 0;
        }
        
        .feature-icon {
            width: 20px;
            height: 20px;
            background-color: #0c0e12;
            border-radius: 50%;
            margin-right: 12px;
            margin-top: 2px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .checkmark {
            width: 12px;
            height: 12px;
            color: white;
        }
        
        .cta-section {
            text-align: center;
            margin: 32px 0;
        }
        
        .cta-text {
            font-size: 16px;
            color: #535862;
            margin-bottom: 24px;
        }
        
        .footer {
            background-color: #0c0e12;
            padding: 40px;
            text-align: center;
        }
        
        .footer-text {
            color: #94979c;
            font-size: 14px;
            margin: 0 0 16px;
        }
        
        .footer-links {
            color: #535862;
            font-size: 14px;
            text-decoration: none;
            margin: 0 8px;
        }
        
        .footer-links:hover {
            color: #0c0e12;
        }
        
        @media (max-width: 640px) {
            .container {
                margin: 0 16px;
            }
            
            .header,
            .content {
                padding: 32px 24px;
            }
            
            .features {
                padding: 24px;
            }
            
            .header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div style="padding: 40px 20px;">
        <div class="container">
            <!-- Header -->
            <div class="header">
                <img src="https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_logo.png" alt="Trazo Logo" class="logo" />
                <h1>Welcome to Newsletter!</h1>
                <p>You're subscribed to Trazo updates</p>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="welcome-text">
                    Hi there! 👋
                </div>
                
                <div class="description">
                    Thank you for subscribing to the Trazo Newsletter! We're thrilled to have you as part of our community of forward-thinking architects and interior designers.
                </div>
                
                <div class="description">
                    You'll receive monthly updates about <strong>Trazo</strong> - the revolutionary design collaboration platform that brings together versions, feedback, and tasks in one unified canvas. Stay in the loop with the latest features and insights!
                </div>

                
                <!-- CTA Section -->
                <div class="cta-section">
                    <div class="cta-text">
                        We'll send you our monthly newsletter with valuable content. You can unsubscribe at any time.
                    </div>
                    
                    <div style="color: #535862; font-size: 14px; background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 24px 0;">
                        <strong>Your email:</strong> ${userEmail}
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-text">
                    Thank you for your interest in Trazo
                </div>
                <div class="footer-text">
                    © 2025 Trazo, Inc. All rights reserved.
                </div>
                <div style="margin-top: 16px;">
                    <a href="#" class="footer-links">Privacy Policy</a>
                    <a href="#" class="footer-links">Unsubscribe</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
};
