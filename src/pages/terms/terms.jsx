import React from "react";
import styles from "./terms.module.css";
import Hero from "../../components/hero/heroSection";

const TermsAndConditions = () => {
  return (
    <div>
      <Hero page="terms" />
      <section className={styles.termsSection}>
        <h2 className={styles.title}>Terms and Conditions</h2>
        <p className={styles.updated}>Last updated: April 29, 2025</p>

        <div className={styles.content}>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>

          <h3>2. Use of the Site</h3>
          <p>
            You agree to use the site only for lawful purposes. You must not use the site in any
            way that breaches any applicable local, national, or international law or regulation.
          </p>

          <h3>3. Privacy Policy</h3>
          <p>
            Your use of the site is also subject to our Privacy Policy. Please review our Privacy
            Policy, which also governs the site and informs users of our data collection practices.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            The content, layout, design, data, graphics and other materials on this site are
            protected by intellectual property laws and are owned by or licensed to us.
          </p>

          <h3>5. Changes to These Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. It is your responsibility to
            review these terms regularly to ensure you are aware of any changes.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:vr.africa@dkut.ac.ke">vr.africa@dkut.ac.ke</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
