import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => (
  <div className="terms-container">
    <header className="terms-header">
      <div className="logo-nav">
        <img src="/logo192.png" alt="logo" className="terms-logo" />
                <nav className="terms-nav">
                    <a href="#" className="nav-link">How it Works</a>
        </nav>
      </div>
      <div className="auth-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
    <div className="terms-hero">
      <h1>Terms and Conditions</h1>
    </div>
    <main className="terms-content">
      <h2>FLIX – Terms and Conditions</h2>
      <p><b>Effective Date:</b> [Insert Date]</p>
      <p>Welcome to FLIX! These Terms and Conditions outline the rules and regulations for using our mobile application and related services. By downloading, accessing, or using the FLIX app, you agree to comply with and be legally bound by the terms described below. If you do not agree to these terms, please do not use the app.</p>
      <hr />
      <h3>1. Use of the App</h3>
      <ul>
        <li>You are permitted to use the FLIX app for personal or group financial management and communication. You agree to:</li>
        <ul>
          <li>Use the app only for lawful purposes.</li>
          <li>Refrain from engaging in any activity that could damage, disable, or interfere with the app’s operation.</li>
          <li>Not exploit the app for any unauthorized commercial purposes.</li>
        </ul>
      </ul>
      <p>We reserve the right to restrict or revoke access to the app if we detect misuse or behavior that could compromise the integrity of the service or the experience of other users.</p>
      <hr />
      <h3>2. User Responsibilities</h3>
      <ul>
        <li>As a FLIX user, you are responsible for:</li>
        <ul>
          <li>Keeping your login credentials (username, password, etc.) secure.</li>
          <li>Ensuring that any personal or group-related data you provide is accurate and up to date.</li>
          <li>Immediately notifying us if you suspect any unauthorized access to your account.</li>
        </ul>
      </ul>
      <p>You acknowledge that you are solely responsible for any activity conducted through your account.</p>
      <hr />
      <h3>3. Expense Tracking</h3>
      <ul>
        <li>FLIX offers tools to manage and split expenses among family or friend groups. While we aim to make this process easy and accurate, you are solely responsible for:</li>
        <ul>
          <li>The correctness of all data you enter (e.g., expense amounts, participants).</li>
          <li>Ensuring fair and transparent tracking within your group.</li>
        </ul>
      </ul>
      <p>FLIX is not liable for any disputes, losses, or misunderstandings arising from incorrect or misleading entries.</p>
      <hr />
      <h3>4. Vehicle Management</h3>
      <ul>
        <li>Our platform may allow users to store and manage details related to vehicles (e.g., maintenance logs, ownership, fuel usage). Please note:</li>
        <ul>
          <li>FLIX does not verify the accuracy of vehicle information entered by users.</li>
          <li>You are fully responsible for ensuring the data you input is accurate and lawful.</li>
        </ul>
      </ul>
      <p>We are not liable for any damage, loss, or consequences stemming from incorrect vehicle data or mismanagement.</p>
      <hr />
      <h3>5. Group Chat Feature</h3>
      <ul>
        <li>FLIX includes a group chat feature to enhance communication between group members. To ensure a respectful and secure environment, you agree not to:</li>
        <ul>
          <li>Harass, abuse, or threaten others.</li>
          <li>Share illegal, harmful, or inappropriate content.</li>
          <li>Use the chat for spamming, advertising, or any unauthorized commercial purpose.</li>
        </ul>
      </ul>
      <p>Any violation of these rules may lead to immediate suspension or termination of your access.</p>
      <hr />
      <h3>6. Reports and Analytics</h3>
      <ul>
        <li>The app may generate visual reports and analytics (e.g., charts, summaries) based on your usage:</li>
        <ul>
          <li>These features are for informational purposes only.</li>
          <li>While we aim for accuracy, we do not guarantee the completeness or correctness of these reports.</li>
          <li>Users should independently verify important financial data before making decisions based on app analytics.</li>
        </ul>
      </ul>
      <hr />
      <h3>7. Data Privacy</h3>
      <ul>
        <li>We take your privacy seriously. Here’s how we handle your data:</li>
        <ul>
          <li>Your personal information is collected and used strictly in accordance with our Privacy Policy.</li>
          <li>We do not sell your personal data to any third parties.</li>
          <li>You can review how your data is collected, used, and stored by visiting our Privacy Policy page.</li>
        </ul>
      </ul>
      <p>If you have privacy concerns or requests (e.g., data deletion), you may contact us anytime at <a href="mailto:flixsolutionsprivatelimited@gmail.com">support@flixapp.com</a>.</p>
      <hr />
      <h3>8. Third-Party Services</h3>
      <ul>
        <li>Certain features of the FLIX app may depend on services provided by third-party platforms (e.g., Google for sign-in, cloud providers for data storage). We want to clarify that:</li>
        <ul>
          <li>FLIX does not control or assume responsibility for the content, accuracy, or operations of these third-party services.</li>
          <li>By using these features, you may also be subject to the terms and policies of the respective third parties.</li>
        </ul>
      </ul>
      <hr />
      <h3>9. Intellectual Property</h3>
      <ul>
        <li>All materials within the FLIX app — including logos, icons, software, and written content — are the property of FLIX or its licensors, and are protected by copyright and trademark laws.</li>
      </ul>
      <p>You may not:</p>
      <ul>
        <li>Copy, reproduce, or distribute app content without written permission.</li>
        <li>Use the FLIX name, logo, or design elements for any commercial purpose without authorization.</li>
      </ul>
      <hr />
      <h3>10. Termination of Access</h3>
      <ul>
        <li>We reserve the right to suspend or permanently terminate your access to the FLIX app at any time, with or without notice, if:</li>
        <ul>
          <li>You violate these Terms and Conditions.</li>
          <li>You engage in activity that is harmful, unlawful, or disruptive to the app or its users.</li>
        </ul>
      </ul>
      <p>Termination does not affect any obligations or rights accrued prior to termination.</p>
      <hr />
      <h3>11. Changes to These Terms</h3>
      <ul>
        <li>We may update or revise these Terms and Conditions from time to time. When changes are made:</li>
        <ul>
          <li>We will update the “Effective Date” at the top of this page.</li>
          <li>Continued use of the app after changes means you accept the updated terms.</li>
        </ul>
      </ul>
      <p>We recommend checking this page regularly to stay informed about any modifications.</p>
      <hr />
      <h3>12. Contact Us</h3>
      <p>For any questions, feedback, or legal inquiries related to these terms, please contact:</p>
      <p><b>FLIX Support Team</b><br />
      📧 Email: <a href="mailto:flixsolutionsprivatelimited@gmail.com">flixsolutionsprivatelimited@gmail.com</a></p>
    </main>
  </div>
);

export default TermsAndConditions;
