import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OQueE from '../components/sections/OQueE';
import TerraVermelha from '../components/sections/TerraVermelha';
import TerraPosColheita from '../components/sections/TerraPosColheita';
import TerraVegetal from '../components/sections/TerraVegetal';
import SensorArduino from '../components/sections/SensorArduino';
import PerguntasRespostas from '../components/sections/PerguntasRespostas';
import Sobre from '../components/sections/Sobre';
const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    // Scroll suave para a seção se não for home
    if (section !== 'home') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      
      {/* Hero sempre visível */}
      <Hero />
      
      {/* Seções do conteúdo */}
      <div id="o-que-e">
        <OQueE />
      </div>
      
      <div id="terra-vermelha">
        <TerraVermelha />
      </div>
      
      <div id="terra-pos-colheita">
        <TerraPosColheita />
      </div>
      
      <div id="terra-vegetal">
        <TerraVegetal />
      </div>
      
      <div id="sensor-arduino">
        <SensorArduino />
      </div>
      
      <div id="perguntas-respostas">
        <PerguntasRespostas />
      </div>
      
      <div id="sobre">
        <Sobre />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-green-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2025 - Trabalho Escolar sobre Biorremediação e Tecnologia
          </p>
          <p className="text-sm text-gray-500 mt-2">Escola Estadual de Ensino Básico Albino Fantin - Horizontina, Rio Grande do Sul</p>
        </div>
      </footer>
    </div>;
};
export default Index;