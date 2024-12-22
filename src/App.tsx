import React from 'react';
import Header from './components/Header';
import ChristmasSection from './components/ChristmasSection';
import CardGenerator from './components/CardGenerator';
import Footer from './components/Footer';
import { christmasSections } from './data/christmasSections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-green-900">
      <Header />

      {christmasSections.map((section, index) => (
        <ChristmasSection
          key={index}
          index={index}
          title={section.title}
          content={section.content}
          imageUrl={section.imageUrl}
        />
      ))}

      <section className="py-20 bg-gradient-to-b from-green-900/50 to-red-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Create Your Christmas Card
          </h2>
          <CardGenerator />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;