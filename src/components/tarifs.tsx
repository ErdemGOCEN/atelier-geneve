// components/tarifs/Tarifs.tsx
import React from 'react';

interface TarifItem {
  service: string;
  price: string;
}

const Tarifs: React.FC = () => {
  const tariffs: TarifItem[] = [
    { service: "Première heure de réparation sur site", price: "80.- CHF" },
    { service: "Demi-heure supplémentaire sur site", price: "40.- CHF" },
    { service: "Assistance à distance (30 minutes)", price: "30.- CHF" },
    { service: "Installation/Réinstallation Windows ou Mac", price: "100.- CHF" },
    { service: "Installation et Configuration Antivirus", price: "40.- CHF" },
    { service: "Mises à Jour Système & Logiciels", price: "50.- CHF" },
  ];

  return (
    <section 
      id="tarifs" 
      className="py-12 bg-gray-50" 
      style={{ scrollMarginTop: '4rem' }} // 5rem'den 4rem'e düşürüldü
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Tarifs
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="pl-8 pr-2 py-4 text-left text-lg font-bold text-gray-800 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="pl-2 pr-8 py-4 text-right text-lg font-bold text-gray-800 uppercase tracking-wider border-l border-blue-200">
                    Prix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tariffs.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="pl-8 pr-2 py-4 text-sm text-gray-700">
                      {item.service}
                    </td>
                    <td className="pl-2 pr-8 py-4 text-sm text-gray-700 text-right font-medium border-l border-blue-100">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-blue-50">
            <div className="p-6 bg-white rounded-lg border border-blue-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Transparence tarifaire :</span> Tous nos services sont facturés avec transparence et précision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Garantie satisfait ou remboursé :</span> Chaque intervention bénéficie d'une garantie de 3 mois
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Service complet :</span> Votre ordinateur est récupéré à votre adresse et vous est livré une fois réparé
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Suivi personnalisé :</span> Vous êtes informé en temps réel de l'avancement de la réparation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Emballage sécurisé :</span> Votre appareil est soigneusement emballé pour un transport sans risque
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Engagement qualité :</span> Nous ne considérons notre travail comme terminé que lorsque vous êtes pleinement satisfait
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;