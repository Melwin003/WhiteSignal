import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-12 text-center">
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-lg max-w-none text-brand-white/90 leading-relaxed">
          <div className="space-y-8">

            {/* Short summary */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed">
                 WhiteSignal is an independent, educational demonstration project operated by <strong>Melwin Shibu</strong>, and it is not a financial advisory. 
                These Terms govern your access to and use of the WhiteSignal website and related services. By using the site, you accept these Terms in full.
              </p>
              <p className="text-sm mt-3 text-brand-white/70">
                Please also review our <Link to="/disclaimer" className="underline text-brand-cream">Disclaimer</Link> and <Link to="/privacy" className="underline text-brand-cream">Privacy Policy</Link>.
              </p>
            </section>

            {/* Numbered sections without browser auto-numbers */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <div className="space-y-6">

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">1. Definitions</h2>
                  <p className="text-lg leading-relaxed">
                    1.1 "<strong>WhiteSignal</strong>" means the website, related pages, and services hosted at this domain and maintained as an educational project by <strong>Melwin Shibu</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    1.2 "You" and "User" mean any person or entity accessing or using WhiteSignal.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">2. Acceptance of Terms</h2>
                  <p className="text-lg leading-relaxed">
                    2.1 By accessing, browsing, or using the Service, you acknowledge that you have read, understood and agree to be bound by these Terms and by any documents expressly incorporated by reference (including our <Link to="/disclaimer" className="underline text-brand-cream">Disclaimer</Link> and <Link to="/privacy" className="underline text-brand-cream">Privacy Policy</Link>).
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    2.2 If you do not agree to these Terms, you must immediately stop using the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">3. Nature of the Service</h2>
                  <p className="text-lg leading-relaxed">
                    3.1 WhiteSignal is a non-commercial, educational demonstration project that aggregates and displays information derived from publicly available filings and other public sources. It is intended for informational and educational purposes only.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    3.2 The Service is not a financial advisory service and does not offer investment recommendations, portfolio management, legal, tax, or accounting advice.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">4. Eligibility and User Representations</h2>
                  <p className="text-lg leading-relaxed">
                    4.1 You represent and warrant that you are at least 18 years old (or the age of legal majority in your jurisdiction) and have the right, authority, and capacity to agree to these Terms.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    4.2 You agree to use the Service only for lawful, non-commercial, and educational purposes, and not to circumvent or interfere with any part of the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">5. User Conduct &amp; Prohibited Activities</h2>
                  <p className="text-lg leading-relaxed mb-3">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                    <li>Use the Service to provide investment advice to others, solicit investments, or act as an investment advisor or broker.</li>
                    <li>Harvest, scrape, or otherwise collect personal data or proprietary data from the Service for resale or redistribution.</li>
                    <li>Reverse-engineer, decompile, disassemble, copy, reproduce, or use the site in a way that violates intellectual property rights.</li>
                    <li>Interfere with, disrupt, or attempt to gain unauthorized access to WhiteSignal, its systems, or its networks.</li>
                    <li>Upload content that is unlawful, defamatory, obscene, infringing, or that violates any third-party rights.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">6. Data Collection — Subscriptions &amp; Alerts</h2>
                  <p className="text-lg leading-relaxed">
                    6.1 If you opt into email alerts or notifications, WhiteSignal will collect your email address and any information you provide voluntarily for the purpose of delivering the requested alerts and related communications.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    6.2 Collected emails are used only for the stated purpose, are not sold, and will be processed in accordance with the <Link to="/privacy" className="underline text-brand-cream">Privacy Policy</Link>. You may unsubscribe or request deletion at any time by contacting <a href="mailto:whitesignal.ai@gmail.com" className="underline text-brand-cream">whitesignal.ai@gmail.com</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">7. Intellectual Property</h2>
                  <p className="text-lg leading-relaxed">
                    7.1 All original content on the Service — including code, design, layout, text, and graphics — is the property of WhiteSignal (by Melwin Shibu), unless stated otherwise.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    7.2 You are granted a limited, non-exclusive, non-transferable license to view and use the Service for personal, informational, and educational purposes only. Any other use, including commercial exploitation, is prohibited without prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">8. Third-Party Content &amp; Links</h2>
                  <p className="text-lg leading-relaxed">
                    8.1 The Service may contain links to third-party websites, services, or content. These links are provided for convenience and do not imply endorsement or responsibility for third-party practices or content.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    8.2 WhiteSignal is not responsible for the accuracy, legality, or availability of external content; you should evaluate any third-party information independently.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">9. No Warranty</h2>
                  <p className="text-lg leading-relaxed">
                    9.1 THE SERVICE IS PROVIDED <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    9.2 WhiteSignal does not warrant that the Service will be uninterrupted, error-free, or secure, nor that any results obtained from use will be accurate or reliable.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">10. Limitation of Liability</h2>
                  <p className="text-lg leading-relaxed">
                    10.1 To the maximum extent permitted by applicable law, in no event shall WhiteSignal or its creator (Melwin Shibu) be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, trading losses, or other economic loss arising out of or in connection with your use of the Service.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    10.2 Subject to applicable law, the aggregate liability of WhiteSignal for direct damages shall not exceed the greater of (a) the amounts actually paid by you to WhiteSignal in the 12 months preceding the event giving rise to liability, or (b) INR 10,000.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">11. Indemnification</h2>
                  <p className="text-lg leading-relaxed">
                    11.1 You agree to indemnify, defend, and hold harmless WhiteSignal and its owner from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with (a) your use of the Service; (b) your breach of these Terms; or (c) your violation of any rights of a third party.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">12. Termination</h2>
                  <p className="text-lg leading-relaxed">
                    12.1 WhiteSignal reserves the right, at its sole discretion, to suspend or terminate access to the Service (or any part of it) at any time, with or without notice, including for violation of these Terms.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    12.2 Upon termination, your right to use the Service will immediately cease, but sections that by their nature survive termination (e.g., Intellectual Property, Limitation of Liability, Indemnification) will remain in effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">13. Modifications to the Service &amp; Terms</h2>
                  <p className="text-lg leading-relaxed">
                    13.1 WhiteSignal may modify, suspend, or discontinue the Service (or any feature) at any time. WhiteSignal may also update these Terms; the latest version will be posted at this location with an updated "Last updated" date.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    13.2 Continued use of the Service following modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">14. Dispute Resolution &amp; Governing Law</h2>
                  <p className="text-lg leading-relaxed">
                    14.1 These Terms are governed by the laws of India without regard to conflict of laws principles.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    14.2 Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra, India.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">15. Notices &amp; DMCA</h2>
                  <p className="text-lg leading-relaxed">
                    15.1 All notices or requests required by these Terms should be sent to: <a href="mailto:whitesignal.ai@gmail.com" className="underline text-brand-cream">whitesignal.ai@gmail.com</a>.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    15.2 If you believe content on the Service infringes your copyright, please provide a detailed notice including a description of the copyrighted work, the location of the infringing material, your contact information, and a statement of good faith to the email above. WhiteSignal will review and respond in accordance with applicable law.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-brand-cream mb-2">16. Miscellaneous</h2>
                  <p className="text-lg leading-relaxed">
                    16.1 <strong>Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    16.2 <strong>Waiver:</strong> Failure to enforce any right or provision of these Terms shall not constitute a waiver of such right.
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    16.3 <strong>Entire Agreement:</strong> These Terms (together with the Disclaimer and Privacy Policy) constitute the entire agreement between you and WhiteSignal regarding the Service.
                  </p>
                </div>

              </div>
            </section>

            {/* Final notice & timestamp */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed text-center italic">
                By using WhiteSignal you confirm you have read, understood, and agreed to these Terms and any documents incorporated by reference.
              </p>
              <p className="text-sm text-center mt-4 text-brand-white/70">
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
