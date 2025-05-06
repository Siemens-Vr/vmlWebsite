import React from "react";
import styles from "./privacy.module.css";
import Hero from "../../components/hero/heroSection";

const PrivacyPolicy = () => {
  return (
    <div>
      <Hero page="privacy" />
      <section className={styles.privacySection}>
        <h2 className={styles.title}>Privacy Policy</h2>
        <p className={styles.updated}>Last updated: April 29, 2025</p>

        <div className={styles.content}>
          <h3>1. Introduction</h3>
          <p>
            We respect your privacy and are committed to protecting it through this Privacy Policy.
            This document outlines how we collect, use, and safeguard your data when you visit our
            website.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Message content from the contact form</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>
            The data we collect is used to:
            <ul>
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
              <li>Send you updates if you consent</li>
            </ul>
          </p>

          <h3>4. Sharing Your Data</h3>
          <p>
            We do not sell or share your personal information with third parties, except where
            required by law.
          </p>

          <h3>5. Security</h3>
          <p>
            We implement appropriate technical and organizational measures to ensure your data is
            secure.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal data. To exercise any of
            these rights, please contact us at{" "}
            <a href="mailto:vr.africa@dkut.ac.ke">vr.africa@dkut.ac.ke</a>.
          </p>

          <h3>7. Changes to This Policy</h3>
          <p>
            We may update this policy occasionally. You are encouraged to review it periodically for
            any changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
