
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSoilTypeClick = (soilType: string) => {
    onNavigate(soilType);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-2xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors"
            onClick={() => onNavigate('home')}
          >
            Biorremediação & Tecnologia
          </div>
          
          <nav className="flex space-x-8">
            <button
              onClick={() => onNavigate('o-que-e')}
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              O que é
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
              >
                Tipos de Solo
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-green-100 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleSoilTypeClick('terra-vermelha')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Terra Vermelha
                    </button>
                    <button
                      onClick={() => handleSoilTypeClick('terra-pos-colheita')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Terra Pós-Colheita
                    </button>
                    <button
                      onClick={() => handleSoilTypeClick('terra-vegetal')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Terra Vegetal
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => onNavigate('sobre')}
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sobre
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
