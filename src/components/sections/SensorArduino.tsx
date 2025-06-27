import React from 'react';
import { Cpu, Zap, Droplets, BarChart3, Lightbulb } from 'lucide-react';

const SensorArduino = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sensor Arduino para Análise de Solo</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sistema desenvolvido para medir e testar as propriedades dos diferentes tipos de terra utilizando tecnologia Arduino
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/13a21e56-4f03-405d-882e-54998a7c8ebc.png" 
                alt="Sensor Arduino montado em protoboard" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">Componentes do Sistema</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arduino UNO</h4>
                  <p className="text-gray-700 text-sm">Microcontrolador principal para processamento dos dados coletados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sensor de Umidade</h4>
                  <p className="text-gray-700 text-sm">Mede o nível de umidade presente no solo analisado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LED Indicador</h4>
                  <p className="text-gray-700 text-sm">Sinalização visual dos resultados das medições</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Protoboard</h4>
                  <p className="text-gray-700 text-sm">Base para conexões e montagem do circuito</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Funcionamento do Sistema</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3">1. Coleta de Dados</h4>
                <p className="text-blue-700 text-sm mb-3">
                  O sensor de umidade é inserido no solo para medir a quantidade de água presente
                </p>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 text-sm font-medium">Medição contínua em tempo real</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-3">2. Processamento</h4>
                <p className="text-green-700 text-sm mb-3">
                  O Arduino processa os dados coletados e os converte em valores compreensíveis
                </p>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 text-sm font-medium">Análise digital dos resultados</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-800 mb-3">3. Indicação Visual</h4>
                <p className="text-yellow-700 text-sm mb-3">
                  LEDs indicam diferentes níveis de umidade através de cores específicas
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-sm">Solo Seco (valor > 800)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-yellow-600 text-sm">Solo Úmido (valor > 400)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Solo Molhado (valor ≤ 400)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Aplicações no Projeto</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Comparação de Solos</h4>
              <p className="text-sm opacity-90">
                Permite comparar a umidade entre terra vermelha, pós-colheita e vegetal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Monitoramento</h4>
              <p className="text-sm opacity-90">
                Acompanha as mudanças de umidade durante processos de biorremediação
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Dados Precisos</h4>
              <p className="text-sm opacity-90">
                Fornece medições confiáveis para análise científica dos diferentes tipos de terra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensorArduino;
