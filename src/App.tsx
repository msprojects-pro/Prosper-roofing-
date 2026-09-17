import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import OurWork from './components/OurWork';
import ContactQuote from './components/ContactQuote';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#69ADDE]/20 selection:text-zinc-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content: Exactly 5 Main Sections */}
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. SERVICES SECTION */}
        <Services />

        {/* 3. ABOUT / WHY PROSPER ROOFING */}
        <About />

        {/* 4. OUR WORK */}
        <OurWork />

        {/* 5. CONTACT / QUOTE */}
        <ContactQuote />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
