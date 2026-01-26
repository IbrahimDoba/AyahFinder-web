import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Ayahfinder",
  description: "Ayahfinder Terms and Conditions of Use. Read the terms governing your use of the app.",
};

export default function Terms() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-dark mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-medium text-lg mb-8 italic">
          Last updated: January 26, 2024
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Welcome to Ayahfinder. These Terms and Conditions ("Terms")
              constitute a legally binding agreement between you and Ibrahim
              Doba ("we," "us," or "our") regarding your use of the Ayahfinder
              mobile application (the "App").
            </p>
            <p className="text-gray-medium leading-relaxed mt-4">
              By downloading, installing, or using the App, you agree to be
              bound by these Terms. If you do not agree to these Terms, do not
              use the App.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Ayahfinder is a mobile application that provides audio recognition
              technology to identify Quranic recitations and display the
              corresponding Surah and Ayah. The App also includes:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Complete Quran text with translations</li>
              <li>Bookmarking and favorites functionality</li>
              <li>User account features</li>
              <li>Premium features available through in-app purchases</li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any
              feature of the App at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              3. User Accounts
            </h2>
            <h3 className="text-2xl font-semibold text-gray-dark mb-3">
              3.1 Account Creation
            </h3>
            <p className="text-gray-medium leading-relaxed">
              You may create an account to access certain features of the App.
              When creating an account, you agree to:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              3.2 Account Termination
            </h3>
            <p className="text-gray-medium leading-relaxed">
              We reserve the right to suspend or terminate your account if you
              violate these Terms or engage in fraudulent, abusive, or illegal
              activity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              4. Acceptable Use
            </h2>
            <p className="text-gray-medium leading-relaxed">
              You agree to use the App only for lawful purposes and in
              accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>
                Use the App in any way that violates applicable laws or
                regulations
              </li>
              <li>
                Attempt to interfere with, compromise, or reverse engineer the
                App
              </li>
              <li>
                Use any automated system to access the App without permission
              </li>
              <li>
                Upload or transmit viruses, malware, or malicious code
              </li>
              <li>
                Harass, abuse, or harm other users
              </li>
              <li>
                Impersonate any person or entity
              </li>
              <li>
                Use the App for any commercial purpose without our written
                consent
              </li>
              <li>
                Modify, adapt, or hack the App
              </li>
              <li>
                Remove or alter any copyright, trademark, or proprietary notices
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              5. Intellectual Property Rights
            </h2>
            <h3 className="text-2xl font-semibold text-gray-dark mb-3">
              5.1 Our Rights
            </h3>
            <p className="text-gray-medium leading-relaxed">
              The App and its original content, features, and functionality are
              owned by Ibrahim Doba and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              5.2 Quran Content
            </h3>
            <p className="text-gray-medium leading-relaxed">
              The Quranic text is in the public domain and is the divine word of
              Allah (SWT). Translations and tafsir content may be subject to
              individual copyright by their respective authors or translators.
              We use this content with appropriate permissions or under fair use
              principles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              5.3 Limited License
            </h3>
            <p className="text-gray-medium leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable,
              revocable license to use the App for personal, non-commercial
              purposes in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              6. Premium Features and In-App Purchases
            </h2>
            <h3 className="text-2xl font-semibold text-gray-dark mb-3">
              6.1 Payment
            </h3>
            <p className="text-gray-medium leading-relaxed">
              Certain features of the App may require payment through in-app
              purchases. All purchases are processed through the Apple App Store
              or Google Play Store and are subject to their respective terms and
              conditions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              6.2 Subscriptions
            </h3>
            <p className="text-gray-medium leading-relaxed">
              Premium subscriptions automatically renew unless cancelled at
              least 24 hours before the end of the current period. You can
              manage your subscription through your app store account settings.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              6.3 Refunds
            </h3>
            <p className="text-gray-medium leading-relaxed">
              Refund requests are handled by the Apple App Store or Google Play
              Store according to their policies. We do not directly process
              refunds for in-app purchases.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-medium leading-relaxed">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              We do not guarantee the accuracy of Quran recognition results. The
              App is intended as a learning and reference tool and should not be
              used as the sole source for religious decisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-medium leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IBRAHIM DOBA SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any bugs, viruses, or malicious code transmitted through the App</li>
              <li>Any errors or omissions in content</li>
              <li>Any conduct or content of third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-medium leading-relaxed">
              You agree to indemnify, defend, and hold harmless Ibrahim Doba and
              his affiliates, officers, agents, and employees from any claims,
              liabilities, damages, losses, costs, or expenses (including
              reasonable attorneys' fees) arising out of or related to:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              10. Third-Party Links and Services
            </h2>
            <p className="text-gray-medium leading-relaxed">
              The App may contain links to third-party websites or services that
              are not owned or controlled by us. We have no control over and
              assume no responsibility for the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make
              material changes, we will notify you by:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Posting the revised Terms in the App</li>
              <li>Updating the "Last updated" date</li>
              <li>
                Sending you an email notification (for significant changes)
              </li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              Your continued use of the App after changes become effective
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              12. Termination
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We may terminate or suspend your access to the App immediately,
              without prior notice or liability, for any reason, including if
              you breach these Terms. Upon termination, your right to use the
              App will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              13. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-medium leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of Nigeria, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-medium leading-relaxed mt-4">
              Any disputes arising from these Terms or your use of the App shall
              be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              14. Severability
            </h2>
            <p className="text-gray-medium leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary, and the remaining provisions will remain
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              15. Entire Agreement
            </h2>
            <p className="text-gray-medium leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Ibrahim Doba regarding the App
              and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              16. Contact Information
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-bg p-6 rounded-lg">
              <p className="text-gray-dark mb-2">
                <strong>Developer:</strong> Ibrahim Doba
              </p>
              <p className="text-gray-dark mb-2">
                <strong>Email:</strong> ibrahimdoba55@gmail.com
              </p>
              <p className="text-gray-dark">
                <strong>Location:</strong> Nigeria
              </p>
            </div>
          </section>

          <section className="mt-12 bg-primary-green/10 p-6 rounded-lg border-l-4 border-primary-green">
            <p className="text-gray-dark font-semibold">
              By using Ayahfinder, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
