import { Award, BookOpen, Users, Target, Quote, Star, Sparkles, ChevronRight, Heart, Clock, MessageCircle, Code, Camera, Image } from "lucide-react";

export function Director() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #9ca3af 0%, #d1d5db 50%, #9ca3af 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .dark .shimmer-text {
          background: linear-gradient(90deg, #4b5563 0%, #6b7280 50%, #4b5563 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .blur-image {
          filter: blur(8px);
          background: linear-gradient(135deg, #9ca3af 0%, #d1d5db 100%);
        }
        
        .dark .blur-image {
          background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">69-IDUM • Rahbariyat</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in-up">
              Direktor
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up">
              Sifatli ta'lim va barkamol avlod tarbiyasi — asosiy maqsadimiz
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Coming Soon Card */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
                <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Tez orada <span className="text-blue-600 dark:text-blue-400">qo'shiladi</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                Direktor haqida to'liq ma'lumot va rasmiy sahifa
              </p>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Kuzatib turing! Yangi ma'lumotlar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  ⭐ Sifatli ta'lim sari birgalikda! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card - Blurred/Coming Soon Style */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 mb-16 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Placeholder - Blurred */}
              <div className="relative h-[500px] md:h-auto blur-image flex items-center justify-center">
                <div className="text-center relative z-10">
                  <Camera className="w-16 h-16 text-white/50 mx-auto mb-3" />
                  <p className="text-white/60">Tez orada rasm</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <p className="text-white text-sm">📅 Tez orada</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <p className="text-white text-sm">⭐ Tez orada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Placeholder - Blurred Text */}
              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm mb-4">
                    <Users className="w-4 h-4" />
                    Rahbar
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-1">
                    <span className="shimmer-text">Direktor ism familiyasi</span>
                  </h2>
                  <p className="text-lg shimmer-text">Tez orada</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Lavozimi</p>
                      <p className="font-medium shimmer-text">Maktab direktori</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                      <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Ma'lumoti</p>
                      <p className="font-medium shimmer-text">Tez orada qo'shiladi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                      <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Mutaxassisligi</p>
                      <p className="font-medium shimmer-text">Tez orada qo'shiladi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section - Coming Soon */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Mukofot va Yutuqlar
              </h3>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid sm:grid-cols-3 gap-5">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">🏆</div>
                  <h4 className="font-bold shimmer-text mb-1">Tez orada</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400 shimmer-text">Ma'lumot qo'shiladi</p>
                </div>
              ))}
            </div>
          </div>

          {/* Director Message - Blurred */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-3xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-slate-700 dark:bg-slate-800 p-8 md:p-10 flex items-center justify-center">
                <Quote className="w-16 h-16 text-slate-500 dark:text-slate-600" />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Direktor so'zi</h3>
                <div className="space-y-4 text-slate-200 leading-relaxed">
                  <p className="shimmer-text">
                    Direktorning xabari tez orada qo'shiladi. Kuzatib turing!
                  </p>
                  <p className="shimmer-text">
                    Maktabimiz haqida barcha ma'lumotlar va direktorimizning faoliyati haqida to'liq ma'lumot tez kunda e'lon qilinadi.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400">Hurmat bilan,</p>
                  <p className="text-lg font-semibold shimmer-text">Direktor ism familiyasi</p>
                  <p className="text-sm text-slate-400">Maktab direktori</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision - Coming Soon */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Maqsadimiz</h4>
              <p className="shimmer-text leading-relaxed">
                Ma'lumot tez orada qo'shiladi. Kuzatib turing!
              </p>
              <div className="mt-4 flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span>Tez orada</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Vazifamiz</h4>
              <p className="shimmer-text leading-relaxed">
                Ma'lumot tez orada qo'shiladi. Kuzatib turing!
              </p>
              <div className="mt-4 flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                <span>Tez orada</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}