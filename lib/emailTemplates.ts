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
                    © 2025 SiteStack Technologies, Inc. All rights reserved.
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
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 70%, #6941c6 0%, transparent 50%);
            opacity: 0.3;
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
                 .beta-badge {
             display: inline-block;
             background: linear-gradient(135deg, #374151, #1f2937);
             color: white;
             padding: 8px 16px;
             border-radius: 20px;
             font-size: 12px;
             font-weight: 600;
             text-transform: uppercase;
             letter-spacing: 0.5px;
             margin-bottom: 20px;
         }
        
                 .logo {
             width: 120px;
             height: auto;
             margin-bottom: 20px;
         }
        
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            color: #d1d5db;
            margin: 10px 0 0;
            font-size: 18px;
            font-weight: 400;
        }
        
        .content {
            padding: 40px;
        }
        
        .welcome-text {
            font-size: 20px;
            color: #181d27;
            margin-bottom: 24px;
            font-weight: 600;
        }
        
        .description {
            font-size: 16px;
            color: #535862;
            margin-bottom: 32px;
            line-height: 1.7;
        }
        
                 .cta-button {
             display: inline-block;
             background: linear-gradient(135deg, #374151, #1f2937);
             color: white;
             text-decoration: none;
             padding: 16px 32px;
             border-radius: 8px;
             font-weight: 600;
             font-size: 16px;
             text-align: center;
             margin: 24px 0;
             transition: transform 0.2s, box-shadow 0.2s;
         }
         
         .cta-button:hover {
             transform: translateY(-2px);
             box-shadow: 0 8px 25px rgba(55, 65, 81, 0.3);
         }
        
        .next-steps {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            padding: 32px;
            margin: 32px 0;
            border: 1px solid #e9ecef;
        }
        
        .next-steps h3 {
            color: #181d27;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
            display: flex;
            align-items: center;
        }
        
        .rocket-icon {
            margin-right: 8px;
            font-size: 24px;
        }
        
        .step-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .step-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            font-size: 15px;
            color: #535862;
        }
        
        .step-item:last-child {
            margin-bottom: 0;
        }
        
                 .step-number {
             width: 24px;
             height: 24px;
             background-color: #0c0e12;
             color: white;
             border-radius: 50%;
             margin-right: 12px;
             margin-top: 2px;
             flex-shrink: 0;
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 12px;
             font-weight: 600;
         }
        
                 .exclusive-features {
             background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
             border-radius: 12px;
             padding: 32px;
             margin: 32px 0;
             color: white;
         }
        
        .exclusive-features h3 {
            color: white;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 20px;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 16px;
            backdrop-filter: blur(10px);
        }
        
        .feature-card h4 {
            color: white;
            font-size: 14px;
            font-weight: 600;
            margin: 0 0 8px;
        }
        
        .feature-card p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 13px;
            margin: 0;
            line-height: 1.4;
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
             
             .next-steps,
             .exclusive-features {
                 padding: 24px;
             }
             
             .header h1 {
                 font-size: 28px;
             }
             
             .feature-grid {
                 grid-template-columns: 1fr;
             }
         }
    </style>
</head>
<body>
    <div style="padding: 40px 20px;">
        <div class="container">
            <!-- Header -->
            <div class="header">
                                 <div class="header-content">
                     <div class="beta-badge">Beta Access</div>
                     <img src="https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_logo.png" alt="Trazo Logo" class="logo" />
                     <h1>You're In! 🎉</h1>
                     <p>Welcome to the Trazo Beta Program</p>
                 </div>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="welcome-text">
                    Congratulations, Design Pioneer! 
                </div>
                
                <div class="description">
                    You've been selected to join the <strong>exclusive Trazo Beta Program</strong>! You're now among the first architects and interior designers to experience the future of design collaboration.
                </div>
                
                <div class="description">
                    As a beta user, you'll have early access to groundbreaking features and the opportunity to shape Trazo's development through your valuable feedback.
                </div>
                
                <!-- CTA Button -->
                <div style="text-align: center;">
                    <a href="#" class="cta-button">
                        🚀 Access Trazo Beta Dashboard
                    </a>
                </div>
                
                <!-- Next Steps -->
                <div class="next-steps">
                    <h3>
                        <span class="rocket-icon">🎯</span>
                        Your Next Steps
                    </h3>
                    <ul class="step-list">
                        <li class="step-item">
                            <div class="step-number">1</div>
                            <span><strong>Set up your account</strong> - Complete your profile and create your first project workspace</span>
                        </li>
                        <li class="step-item">
                            <div class="step-number">2</div>
                            <span><strong>Explore features</strong> - Try our unified canvas, real-time collaboration tools, and version control</span>
                        </li>
                        <li class="step-item">
                            <div class="step-number">3</div>
                            <span><strong>Share feedback</strong> - Help us improve by sharing your experience and suggestions</span>
                        </li>
                        <li class="step-item">
                            <div class="step-number">4</div>
                            <span><strong>Join the community</strong> - Connect with other beta users in our exclusive Slack channel</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Exclusive Features -->
                <div class="exclusive-features">
                    <h3>🌟 Exclusive Beta Features</h3>
                    <div class="feature-grid">
                        <div class="feature-card">
                            <h4>Early Access</h4>
                            <p>Be first to try new features before public release</p>
                        </div>
                        <div class="feature-card">
                            <h4>Direct Input</h4>
                            <p>Your feedback directly shapes product development</p>
                        </div>
                        <div class="feature-card">
                            <h4>Beta Community</h4>
                            <p>Connect with fellow design professionals</p>
                        </div>
                        <div class="feature-card">
                            <h4>Priority Support</h4>
                            <p>Get dedicated support from our team</p>
                        </div>
                    </div>
                </div>
                
                <div style="color: #535862; font-size: 14px; background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 24px 0; text-align: center;">
                    <strong>Beta Access Email:</strong> ${userEmail}<br>
                    <strong>Access Level:</strong> Full Platform Access
                </div>
                
                                 <div class="description" style="text-align: center; margin-top: 32px;">
                     Questions? Reach out to our beta support team at <a href="mailto:beta@trazo.design" style="color: #0c0e12; text-decoration: none;"><strong>beta@trazo.design</strong></a>
                 </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-text">
                    Welcome to the future of design collaboration
                </div>
                <div class="footer-text">
                    © 2025 SiteStack Technologies, Inc. All rights reserved.
                </div>
                <div style="margin-top: 16px;">
                    <a href="#" class="footer-links">Beta Guidelines</a>
                    <a href="#" class="footer-links">Support</a>
                    <a href="#" class="footer-links">Privacy Policy</a>
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
             background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f3f4f6 100%);
             padding: 40px 40px 30px;
             text-align: center;
             border-bottom: 3px solid #0c0e12;
         }
        
                 .logo {
             width: 120px;
             height: auto;
             margin-bottom: 20px;
         }
        
                 .newsletter-badge {
             display: inline-block;
             background: linear-gradient(135deg, #374151, #1f2937);
             color: white;
             padding: 6px 12px;
             border-radius: 16px;
             font-size: 11px;
             font-weight: 600;
             text-transform: uppercase;
             letter-spacing: 0.5px;
             margin-bottom: 16px;
         }
        
        .header h1 {
            color: #181d27;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            color: #535862;
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
        
                 .newsletter-preview {
             background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
             border-radius: 12px;
             padding: 32px;
             margin: 32px 0;
             border-left: 4px solid #0c0e12;
         }
        
        .newsletter-preview h3 {
            color: #181d27;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px;
            display: flex;
            align-items: center;
        }
        
        .newsletter-icon {
            margin-right: 8px;
            font-size: 24px;
        }
        
        .content-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .content-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            font-size: 15px;
            color: #535862;
        }
        
        .content-item:last-child {
            margin-bottom: 0;
        }
        
                 .content-icon {
             width: 20px;
             height: 20px;
             background-color: #0c0e12;
             border-radius: 4px;
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
        
                 .frequency-info {
             background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
             border-radius: 12px;
             padding: 24px;
             margin: 32px 0;
             color: white;
             text-align: center;
         }
        
        .frequency-info h4 {
            color: white;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 8px;
        }
        
        .frequency-info p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin: 0;
        }
        
        .preferences-section {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 24px;
            margin: 32px 0;
            text-align: center;
        }
        
        .preferences-section h4 {
            color: #181d27;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 16px;
        }
        
        .preferences-links {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
        }
        
                 .preference-link {
             color: #0c0e12;
             text-decoration: none;
             font-size: 14px;
             font-weight: 500;
             padding: 8px 16px;
             border: 1px solid #0c0e12;
             border-radius: 6px;
             transition: all 0.2s;
         }
         
         .preference-link:hover {
             background-color: #0c0e12;
             color: white;
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
             
             .newsletter-preview,
             .preferences-section {
                 padding: 24px;
             }
             
             .header h1 {
                 font-size: 24px;
             }
             
             .preferences-links {
                 flex-direction: column;
                 align-items: center;
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
                 <div class="newsletter-badge">Newsletter</div>
                 <h1>You're Subscribed! 📰</h1>
                 <p>Welcome to the Trazo Newsletter</p>
             </div>
            
            <!-- Content -->
            <div class="content">
                <div class="welcome-text">
                    Thank you for subscribing! 🎉
                </div>
                
                <div class="description">
                    You're now part of our design community! We'll keep you informed about the latest developments in design collaboration, industry insights, and exclusive updates about Trazo.
                </div>
                
                <!-- Newsletter Preview -->
                <div class="newsletter-preview">
                    <h3>
                        <span class="newsletter-icon">📧</span>
                        What to Expect
                    </h3>
                    <ul class="content-list">
                        <li class="content-item">
                            <div class="content-icon">
                                <svg class="checkmark" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <span><strong>Product Updates</strong> - Be first to know about new Trazo features and releases</span>
                        </li>
                        <li class="content-item">
                            <div class="content-icon">
                                <svg class="checkmark" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <span><strong>Industry Insights</strong> - Trends and best practices in architecture and interior design</span>
                        </li>
                        <li class="content-item">
                            <div class="content-icon">
                                <svg class="checkmark" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <span><strong>Design Tips</strong> - Collaboration strategies and workflow optimization</span>
                        </li>
                        <li class="content-item">
                            <div class="content-icon">
                                <svg class="checkmark" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <span><strong>Exclusive Content</strong> - Behind-the-scenes updates and early access opportunities</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Frequency Info -->
                <div class="frequency-info">
                    <h4>📅 Monthly Delivery</h4>
                    <p>We respect your inbox. Our newsletter is delivered once a month with carefully curated, valuable content.</p>
                </div>
                
                <!-- Preferences -->
                <div class="preferences-section">
                    <h4>Manage Your Preferences</h4>
                    <div class="preferences-links">
                        <a href="#" class="preference-link">📝 Update Preferences</a>
                        <a href="#" class="preference-link">👥 Refer a Friend</a>
                        <a href="#" class="preference-link">📋 View Archive</a>
                    </div>
                </div>
                
                <div style="color: #535862; font-size: 14px; background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 24px 0; text-align: center;">
                    <strong>Subscription Email:</strong> ${userEmail}<br>
                    <strong>Frequency:</strong> Monthly Newsletter
                </div>
                
                                 <div class="description" style="text-align: center; margin-top: 32px;">
                     Questions about your subscription? Contact us at <a href="mailto:newsletter@trazo.design" style="color: #0c0e12; text-decoration: none;"><strong>newsletter@trazo.design</strong></a>
                 </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-text">
                    Thank you for joining our design community
                </div>
                <div class="footer-text">
                    © 2025 SiteStack Technologies, Inc. All rights reserved.
                </div>
                <div style="margin-top: 16px;">
                    <a href="#" class="footer-links">Preferences</a>
                    <a href="#" class="footer-links">Unsubscribe</a>
                    <a href="#" class="footer-links">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
};
