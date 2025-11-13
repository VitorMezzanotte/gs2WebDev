import React from 'react';

const ProfileModal = ({ profile, onClose }) => {
  if (!profile) return null;

  // Desestruturando o objeto profile para facilitar o acesso
  const {
    nome, foto, cargo, resumo, localizacao, area, 
    habilidadesTecnicas, softSkills, experiencias, formacao, 
    projetos, certificacoes, idiomas, areaInteresses
  } = profile;

  // Função para simular a ação dos botões (Requisito: "Devem estar funcionando" [cite: 15])
  const handleAction = (action) => {
    alert(`Ação: ${action} para ${nome}. (Funcionalidade simulada)`);
  };

  return (
    // Overlay: Fundo escuro fixo para cobrir a tela (Dark Mode compatível)
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4" 
      onClick={onClose} // Fecha ao clicar fora do modal
    >
      
      {/* Container do Modal: Responsivo e com Scroll interno */}
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 transform scale-100"
        onClick={e => e.stopPropagation()} // Impede o fechamento ao clicar dentro
      >
        
        {/* Header do Modal */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white truncate">
            Perfil de {nome}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Corpo do Modal com conteúdo detalhado */}
        <div className="p-6 space-y-8">
          
          {/* Seção 1: Informações Pessoais e Resumo [cite: 12] */}
          <section className="flex flex-col md:flex-row items-start md:space-x-6 pb-6 border-b border-gray-100 dark:border-gray-800">
            <img
              src={foto.replace('./images', 'src/assets/images')} // Adapte o path conforme seu setup
              alt={`Foto de ${nome}`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-indigo-500 mb-4 md:mb-0 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{cargo}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{localizacao} | {area}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{resumo}"
              </p>
            </div>
          </section>

          {/* Seção de Botões de Ação [cite: 15] */}
          <div className="flex space-x-4">
            <button 
              onClick={() => handleAction("Recomendar")}
              className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-150"
            >
              Recomendar Profissional
            </button>
            <button
              onClick={() => handleAction("Enviar Mensagem")}
              className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-150"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Seção 2: Habilidades Técnicas e Soft Skills [cite: 13, 14] */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 border-b-2 border-indigo-500 pb-1">Habilidades Técnicas (Hard Skills)</h4>
              <div className="flex flex-wrap gap-2">
                {habilidadesTecnicas.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 border-b-2 border-indigo-500 pb-1">Habilidades Comportamentais (Soft Skills)</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm font-medium rounded-full bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Seção 3: Experiências Profissionais [cite: 13] */}
          <section>
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-indigo-500 pb-1">Experiência Profissional</h4>
            <div className="space-y-4">
              {experiencias.map((exp, index) => (
                <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <p className="font-semibold text-gray-900 dark:text-white">{exp.cargo} na {exp.empresa}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.inicio} - {exp.fim || 'Atual'}</p>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 4: Formação Acadêmica e Certificações [cite: 12] */}
          <section>
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-indigo-500 pb-1">Formação e Certificações</h4>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">Formação:</p>
                    {formacao.map((item, index) => (
                        <div key={index} className="text-sm text-gray-700 dark:text-gray-300">
                            <p className="font-medium">{item.curso} - {item.instituicao}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Ano de Conclusão: {item.ano}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-3">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">Certificações:</p>
                    <div className="flex flex-wrap gap-2">
                        {certificacoes.map((cert, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full border border-yellow-500 text-yellow-800 dark:text-yellow-300 dark:bg-yellow-900/50">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </section>
          
          {/* Seção 5: Projetos, Idiomas e Interesses [cite: 14] */}
          <section>
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b-2 border-indigo-500 pb-1">Projetos e Interesses Adicionais</h4>
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Projetos/Portfólio:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        {projetos.map((proj, index) => (
                            <li key={index}>
                                <a 
                                    href={proj.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition"
                                >
                                    {proj.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Idiomas:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-violet-700">
                        {idiomas.map((lang, index) => (
                            <li key={index}>
                                {lang.idioma} ({lang.nivel})
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-semibold text-indigo-400 dark:text-gray-300 mb-2">Áreas de Interesse:</p>
                    <div className="flex flex-wrap gap-1">
                        {areaInteresses.map((interest, index) => (
                            <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </section>
          
        </div>

        {/* Footer com botão de fechar (opcional, já tem no header) */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-right">
             <button
                onClick={onClose}
                className="py-2 px-6 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition"
            >
                Fechar
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;