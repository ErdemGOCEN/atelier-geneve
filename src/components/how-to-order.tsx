
import { PhoneCall, SearchCheck, Wrench } from "lucide-react";

const steps = [
  {
    id: "1",
    icon: <PhoneCall className="size-10 text-sky-blue" />, 
    title: "Consultation Gratuite",
    content: "Contactez-nous pour une évaluation gratuite de votre problème informatique. Notre expert analyse votre besoin et vous propose la meilleure solution.",
  },
  {
    id: "2",
    icon: <SearchCheck className="size-10 text-sky-blue" />, 
    title: "Diagnostic & Devis",
    content: "Nous réalisons un diagnostic complet de votre appareil et vous fournissons un devis détaillé avec les tarifs ve les délais de réalisation.",
  },
  {
    id: "3",
    icon: <Wrench className="size-10 text-sky-blue" />, 
    title: "Intervention & Support",
    content: "Notre équipe intervient rapidement pour réparer votre ordinateur, installer vos logiciels ou sécuriser votre système. Support continu à Genève.",
  },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="py-20 lg:py-40 bg-slate-50/50 relative overflow-hidden">
      <div className="px-4 md:px-6 container mx-auto relative z-10">
        
        {/* Başlık Alanı - Standartlara Uygun */}
        <div className="space-y-6 text-center mb-20 lg:mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance max-w-4xl mx-auto">
            Comment obtenir nos <span className="text-sky-blue">services</span> à Genève
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Un processus simple, rapide et transparent pour retrouver un matériel performant en trois étapes clés.
          </p>
        </div>

        {/* Adımlar - Grid Yapısı ile Ebatlar Eşitlendi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-stretch relative">
          
          {/* Masaüstü için Arka Plan Kesikli Çizgi */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-sky-blue/20 -z-0 transform -translate-y-16" />

          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex">
              <article className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-xl border border-slate-100 text-center flex flex-col items-center w-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                
                {/* Adım Numarası */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 lg:left-14 lg:translate-x-0 w-12 h-12 bg-sky-blue text-white rounded-full flex items-center justify-center font-black shadow-lg z-20 text-lg">
                  {index + 1}
                </div>
                
                {/* İkon Kutusu */}
                <div className="bg-sky-50 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 shrink-0 transition-colors group-hover:bg-sky-100">
                  {step.icon}
                </div>
                
                {/* Metin Alanı - flex-grow Boyları Eşit Tutar */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                    {step.content}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Dekoratif Arka Plan Elemanı (İsteğe Bağlı) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-sky-blue/5 rounded-full blur-3xl -z-0" />
    </section>
  );
}