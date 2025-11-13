import React, { useState, useEffect } from 'react';
import profilesData from './data/profiles.json'; 
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal'; // ⬅️ NOVO: Import do Modal

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  // Aplica a classe 'dark' ao corpo do HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Função chamada ao clicar no Card
  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  
  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null); // Limpa o perfil selecionado
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Global Solution Talent Hub
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
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Encontre o talento certo para o futuro.
          </h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Exibindo {profilesData.length} profissionais cadastrados.
          </p>
        </div>

        {/* Grade de Cards de Profissionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profilesData.map(profile => (
            <ProfileCard
              key={profile.Id}
              profile={profile}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </main>

      {/* ⬅️ NOVO: Renderização condicional do Modal */}
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