import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import PortfolioGrid from "../components/PortfolioGrid";
import ConsultationForm from '@/components/ConsultationForm';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <PortfolioGrid />

        {/* Consultation section — the "Book a Consultation" button leads here. */}
        <section
          id="contact"
          className="py-24 px-6 bg-surfaceVariant/20 scroll-mt-20"
        >
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-onSurface mb-4 text-center">
              Book a Consultation
            </h2>
            <p className="text-outline text-center max-w-xl mb-12">
              Tell us about your project and we&apos;ll get back to you shortly.
            </p>

            {/* Form card — highlight it with background, border, and shadow */}
            <div className="w-full max-w-md bg-surface border border-surfaceVariant shadow-lg shadow-onSurface/5 px-8 py-10 sm:px-10 sm:py-12">
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}