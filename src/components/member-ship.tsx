import React from "react";
import WhatsAppLink from "./whatsapp-link";

const infos = [
  { id: "1", value: "500+", title: "Clients Satisfaits" },
  { id: "2", value: "200+", title: "Interventions / mois" },
  { id: "3", value: "5", title: "Experts Certifiés" },
  { id: "4", value: "8+", title: "Ans d'Expérience" },
];

export default function MemberShip() {
  return (
    <section id="statistiques" className="relative bg-white">
      {/* Üst Banner Alanı */}
      <div className="py-24 lg:py-44 bg-[url('/laptop-repair.webp')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-sky-blue/70 absolute inset-0 -z-1" />

        <div className="px-4 md:px-6 container mx-auto text-white relative z-20">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-balance tracking-tight leading-tight">
              Service informatique <span className="text-sky-300">professionnel</span> à Genève
            </h2>
            <p className="text-blue-50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Atelier Genève vous propose des solutions complètes pour particuliers et professionnels. Une équipe d'experts certifiés pour protéger vos données.
            </p>
            <div className="flex justify-center pt-4">
              <div className="scale-110">
                <WhatsAppLink title="Nous Contacter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İstatistik Alanı - Daha Belirgin ve "Oturan" Tasarım */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-6xl mx-auto -mt-16 lg:-mt-24">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-around overflow-hidden relative">
            
            {/* Arka plan dekoratif vurgusu (Barın altına renk katmak için) */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-sky-blue" />

            {infos.map((info, index) => (
              <React.Fragment key={info.id}>
                <div className="flex flex-col items-center justify-center px-10 py-6 lg:py-0 flex-1 group w-full lg:w-auto">
                  <span className="text-sky-blue text-5xl lg:text-6xl font-black mb-2 transition-transform group-hover:scale-105 duration-300">
                    {info.value}
                  </span>
                  <span className="text-slate-500 text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-center">
                    {info.title}
                  </span>
                </div>
                
                {/* Ayırıcı Çizgi - Mobilde yatay, Masaüstünde dikey */}
                {index + 1 < infos.length && (
                  <>
                    <div className="hidden lg:block bg-slate-200 w-px h-20" />
                    <div className="lg:hidden bg-slate-100 h-px w-2/3" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Boşluk - Bir sonraki bölümle arayı açar */}
      <div className="h-24 lg:h-32" />
    </section>
  );
}