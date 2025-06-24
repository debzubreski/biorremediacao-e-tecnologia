
import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Biorremediação e Tecnologia
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Explorando as tecnologias de biorremediação para a recuperação ambiental 
          através de processos biológicos naturais
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustentável</h3>
            <p className="text-gray-600">Processos naturais que respeitam o meio ambiente</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Eficiente</h3>
            <p className="text-gray-600">Tecnologias avançadas para recuperação do solo</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global</h3>
            <p className="text-gray-600">Soluções aplicáveis em diferentes contextos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
