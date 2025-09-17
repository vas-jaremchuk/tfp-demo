import React from 'react';
import { AccordionWidget } from './src/components/AccordionWidget';
import { mockAccordionData } from './src/data/mockAccordionData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Accordion Widget Demo
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Interactive accordion component inspired by Procrea Fertility
          </p>
        </div>
      </div>

      {/* Main Accordion Section */}
      <AccordionWidget
        title="Une approche holistique et une vaste gamme de services en plein cœur de la ville de Québec"
        subtitle="NoS SERVICES"
        description="Chez Procrea Fertilité, nous offrons une vaste gamme de services personnalisés. Notre équipe dévouée vous aidera à déterminer le plan de traitement qui vous convient le mieux."
        items={mockAccordionData}
      />

      {/* Additional Demo Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Features</h2>
            <p className="text-lg text-gray-600">
              This accordion widget includes all the functionality from the original Procrea website
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smooth Animations</h3>
              <p className="text-gray-600">Elegant expand/collapse animations with proper transitions</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Works perfectly on desktop, tablet, and mobile devices</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Easy to customize with different content and styling options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 TFT Demo - Accordion Widget Component</p>
        </div>
      </footer>
    </div>
  );
}

export default App;