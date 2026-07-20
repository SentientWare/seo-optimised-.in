export const getAdminEmailTemplate = (data: {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  agreeToPrivacy?: boolean;
  message: string;
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; padding: 30px; background-color: #ffffff; border-bottom: 1px solid #f3f4f6; }
    .header img { height: 32px; }
    .hero { background-color: #001A35; color: #ffffff; padding: 40px 30px; text-align: center; }
    .hero h1 { margin: 0 0 10px; font-size: 24px; font-weight: 700; }
    .hero p { margin: 0; font-size: 16px; color: rgba(255,255,255,0.8); }
    .content { padding: 40px 30px; }
    .card { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 24px; }
    .card-title { font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 20px; text-align: center; }
    .table { width: 100%; border-collapse: collapse; }
    .table td { padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; }
    .table td:first-child { color: #6b7280; width: 40%; }
    .table td:last-child { font-weight: 500; color: #111827; }
    .table tr:last-child td { border-bottom: none; }
    .message-box { background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap; }
    .footer { text-align: center; padding: 30px; background-color: #ffffff; color: #9ca3af; font-size: 12px; border-top: 1px solid #f3f4f6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://career.sentientware.in/logo.png" alt="SentientWare" />
    </div>
    <div class="hero">
      <h1>New Website Inquiry 🔔</h1>
      <p>A new lead has submitted a contact form.</p>
    </div>
    <div class="content">
      <div class="card">
        <h2 class="card-title">Lead Details</h2>
        <table class="table">
          <tr><td>Name</td><td>${data.fullName}</td></tr>
          <tr><td>Email</td><td><a href="mailto:${data.email}" style="color: #dc2626;">${data.email}</a></td></tr>
          <tr><td>Company</td><td>${data.company || 'N/A'}</td></tr>
          <tr><td>Phone</td><td>${data.phone || 'N/A'}</td></tr>
          <tr><td>Job Title</td><td>${data.jobTitle || 'N/A'}</td></tr>
          <tr><td>Privacy Consent</td><td>${data.agreeToPrivacy !== undefined ? (data.agreeToPrivacy ? 'Yes' : 'No') : 'N/A'}</td></tr>
        </table>
      </div>
      <h2 style="font-size: 16px; margin-bottom: 10px; font-weight: 600;">Message Content</h2>
      <div class="message-box">${data.message}</div>
    </div>
    <div class="footer">
      Internal Notification • SentientWare Administration
    </div>
  </div>
</body>
</html>
  `;
};

export const getUserEmailTemplate = (data: { fullName: string; email: string }) => {
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
    .header { text-align: center; padding: 30px; background-color: #ffffff; }
    .header img { height: 32px; }
    .hero { background-color: #dc2626; color: #ffffff; padding: 50px 40px; text-align: center; border-radius: 16px; margin: 0 10px; }
    .hero h1 { margin: 0 0 15px; font-size: 32px; font-weight: 800; line-height: 1.2; }
    .hero p { margin: 0 0 25px; font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.5; }
    .btn { display: inline-block; background-color: #ffffff; color: #dc2626; text-decoration: none; font-weight: 600; padding: 12px 24px; border-radius: 8px; font-size: 15px; }
    .features { display: table; width: 100%; padding: 30px 20px; box-sizing: border-box; }
    .feature { display: table-cell; width: 33.33%; text-align: center; padding: 0 10px; }
    .feature-icon { font-size: 24px; margin-bottom: 10px; color: #dc2626; }
    .feature-title { font-weight: 600; font-size: 14px; margin-bottom: 5px; }
    .feature-desc { font-size: 12px; color: #6b7280; line-height: 1.4; }
    .details-card { margin: 20px; padding: 30px; border: 1px solid #f3f4f6; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); display: table; width: calc(100% - 40px); box-sizing: border-box; }
    .details-left { display: table-cell; width: 30%; vertical-align: middle; text-align: center; }
    .details-avatar { width: 80px; height: 80px; background-color: #fee2e2; border-radius: 50%; display: inline-block; line-height: 80px; font-size: 32px; color: #dc2626; font-weight: bold; }
    .details-right { display: table-cell; width: 70%; vertical-align: middle; padding-left: 30px; }
    .details-title { font-size: 16px; font-weight: 600; margin: 0 0 15px; text-align: center; }
    .table { width: 100%; border-collapse: collapse; }
    .table td { padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
    .table td:first-child { color: #6b7280; width: 40%; }
    .table td:last-child { font-weight: 500; color: #111827; }
    .table tr:last-child td { border-bottom: none; }
    .help-section { background-color: #fef2f2; margin: 20px; padding: 25px; border-radius: 12px; text-align: center; }
    .help-icon { font-size: 24px; color: #dc2626; margin-bottom: 10px; background: #fee2e2; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; display: inline-block; }
    .help-title { font-weight: 600; font-size: 16px; margin: 0 0 5px; color: #111827; }
    .help-desc { font-size: 13px; color: #6b7280; margin: 0 0 5px; }
    .help-link { color: #dc2626; text-decoration: none; font-size: 13px; font-weight: 500; }
    .footer { text-align: center; padding: 40px 20px; background-color: #ffffff; color: #6b7280; font-size: 12px; }
    .social-links { margin-bottom: 20px; }
    .social-links a { display: inline-block; margin: 0 8px; color: #dc2626; text-decoration: none; border: 1px solid #fee2e2; width: 32px; height: 32px; line-height: 32px; border-radius: 50%; font-size: 14px; font-weight: bold; }
    .heart { color: #dc2626; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://career.sentientware.in/logo.png" alt="SentientWare" />
    </div>
    <div class="hero">
      <h1>Welcome to<br>SentientWare 🎉</h1>
      <p>We're excited to connect with you. We have received your inquiry and our experts are ready to explore the future of smart automation with you.</p>
      <a href="https://sentientware.in" class="btn">Explore More →</a>
    </div>
    
    <div class="features">
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Fast</div>
        <div class="feature-desc">Optimized for speed and performance.</div>
      </div>
      <div class="feature">
        <div class="feature-icon">🛡️</div>
        <div class="feature-title">Secure</div>
        <div class="feature-desc">Enterprise-grade security to protect data.</div>
      </div>
      <div class="feature">
        <div class="feature-icon">🤖</div>
        <div class="feature-title">AI Powered</div>
        <div class="feature-desc">Smart automation for smarter workflows.</div>
      </div>
    </div>

    <div class="details-card">
      <div class="details-title">Your Inquiry Details</div>
      <div class="details-left">
        <div class="details-avatar">${data.fullName.charAt(0).toUpperCase()}</div>
      </div>
      <div class="details-right">
        <table class="table">
          <tr><td>👤 Name</td><td>${data.fullName}</td></tr>
          <tr><td>✉️ Email</td><td style="color: #dc2626;">${data.email}</td></tr>
          <tr><td>📅 Date</td><td>${date}</td></tr>
        </table>
      </div>
    </div>

    <div class="help-section">
      <div class="help-icon">?</div>
      <h3 class="help-title">Need Help?</h3>
      <p class="help-desc">Our support team is always here for you.</p>
      <a href="mailto:info@sentientware.in" class="help-link">info@sentientware.in</a>
    </div>

    <div class="footer">
      <div class="social-links">
        <a href="#">in</a>
        <a href="#">𝕏</a>
        <a href="#">gh</a>
      </div>
      <p>Made with <span class="heart">❤</span> by SentientWare Team</p>
      <p>© ${new Date().getFullYear()} SentientWare Technologies Pvt. Ltd. All rights reserved.<br>Bengaluru, India</p>
    </div>
  </div>
</body>
</html>
  `;
};
