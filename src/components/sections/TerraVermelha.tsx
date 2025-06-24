
import React from 'react';
import { Mountain, BarChart3, Droplets } from 'lucide-react';

const TerraVermelha = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terra Vermelha</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solo laterítico rico em óxidos de ferro, característico de regiões tropicais
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Características</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                  <Mountain className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Composição Mineral</h4>
                  <p className="text-gray-700">Rica em óxidos de ferro (Fe₂O₃) e alumínio (Al₂O₃), conferindo a coloração vermelha característica</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                  <BarChart3 className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">pH e Fertilidade</h4>
                  <p className="text-gray-700">Geralmente ácido (pH 4,5-6,0), com baixa fertilidade natural e alta capacidade de fixação de fósforo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                  <Droplets className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Propriedades Físicas</h4>
                  <p className="text-gray-700">Boa estrutura, drenagem adequada, porém susceptível à compactação em condições inadequadas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Biorremediação em Terra Vermelha</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Estratégias Específicas:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Correção do pH com calcário para otimizar atividade microbiana</li>
                  <li>• Adição de matéria orgânica para melhorar fertilidade</li>
                  <li>• Uso de plantas hiperacumuladoras para metais pesados</li>
                  <li>• Inoculação com microrganismos tolerantes ao pH ácido</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Desafios:</h4>
                <p className="text-green-700 text-sm">
                  A alta concentração de ferro pode interferir na disponibilidade de nutrientes 
                  e na atividade de alguns microrganismos, exigindo estratégias adaptadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraVermelha;
