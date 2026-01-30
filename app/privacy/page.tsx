import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ayahfinder",
  description: "Ayahfinder Privacy Policy. Learn how we collect, use, and protect your data.",
  keywords: ["privacy policy", "ayahfinder privacy", "data protection", "user privacy"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://getayahfinder.com/privacy",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-dark mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-medium text-lg mb-8 italic">
          Last updated: January 26, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Welcome to Ayahfinder. This Privacy Policy explains how Ibrahim
              Doba (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects
              your personal information when you use the Ayahfinder mobile
              application (the &quot;App&quot;). We are committed to protecting your
              privacy and handling your data in an open and transparent manner.
            </p>
            <p className="text-gray-medium leading-relaxed mt-4">
              By using Ayahfinder, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with this policy, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3">
              2.1 Audio Recordings
            </h3>
            <p className="text-gray-medium leading-relaxed">
              When you use the audio recognition feature, we temporarily capture
              and process audio recordings of Quran recitations. These audio
              files are:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Sent to our cloud servers for identification purposes</li>
              <li>
                Processed immediately and deleted after identification is
                complete
              </li>
              <li>Not stored permanently on our servers</li>
              <li>
                Not used for any purpose other than identifying the Quranic
                verse
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              2.2 User Account Information
            </h3>
            <p className="text-gray-medium leading-relaxed">
              If you create an account, we collect:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Email address</li>
              <li>Username</li>
              <li>Password (encrypted and securely stored)</li>
              <li>Profile preferences and settings</li>
              <li>Bookmarked Ayahs and favorites</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              2.3 Usage Analytics
            </h3>
            <p className="text-gray-medium leading-relaxed">
              We collect analytics data to improve the App&apos;s performance and
              user experience, including:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>App usage statistics (features used, session duration)</li>
              <li>Device information (device type, operating system version)</li>
              <li>Crash reports and error logs</li>
              <li>Performance metrics</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              2.4 Automatic Information
            </h3>
            <p className="text-gray-medium leading-relaxed">
              We automatically collect certain information when you use the App:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>IP address</li>
              <li>Device identifiers</li>
              <li>App version</li>
              <li>Time zone and language settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>
                To provide and maintain the audio recognition functionality
              </li>
              <li>To create and manage your user account</li>
              <li>To sync your bookmarks and preferences across devices</li>
              <li>To analyze and improve App performance and features</li>
              <li>To fix bugs and resolve technical issues</li>
              <li>To communicate with you about updates and new features</li>
              <li>To process in-app purchases and premium subscriptions</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We use the following third-party services that may collect
              information:
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              4.1 Analytics Services
            </h3>
            <p className="text-gray-medium leading-relaxed">
              We use Firebase Analytics and Google Analytics to understand how
              users interact with the App. These services may collect device
              information, usage data, and crash reports.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              4.2 Cloud Services
            </h3>
            <p className="text-gray-medium leading-relaxed">
              Audio recordings are processed using cloud-based servers for
              identification. These services are bound by strict data processing
              agreements and do not store or use your audio beyond the
              identification process.
            </p>

            <h3 className="text-2xl font-semibold text-gray-dark mb-3 mt-6">
              4.3 Payment Processing
            </h3>
            <p className="text-gray-medium leading-relaxed">
              In-app purchases are processed through Apple App Store and Google
              Play Store. We do not store your payment information. Please
              review their respective privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Encryption of data in transit using SSL/TLS</li>
              <li>Secure storage of passwords using industry-standard hashing</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal data by authorized personnel only</li>
              <li>Immediate deletion of temporary audio recordings after processing</li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to protect your personal
              information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We retain your personal information only for as long as necessary:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>
                <strong>Audio recordings:</strong> Deleted immediately after
                identification (typically within seconds)
              </li>
              <li>
                <strong>Account data:</strong> Retained until you delete your
                account or request deletion
              </li>
              <li>
                <strong>Analytics data:</strong> Retained for up to 26 months
              </li>
              <li>
                <strong>Crash reports:</strong> Retained for up to 90 days
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-medium leading-relaxed">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                personal data
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a
                machine-readable format
              </li>
              <li>
                <strong>Opt-out:</strong> Opt out of analytics and marketing
                communications
              </li>
              <li>
                <strong>Withdrawal:</strong> Withdraw consent at any time
              </li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              To exercise any of these rights, please contact us at
              support@getayahfinder.com. We will respond to your request within 30
              days.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Ayahfinder is intended for users of all ages. We do not knowingly
              collect personal information from children under 13 without
              parental consent. If you are a parent or guardian and believe your
              child has provided us with personal information, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Your information may be transferred to and processed in countries
              other than Nigeria. We ensure appropriate safeguards are in place
              to protect your data in accordance with this Privacy Policy and
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-medium leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by:
            </p>
            <ul className="list-disc ml-6 text-gray-medium space-y-2 mt-3">
              <li>Posting the new Privacy Policy in the App</li>
              <li>Updating the &quot;Last updated&quot; date</li>
              <li>
                Sending you an email notification (for significant changes)
              </li>
            </ul>
            <p className="text-gray-medium leading-relaxed mt-4">
              We encourage you to review this Privacy Policy periodically for
              any changes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-bg p-6 rounded-lg">
              <p className="text-gray-dark mb-2">
                <strong>Developer:</strong> Ayahfinder Team
              </p>
              <p className="text-gray-dark mb-2">
                <strong>Email:</strong> support@getayahfinder.com
              </p>
              <p className="text-gray-dark">
                <strong>Location:</strong> Nigeria
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-green mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-medium leading-relaxed">
              This Privacy Policy is governed by the laws of Nigeria. Any
              disputes arising from this policy will be subject to the exclusive
              jurisdiction of the courts of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
