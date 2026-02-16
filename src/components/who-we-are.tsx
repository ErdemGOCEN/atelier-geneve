import Image from "@/components/ui/image-with-fallback";
import WhatsAppLink from "./whatsapp-link";

export default function WhoWeAre() {
  return (
    <section id="a-propos" className="bg-white overflow-hidden">
      <div className="px-4 md:px-6 container mx-auto py-12 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Metin kısmı: Mobilde ilk sırada, masaüstünde solda */}
          <div className="space-y-6 text-center lg:text-left order-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Votre expert en <span className="text-sky-blue">réparation informatique</span> à Genève
            </h2>
            
            <div className="space-y-4">
              <p className="text-slate-600 text-base md:text-xl leading-relaxed">
                Atelier Genève est votre partenaire de confiance pour tous vos besoins informatiques. Nos techniciens certifiés interviennent rapidement pour réparer vos ordinateurs.
              </p>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
                Avec plus de 8 ans d'expérience à Genève, nous garantissons un service professionnel pour particuliers et professionnels.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start pt-2">
              <WhatsAppLink title="Discuter Avec Nous" />
            </div>
          </div>

          {/* Görsel kısmı: Boşluklar temizlendi */}
          <div className="relative order-2 lg:h-full">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-[300px] sm:h-[400px] lg:h-[550px] w-full">
              <Image 
                src={"/glad-customer.webp"} 
                alt="client satisfait Atelier Genève" 
                className="w-full h-full object-cover object-center" 
              />
              {/* object-cover ve h-full sayesinde alttaki boşluk kapandı */}
            </div>

            {/* Müşteri Notu: Mobilde daha küçük, masaüstünde daha belirgin */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-4 lg:p-6 flex flex-col items-center border border-slate-100">
              <p className="text-sky-blue text-3xl lg:text-5xl font-black">4.8</p>
              <p className="text-slate-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest mt-1 text-center leading-none">
                Note Clients
              </p>
              <div className="flex mt-2 scale-75 lg:scale-100">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}