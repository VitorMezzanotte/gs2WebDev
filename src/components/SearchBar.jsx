import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, profilesCount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        
        {/* Input de Busca Principal */}
        <div className="flex-grow w-full">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Buscar Profissionais por Nome, Cargo, Área, Localização ou Tecnologia
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2.5"
              placeholder="Ex: Engenheiro, São Paulo, React, Design"
              value={searchTerm}
              onChange={onSearchChange}
            />
          </div>
        </div>

        {/* Display do Contador de Resultados */}
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Profissionais Encontrados</p>
          <span className="block text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {profilesCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;