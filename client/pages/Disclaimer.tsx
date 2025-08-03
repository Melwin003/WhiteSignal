import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-12 text-center">Disclaimer</h1>

        <div className="prose prose-lg max-w-none text-brand-white/90 leading-relaxed">
          <div className="space-y-8">

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed">
                Welcome to WhiteSignal, an AI-powered insider trading alert tool developed by Melwin.S. By accessing and using this website, you acknowledge that you have read, understood, and agreed to the terms of this disclaimer.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">Informational Purposes Only</h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal is intended solely for informational and educational purposes. We do not provide financial, investment, legal, or tax advice. The content on this website is not a recommendation to buy or sell any securities or investments.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">No Guarantees on Accuracy</h2>
              <p className="text-lg leading-relaxed mb-4">
                WhiteSignal aggregates insider trading data from publicly available sources (such as stock exchange filings and databases). While we strive for accuracy and timeliness, we do not guarantee the completeness, correctness, or up-to-date status of any information presented on this site.
              </p>
              <p className="text-lg leading-relaxed">
                Users are responsible for verifying any data before making investment decisions.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">Not Responsible for Investment Decisions</h2>
              <p className="text-lg leading-relaxed">
                Your use of this website, including any decisions made based on information provided, is entirely at your own risk. WhiteSignal and its creator (Melwin.S) will not be held liable for any losses, damages, or consequences resulting from reliance on the data or tools offered herein.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">Third-Party Content and Links</h2>
              <p className="text-lg leading-relaxed">
                This site may reference or link to third-party content or platforms. WhiteSignal is not responsible for the availability, accuracy, or reliability of such content. Inclusion of third-party links does not imply endorsement.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">Intellectual Property</h2>
              <p className="text-lg leading-relaxed">
                All content, code, designs, logos, and text on this website are the property of WhiteSignal (by Melwin.S) or its respective content providers. All images, icons, and graphics used are the property of their respective owners and are used for illustrative and educational purposes only. If you are the rightful owner of any asset and wish to request removal, please contact us.
              </p>
            </section>

            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">Changes to the Website and Disclaimer</h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal may modify or update any part of the website or this disclaimer without prior notice. Users are encouraged to revisit this page periodically to stay informed of any changes.
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
