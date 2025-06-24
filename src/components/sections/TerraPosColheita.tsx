
import React from 'react';
import { Wheat, Zap, Leaf } from 'lucide-react';

const TerraPosColheita = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terra Pós-Colheita</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solo após atividade agrícola intensiva, frequentemente com depleção de nutrientes e resíduos de pesticidas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-yellow-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Características Pós-Colheita</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                  <Wheat className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depleção de Nutrientes</h4>
                  <p className="text-gray-700 text-sm">Baixos níveis de N, P, K e micronutrientes devido à absorção pela cultura anterior</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                  <Zap className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Resíduos Químicos</h4>
                  <p className="text-gray-700 text-sm">Presença de pesticidas, herbicidas e fertilizantes sintéticos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                  <Leaf className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Matéria Orgânica</h4>
                  <p className="text-gray-700 text-sm">Redução da matéria orgânica e alteração da microbiota do solo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Processo de Biorremediação</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-3">1. Bioestimulação</h4>
                <p className="text-green-700 text-sm mb-3">
                  Adição de nutrientes e oxigênio para estimular microrganismos nativos
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Compostagem in situ</li>
                  <li>• Aeração do solo</li>
                  <li>• Correção do pH</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3">2. Bioaumentação</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Introdução de microrganismos específicos para degradação de pesticidas
                </p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Bactérias degradadoras de xenobióticos</li>
                  <li>• Fungos micorrízicos</li>
                  <li>• Consórcios microbianos</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-3">3. Fitorremediação</h4>
                <p className="text-purple-700 text-sm mb-3">
                  Uso de plantas para absorção de contaminantes e restauração da fertilidade
                </p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Plantas de cobertura</li>
                  <li>• Leguminosas fixadoras de nitrogênio</li>
                  <li>• Gramíneas para estruturação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Benefícios da Recuperação</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-700 text-sm">Redução de resíduos de pesticidas</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">70%</div>
              <p className="text-gray-700 text-sm">Melhoria na fertilidade natural</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-gray-700 text-sm">Recuperação da biodiversidade microbiana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraPosColheita;
