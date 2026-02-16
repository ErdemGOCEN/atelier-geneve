import React from 'react';
import { Check } from "lucide-react";

interface TarifItem {
  service: string;
  price: string;
}

const Tarifs: React.FC = () => {
  const tariffs: TarifItem[] = [
    { service: "Première heure de réparation", price: "80 CHF" },
    { service: "Demi-heure supplémentaire", price: "40 CHF" },
    { service: "Assistance à distance (30 minutes)", price: "30 CHF" },
    { service: "Installation/Réinstallation Windows ou Mac", price: "100 CHF" },
    { service: "Installation et Configuration Antivirus", price: "40 CHF" },
    { service: "Mises à Jour Système & Logiciels", price: "50 CHF" },
  ];

  const advantages = [
    "Transparence tarifaire précise",
    "Garantie satisfaction 3 mois",
    "Service de livraison à domicile",
    "Suivi de réparation en direct",
    "Engagement qualité certifié",
    "Support client réactif"
  ];

  return (
    <section 
      id="tarifs" 
      className="py-12 lg:py-16 bg-white" 
      style={{ scrollMarginTop: '2rem' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Başlık - Services bölümüyle standart hale getirildi */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Nos <span className="text-sky-blue">Tarifs</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Des prix clairs et transparents pour tous vos besoins informatiques à Genève.
          </p>
        </div>
        
        {/* Fiyat Listesi - Temiz ve Okunaklı */}
        <div className="mb-12">
          <div className="divide-y divide-slate-100 border-t border-b border-slate-50">
            {tariffs.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-4 sm:py-5 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-slate-800 text-base sm:text-xl font-semibold pr-4">
                  {item.service}
                </span>
                <span className="text-blue-600 font-bold text-lg sm:text-2xl whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Avantajlar - Standart Okunabilir Font */}
        <div className="grid gap-y-5 gap-x-8 sm:grid-cols-2">
          {advantages.map((text, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-full p-1.5 flex-shrink-0">
                <Check className="h-5 w-5 text-green-600" strokeWidth={3} />
              </div>
              <span className="text-base sm:text-xl text-slate-700 font-semibold leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tarifs;