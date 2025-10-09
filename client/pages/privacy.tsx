import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-12 text-center">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-brand-white/90 leading-relaxed">
          <div className="space-y-8">

            {/* Introduction */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed">
                This Privacy Policy explains how <strong>WhiteSignal</strong> (“we,” “our,” or “us”) 
                collects, uses, stores, and protects your personal information when you use this website 
                (the “Service”). WhiteSignal is a personal, educational project created and operated by{" "}
                <strong>Melwin Shibu</strong> to demonstrate AI-based data automation for educational purposes.
              </p>
              <p className="text-sm mt-3 text-brand-white/70">
                Please read this policy carefully. By using the Service, you agree to the collection and 
                use of information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                1. Information We Collect
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal collects a minimal amount of data — only what is necessary to deliver its 
                educational functionality. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mt-3 ml-4">
                <li><strong>Email Address:</strong> collected when you voluntarily subscribe to receive alerts or updates.</li>
                <li><strong>Basic metadata:</strong> technical information automatically provided by your browser (e.g., device type, 
                  approximate location by IP, and visit timestamps). This is used solely for debugging and performance monitoring.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-3">
                WhiteSignal does not collect financial details, passwords, or sensitive personal information.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed">
                The information we collect is used strictly for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mt-3 ml-4">
                <li>To send insider-trading alert emails and educational updates you have explicitly subscribed to.</li>
                <li>To improve the performance, reliability, and accuracy of the Service.</li>
                <li>To maintain system security, prevent abuse, and debug errors.</li>
              </ul>
              <p className="text-lg leading-relaxed mt-3">
                Your email address will never be sold, rented, or shared with third parties for marketing or advertising.
              </p>
            </section>

            {/* 3. Data Storage & Security */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                3. Data Storage & Security
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal uses secure, encrypted cloud storage (Supabase) to manage and store user email data. 
                Access to this data is restricted solely to the creator and system processes required for automation. 
                All connections use HTTPS, and the backend is protected by industry-standard authentication and firewalls.
              </p>
              <p className="text-lg leading-relaxed mt-3">
                While we take reasonable measures to protect your information, no internet transmission or 
                storage method can be guaranteed 100% secure. You use the Service at your own discretion.
              </p>
            </section>

            {/* 4. Legal Basis for Processing (GDPR & DPDP compliance) */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                4. Legal Basis for Processing
              </h2>
              <p className="text-lg leading-relaxed">
                Under data protection laws, including India’s <strong>Digital Personal Data Protection Act, 2023</strong> and the EU <strong>GDPR</strong>, 
                our legal basis for processing your data is:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mt-3 ml-4">
                <li><strong>Consent:</strong> You provide explicit consent when you subscribe using your email.</li>
                <li><strong>Legitimate interest:</strong> Maintaining the functionality and security of this educational demonstration.</li>
              </ul>
            </section>

            {/* 5. Data Retention & Deletion */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                5. Data Retention & Deletion
              </h2>
              <p className="text-lg leading-relaxed">
                We retain your email address only for as long as you are subscribed to the Service. 
                You can request deletion at any time by contacting{" "}
                <a href="mailto:whitesignal.ai@gmail.com" className="underline text-brand-cream">whitesignal.ai@gmail.com</a>. 
                Upon request, your record will be permanently deleted from all systems within 7 days.
              </p>
            </section>

            {/* 6. Cookies & Tracking */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                6. Cookies & Tracking
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal does <strong>not</strong> use third-party tracking cookies or analytics services. 
                Basic browser storage may be used to improve page performance (for example, to remember filters or pagination states). 
                No user-identifiable data is tracked or profiled.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                7. Your Rights
              </h2>
              <p className="text-lg leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mt-3 ml-4">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw your consent for email communications at any time.</li>
                <li>Complain to your local data protection authority if you believe your data rights are violated.</li>
              </ul>
            </section>

            {/* 8. Third-Party Services */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                8. Third-Party Services
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal integrates with third-party services (e.g., Supabase, Google Cloud, Netlify) solely for hosting and 
                delivery of its functionality. These services are reputable providers that comply with global data protection standards. 
                However, WhiteSignal is not responsible for their individual privacy practices. 
                Please review their respective policies for more information.
              </p>
            </section>

            {/* 9. Updates to This Policy */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                9. Updates to This Policy
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal may update this Privacy Policy periodically to reflect operational or legal changes. 
                The most current version will always be available on this page. Continued use of the Service after 
                updates indicates your acceptance of the revised Policy.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                10. Contact
              </h2>
              <p className="text-lg leading-relaxed">
                For any questions, concerns, or data-related requests, please contact:
              </p>
              <p className="text-lg leading-relaxed mt-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:whitesignal.ai@gmail.com" className="underline text-brand-cream">
                  whitesignal.ai@gmail.com
                </a>
              </p>
              <p className="text-lg leading-relaxed mt-2">
                <strong>Project Owner:</strong> Melwin Shibu<br />
                <strong>Jurisdiction:</strong> Nashik, Maharashtra, India
              </p>
            </section>

            {/* Last updated */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8 text-center">
              <p className="italic text-lg">
                By using WhiteSignal, you acknowledge that you have read and understood this Privacy Policy 
                and consent to the practices described herein.
              </p>
              <p className="text-sm mt-4 text-brand-white/70">
                Last updated: October 7, 2025
              </p>
            </section>

          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-brand-cream text-black hover:bg-brand-cream/90 px-8 py-3 text-lg font-medium">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
