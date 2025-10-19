
import React from 'react';
import { Beaker, Leaf, Recycle } from 'lucide-react';

const OQueE = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é Biorremediação?</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong className="text-green-600">biorremediação</strong> é um processo biotecnológico que utiliza 
              organismos vivos, como bactérias, fungos, plantas e outros microrganismos, para degradar, 
              transformar ou neutralizar poluentes presentes no meio ambiente.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Esta tecnologia representa uma abordagem sustentável e eficaz para a descontaminação 
              de solos, águas e ar, aproveitando os processos metabólicos naturais dos organismos 
              para converter substâncias tóxicas em compostos menos prejudiciais ou inertes.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Principais Vantagens:</h4>
              <ul className="text-green-700 space-y-2">
                <li>• Processo ambientalmente sustentável</li>
                <li>• Custo-efetivo comparado a métodos físico-químicos</li>
                <li>• Não gera resíduos secundários perigosos</li>
                <li>• Pode ser aplicado in situ ou ex situ</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Beaker className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Biorremediação Microbiana</h4>
              </div>
              <p className="text-gray-700">Utiliza bactérias e fungos para degradar contaminantes orgânicos e metais pesados.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Fitorremediação</h4>
              </div>
              <p className="text-gray-700">Emprega plantas para absorver, acumular ou transformar poluentes do solo e água.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Recycle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Bioaumentação</h4>
              </div>
              <p className="text-gray-700">Introduz microrganismos específicos para acelerar a degradação de contaminantes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OQueE;
