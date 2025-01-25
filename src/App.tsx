import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import SuccessCarousel from './components/SuccessCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <main className="relative">
        <Hero />
        <PainPoints />
        <Features />
        <SuccessCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;