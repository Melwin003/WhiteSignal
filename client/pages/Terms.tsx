import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-12 text-center">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none text-brand-white/90 leading-relaxed">
          <div className="space-y-8">

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">1. Acceptance of Terms</h2>
              <p className="text-lg leading-relaxed">
                By accessing and using the WhiteSignal website (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use this Service.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">2. Nature of Service</h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal is a web-based platform that provides curated information related to insider trading activity from publicly available sources. The content is intended for educational and informational purposes only and does not constitute financial, legal, or investment advice.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">3. No Investment Advice</h2>
              <p className="text-lg leading-relaxed">
                Nothing presented on this website should be considered as personalized investment advice or a recommendation to buy or sell any security. You are solely responsible for your investment decisions. WhiteSignal holds no liability for any financial outcomes based on the information presented.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">4. Use of Data</h2>
              <p className="text-lg leading-relaxed">
                All data on this website is aggregated from public sources such as stock exchanges, regulatory filings, and media outlets. While we strive for accuracy, we do not guarantee the completeness, reliability, or timeliness of any data.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">5. User Conduct</h2>
              <p className="text-lg leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Violate any applicable law or regulation.</li>
                <li>Harvest or misuse personal data.</li>
                <li>Interfere with the functionality or security of the site.</li>
                <li>Attempt to reverse engineer, copy, or resell any portion of the site.</li>
              </ul>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">6. Intellectual Property</h2>
              <p className="text-lg leading-relaxed">
                All content, logos, designs, and code on this website are the exclusive property of WhiteSignal (by Melwin.S) or licensed providers. Do not use, copy, or redistribute any part without written permission.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">7. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal will not be held liable for any direct or indirect loss resulting from use of this platform. This includes, but is not limited to, financial loss, lost profits, or missed opportunities resulting from relying on our data.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">8. Changes to These Terms</h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal reserves the right to update these Terms at any time. Changes will be posted on this page with the updated effective date. Continued use of the Service after any changes means you accept the new Terms.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">9. Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These Terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of courts in Maharashtra, India.
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
