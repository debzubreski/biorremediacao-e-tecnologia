
import React from 'react';
import { School, MapPin, Users, Calendar } from 'lucide-react';

const Sobre = () => {
  const alunas = [
    "Antonela Secchi Conzati",
    "Débora Zubreski", 
    "Nicoly Sieben",
    "Roberta Hosel"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosso Trabalho</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Este website é resultado de um trabalho escolar dedicado ao estudo da biorremediação e suas aplicações tecnológicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações do Projeto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <School className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instituição</h4>
                  <p className="text-gray-700">Escola Estadual de Ensino Básico Albino Fantin</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                  <p className="text-gray-700">Horizontina, Rio Grande do Sul</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ano Letivo</h4>
                  <p className="text-gray-700">2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tipo de Trabalho</h4>
                  <p className="text-gray-700">Trabalho Escolar - Pesquisa em Biotecnologia Ambiental</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipe Responsável</h3>
            
            <div className="space-y-4 mb-6">
              {alunas.map((aluna, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {aluna.split(' ').map(nome => nome[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{aluna}</h4>
                    <p className="text-sm text-gray-600">Estudante</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">Objetivo do Projeto</h4>
              <p className="text-green-700 text-sm">
                Este trabalho tem como objetivo principal oferecer um maior conhecimento a todos sobre a importância da biorremediação, 
                destacando sua relevância como tecnologia sustentável para a recuperação de solos contaminados. 
                Através desta pesquisa, buscamos contribuir para a educação ambiental e promover a conscientização 
                sobre soluções biotecnológicas aplicadas à preservação do meio ambiente.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Nosso Compromisso</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Através deste trabalho, buscamos contribuir para a disseminação do conhecimento sobre 
            biorremediação, destacando a importância das tecnologias ambientais sustentáveis 
            para o futuro do nosso planeta e das próximas gerações.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pesquisa</h4>
              <p className="text-sm opacity-90">Investigação científica aplicada</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Educação</h4>
              <p className="text-sm opacity-90">Disseminação do conhecimento</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Sustentabilidade</h4>
              <p className="text-sm opacity-90">Tecnologias ambientais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
