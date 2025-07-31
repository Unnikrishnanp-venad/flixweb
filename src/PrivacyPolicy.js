import React from 'react';
import './TermsAndConditions.css';

const PrivacyPolicy = () => (
  <div className="terms-container">
    <header className="terms-header">
      <div className="logo-nav">
        <img src="/logo192.png" alt="logo" className="terms-logo" />
        <nav className="terms-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/terms" className="nav-link">Terms</a>
        </nav>
      </div>
      <div className="auth-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
    <div className="terms-hero">
      <h1>Privacy Policy</h1>
    </div>
    <main className="terms-content">
      <h2>FLIX – Privacy Policy</h2>
      <p><b>Effective Date:</b> [Insert Date]</p>
      <p>
        This Privacy Policy explains how FLIX collects, uses, and protects your personal information when you use our mobile application and related services. By accessing or using the FLIX app, you consent to the practices described in this policy.
      </p>
      <hr />
      <h3>1. Information We Collect</h3>
      <ul>
        <li><b>Personal Information:</b> Name, email address, phone number, and other identifiers you provide during registration or use.</li>
        <li><b>Group and Expense Data:</b> Information about groups you create, expenses you track, and related financial data.</li>
        <li><b>Vehicle Data:</b> Details you enter about vehicles, such as maintenance logs or fuel usage.</li>
        <li><b>Usage Data:</b> App usage statistics, device information, and log data.</li>
        <li><b>Communications:</b> Messages sent via group chat or support channels.</li>
      </ul>
      <hr />
      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To provide and improve the FLIX app and its features.</li>
        <li>To facilitate group management, expense tracking, and vehicle management.</li>
        <li>To communicate with you about updates, support, or important notices.</li>
        <li>To generate analytics and reports for your use.</li>
        <li>To ensure security and prevent misuse.</li>
      </ul>
      <hr />
      <h3>3. Data Sharing and Disclosure</h3>
      <ul>
        <li>We do <b>not</b> sell your personal information to third parties.</li>
        <li>We may share data with trusted service providers (e.g., cloud storage, authentication) as needed to operate the app.</li>
        <li>We may disclose information if required by law or to protect our rights and users.</li>
      </ul>
      <hr />
      <h3>4. Data Security</h3>
      <ul>
        <li>We implement reasonable security measures to protect your data from unauthorized access or disclosure.</li>
        <li>Despite our efforts, no method of transmission or storage is 100% secure. Use the app at your own risk.</li>
      </ul>
      <hr />
      <h3>5. Your Choices and Rights</h3>
      <ul>
        <li>You may update or correct your personal information in the app settings.</li>
        <li>You may request deletion of your account and data by contacting us at <a href="mailto:flixsolutionsprivatelimited@gmail.com">flixsolutionsprivatelimited@gmail.com</a>.</li>
        <li>You may opt out of non-essential communications at any time.</li>
      </ul>
      <hr />
      <h3>6. Third-Party Services</h3>
      <ul>
        <li>Some features rely on third-party services (e.g., Google sign-in, cloud providers). Their privacy practices are governed by their own policies.</li>
        <li>We are not responsible for the content or privacy practices of third-party sites or services.</li>
      </ul>
      <hr />
      <h3>7. Children’s Privacy</h3>
      <ul>
        <li>FLIX is not intended for children under 13. We do not knowingly collect personal information from children under 13.</li>
        <li>If you believe a child has provided us with personal data, please contact us for removal.</li>
      </ul>
      <hr />
      <h3>8. Changes to This Policy</h3>
      <ul>
        <li>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</li>
        <li>Continued use of the app after changes means you accept the updated policy.</li>
      </ul>
      <hr />
      <h3>9. Contact Us</h3>
      <p>For questions, requests, or concerns about this Privacy Policy, contact:</p>
      <p><b>FLIX Support Team</b><br />
      📧 Email: <a href="mailto:flixsolutionsprivatelimited@gmail.com">flixsolutionsprivatelimited@gmail.com</a></p>
    </main>
  </div>
);

export default PrivacyPolicy;
