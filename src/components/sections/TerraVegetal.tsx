
import React from 'react';
import { Waves, TreePine, Fish } from 'lucide-react';

const TerraVegetal = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terra Vegetal</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solo rico em matéria orgânica encontrado em áreas próximas a rios e zonas ripárias
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Especiais</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Influência Hídrica</h4>
                  <p className="text-gray-700">
                    Solo formado pela deposição de sedimentos ricos em nutrientes transportados pela água, 
                    resultando em alta fertilidade natural e presença constante de umidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rica Biodiversidade</h4>
                  <p className="text-gray-700">
                    Abriga uma comunidade microbiana diversificada, incluindo bactérias fixadoras de nitrogênio, 
                    fungos micorrízicos e outros microrganismos benéficos para as plantas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Fish className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ecossistema Aquático</h4>
                  <p className="text-gray-700">
                    Funciona como zona de transição entre ambientes terrestres e aquáticos, 
                    desempenhando papel crucial na filtragem natural de nutrientes e poluentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Composição Ideal</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-green-800">Matéria Orgânica</span>
                  <span className="text-green-600 font-bold">5-8%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-blue-800">Umidade</span>
                  <span className="text-blue-600 font-bold">25-35%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-800">pH</span>
                  <span className="text-purple-600 font-bold">6.0-7.0</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-yellow-800">Atividade Microbiana</span>
                  <span className="text-yellow-600 font-bold">Alta</span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Potencial para Biorremediação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Vantagens Naturais:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Comunidade microbiana estabelecida</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Alta capacidade de retenção de nutrientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Condições ideais de umidade e pH</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Resistência natural a contaminantes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Aplicações Específicas:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Tratamento de águas contaminadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Filtros biológicos naturais</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Remediação de metais pesados</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Produção de biomassa microbiana</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraVegetal;
