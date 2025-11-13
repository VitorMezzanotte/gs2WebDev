import React from 'react';

// O componente recebe um objeto 'profile' como propriedade (prop)
const ProfileCard = ({ profile, onCardClick }) => {
  // Acesso direto às propriedades do JSON
  const { nome, foto, cargo, resumo, habilidadesTecnicas, localizacao } = profile;

  // Renderiza apenas as primeiras 4 habilidades técnicas para o Card Básico
  const visibleSkills = habilidadesTecnicas.slice(0, 4);

  return (
    // Card Container. Usa 'cursor-pointer' para simular a interatividade do Modal.
    // O 'dark:...' garante o modo escuro.
    <div 
      className="
        bg-white dark:bg-gray-800 
        shadow-lg hover:shadow-xl 
        rounded-xl overflow-hidden 
        transition duration-300 ease-in-out transform hover:scale-[1.02]
        p-6 border border-gray-100 dark:border-gray-700
        cursor-pointer
      "
      onClick={() => onCardClick(profile)} // Função para abrir o modal com o perfil
    >
      <div className="flex items-start space-x-4">
        {/* Foto do Perfil */}
        <div className="flex-shrink-0 w-16 h-16">
          <img
            src={profile.foto.replace(/^\.\//, '/')}
            alt={`Foto de perfil de ${nome}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500" 
          />
        </div>

        {/* Informações Básicas */}
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {nome}
          </h2>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {cargo}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {localizacao} | {resumo.substring(0, 40)}...
          </p>
        </div>
      </div>
      
      {/* Principais Skills */}
      <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Principais Habilidades:
        </p>
        <div className="flex flex-wrap gap-2">
          {visibleSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
            >
              {skill}
            </span>
          ))}
          {habilidadesTecnicas.length > 4 && (
             <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
               +{habilidadesTecnicas.length - 4} mais
             </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;