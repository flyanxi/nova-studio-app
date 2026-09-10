import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import PortfolioGrid from "../components/PortfolioGrid";
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
      </main>

      <Footer />
    </div>
  );
}