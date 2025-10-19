
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSoilTypeClick = (soilType: string) => {
    onNavigate(soilType);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-xl sm:text-2xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors"
            onClick={() => handleNavClick('home')}
          >
            Biorremediação & Tecnologia
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => handleNavClick('o-que-e')}
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
              onClick={() => handleNavClick('sensor-arduino')}
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sensor Arduino
            </button>
            
            <button
              onClick={() => handleNavClick('sobre')}
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sobre
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-green-600 p-2 rounded-md transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('o-que-e')}
                className="text-left text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                O que é
              </button>
              
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between"
                >
                  Tipos de Solo
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="mt-1 ml-4 space-y-1">
                    <button
                      onClick={() => handleSoilTypeClick('terra-vermelha')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                    >
                      Terra Vermelha
                    </button>
                    <button
                      onClick={() => handleSoilTypeClick('terra-pos-colheita')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                    >
                      Terra Pós-Colheita
                    </button>
                    <button
                      onClick={() => handleSoilTypeClick('terra-vegetal')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                    >
                      Terra Vegetal
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleNavClick('sensor-arduino')}
                className="text-left text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sensor Arduino
              </button>
              
              <button
                onClick={() => handleNavClick('sobre')}
                className="text-left text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
