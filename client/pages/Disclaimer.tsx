import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-12 text-center">
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none text-brand-white/90 leading-relaxed">
          <div className="space-y-8">

            {/* Introduction */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed">
                Welcome to <strong>WhiteSignal</strong>, an independent personal project created by{" "}
                <strong>Melwin Shibu</strong> to demonstrate the integration of artificial intelligence and data automation in finance. 
                By accessing or using this website, you acknowledge that you have read, understood, and agree to this Disclaimer in full.
              </p>
            </section>

            {/* Educational and Demonstrative Nature */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Educational Demonstration Only
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal is a non-commercial, educational project created solely for academic and illustrative purposes. 
                It demonstrates how AI, data automation, and workflow systems can be applied to publicly available financial data.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The information and tools provided on this website are <strong>not intended for investment, trading, or professional use</strong>. 
                Nothing on this website constitutes financial, investment, legal, accounting, or tax advice. 
                You should not interpret any data, signal, or commentary as a recommendation to buy, sell, or hold any security or financial instrument.
              </p>
            </section>

            {/* No Financial Advice */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Not Financial or Investment Advice
              </h2>
              <p className="text-lg leading-relaxed">
                The content provided through WhiteSignal—including AI-generated summaries, interpretations, or “signals”—is for 
                <strong>general informational and illustrative purposes only</strong>. 
                It does not constitute personalized financial advice or create any advisory, fiduciary, or client relationship.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Always conduct your own independent research or consult a licensed financial advisor before making any investment decisions.
              </p>
            </section>

            {/* Data Accuracy and Limitations */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Accuracy and Limitations of Data
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal sources and processes data from publicly available filings and third-party APIs. 
                While reasonable efforts are made to maintain accuracy and timeliness, 
                <strong>no guarantee or warranty of any kind</strong>—express or implied—is made regarding the accuracy, completeness, reliability, or currentness of any information displayed.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Data presented may contain delays, omissions, formatting inconsistencies, or errors resulting from automated collection or AI interpretation. 
                Users are solely responsible for verifying any information before relying upon it.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed">
                To the fullest extent permitted by applicable law, <strong>WhiteSignal</strong> and its creator 
                <strong> (Melwin Shibu)</strong> disclaim all liability for any direct, indirect, incidental, consequential, or special damages— 
                including, without limitation, financial losses, loss of profits, or trading losses—arising from or in connection with 
                the use of this website, the data displayed, or the interpretation of AI-generated content.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Your use of this website and any reliance on its content are entirely at your own risk.
              </p>
            </section>

            {/* Third-Party Links and References */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Third-Party Content and External Links
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal may link to or reference third-party websites, data sources, or services. 
                These are provided solely for convenience and educational context. 
                WhiteSignal does not control, verify, or endorse such external resources and assumes no responsibility 
                for their accuracy, legality, or content.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Intellectual Property and Fair Use
              </h2>
              <p className="text-lg leading-relaxed">
                All code, design elements, and textual content appearing on this website are the intellectual property of 
                <strong> WhiteSignal (by Melwin Shibu)</strong> unless otherwise stated. 
                Third-party trademarks, logos, and visual assets remain the property of their respective owners 
                and are used under principles of <strong>fair use</strong> for illustrative and educational purposes.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                If you are a rights holder and believe your material is used inappropriately, please contact us to request modification or removal.
              </p>
            </section>

            {/* No Warranties */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                No Warranties or Guarantees
              </h2>
              <p className="text-lg leading-relaxed">
                This site, its data, and all related services are provided on an <strong>"as is" and "as available"</strong> basis without warranties of any kind, 
                whether express or implied, including but not limited to accuracy, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            {/* Modifications */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Updates and Changes
              </h2>
              <p className="text-lg leading-relaxed">
                WhiteSignal reserves the right to modify, suspend, or discontinue any aspect of this website, its data processing, or this disclaimer at any time without notice. 
                Continued use of the website following updates constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Contact
              </h2>
              <p className="text-lg leading-relaxed">
                For questions, clarifications, or requests regarding this disclaimer, please contact the creator at{" "}
                <a
                  href="mailto:contact.whitesignal@gmail.com"
                  className="underline text-brand-cream hover:text-brand-cream/80"
                >
                  contact.whitesignal@gmail.com
                </a>.
              </p>
            </section>

            {/* Jurisdiction */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-cream mb-4">
                Governing Law
              </h2>
              <p className="text-lg leading-relaxed">
                This project and its content are operated from India. 
                This disclaimer shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. 
                Any disputes arising under or in connection with this website shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra, India.
              </p>
            </section>

            {/* Final Notice */}
            <section className="bg-brand-white/5 rounded-lg p-6 lg:p-8">
              <p className="text-lg leading-relaxed text-center italic">
                By accessing and using WhiteSignal, you acknowledge that this project is for demonstration and educational use only 
                and that no financial or investment relationship exists between you and the creator.
              </p>
              <p className="text-sm text-center mt-4 text-brand-white/70">
                Last updated: October 2025
              </p>
            </section>

          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-brand-cream text-black hover:bg-brand-cream/90 px-8 py-3 text-lg font-medium"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
