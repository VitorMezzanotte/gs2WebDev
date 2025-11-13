import React, { useState, useEffect, useMemo } from 'react';
import profilesData from './data/profiles.json'; 
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';
import SearchBar from './components/SearchBar'; // Import da SearchBar

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para a busca
  
  // Aplica a classe 'dark' ao corpo do HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Função de filtro principal
  const filteredProfiles = useMemo(() => {
    if (!searchTerm) {
      return profilesData;
    }
    
    // Prepara o termo de busca: minúsculo e sem acentos para busca robusta
    const lowerCaseSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return profilesData.filter(profile => {
      // 1. Função auxiliar para normalizar e buscar em strings
      const normalizeAndIncludes = (text) => {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(lowerCaseSearchTerm);
      }
      
      // 2. Função auxiliar para normalizar e buscar em arrays de strings
      const arrayIncludes = (arr) => {
        return arr.some(item => normalizeAndIncludes(item));
      }
      
      // 3. Critérios de Busca (Combina todos os requisitos do projeto: Área, Cidade, Tecnologia)
      const matchesName = normalizeAndIncludes(profile.nome);
      const matchesCargo = normalizeAndIncludes(profile.cargo);
      const matchesLocalizacao = normalizeAndIncludes(profile.localizacao); 
      const matchesArea = normalizeAndIncludes(profile.area); 
      const matchesSkills = arrayIncludes(profile.habilidadesTecnicas); // Tecnologia
      
      // O perfil é retornado se corresponder a qualquer um dos critérios
      return matchesName || matchesCargo || matchesLocalizacao || matchesArea || matchesSkills;
    });
  }, [searchTerm]); // Re-calcula apenas quando o termo de busca muda

  // Funções de controle do Modal
  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  }
  
  // Função para atualizar o estado do termo de busca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            ConnectingIn
          </h1>
          
          {/* Botão de Toggle para Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Renderiza a Barra de Busca e Filtros */}
        <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            profilesCount={filteredProfiles.length}
        />

        {/* Mensagem se não houver resultados */}
        {filteredProfiles.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md mt-6">
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                    Nenhum profissional encontrado para "{searchTerm}".
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Tente refinar sua busca por nome, área ou tecnologia.
                </p>
            </div>
        )}
        
        {/* Grade de Cards de Profissionais (usa a lista filtrada) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map(profile => (
            <ProfileCard
              key={profile.Id}
              profile={profile}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </main>

      {/* Renderização condicional do Modal */}
      {isModalOpen && selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;