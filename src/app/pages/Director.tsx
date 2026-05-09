import { Award, BookOpen, Users, Target, Quote, Star, Sparkles, ChevronRight, Heart } from "lucide-react";

export function Director() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Zamonaviy va toza */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Maktab Rahbariyati</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Direktor
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sifatli ta'lim va barkamol avlod tarbiyasi — asosiy maqsadimiz
          </p>
          <div className="mt-8">
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-2 bg-slate-500 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Asosiy Kontent */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Profil Kartasi */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-20">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Rasm Tomoni */}
            <div className="relative h-[500px] md:h-auto bg-gradient-to-br from-slate-200 to-slate-100">
              <img 
                src="/websayt.jpg" 
                alt="Direktor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5">
                    <p className="text-white text-sm">📅 28 yillik tajriba</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5">
                    <p className="text-white text-sm">⭐ 12 yil direktorlik</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ma'lumot Tomoni */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
                  <Users className="w-4 h-4" />
                  Rahbar
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
                  Erkinov Ziyodullo
                </h2>
                <p className="text-lg text-slate-500">Rahimovich</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Lavozimi</p>
                    <p className="font-medium text-slate-700">Maktab direktori</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Ma'lumoti</p>
                    <p className="font-medium text-slate-700">Pedagogika fanlari nomzodi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Mutaxassisligi</p>
                    <p className="font-medium text-slate-700">Matematika o'qituvchisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mukofotlar Bo'limi */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              Mukofot va Yutuqlar
            </h3>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">🏆</div>
              <h4 className="font-bold text-slate-800 mb-1">A'lo darajali o'qituvchi</h4>
              <p className="text-sm text-orange-600">2018</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="font-bold text-slate-800 mb-1">Xalq ta'limi ustasi</h4>
              <p className="text-sm text-blue-600">2020</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">🎯</div>
              <h4 className="font-bold text-slate-800 mb-1">Eng yaxshi direktor</h4>
              <p className="text-sm text-purple-600">2022</p>
            </div>
          </div>
        </div>

        {/* Direktor So'zi */}
        <div className="bg-slate-800 rounded-3xl overflow-hidden mb-20">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-slate-700 p-8 md:p-10 flex items-center justify-center">
              <Quote className="w-16 h-16 text-slate-500" />
            </div>
            <div className="md:col-span-3 p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Direktor so'zi</h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  Hurmatli o'quvchilar, ota-onalar va hamkasblar! 12-sonli umumiy o'rta ta'lim maktabi jamoasi nomidan barchangizni salomlayman.
                </p>
                <p>
                  Maktabimiz 1985-yildan buyon 850 dan ortiq o'quvchiga sifatli ta'lim berib kelmoqda. 60 nafar malakali pedagog xodimlarimiz bilan birgalikda kelajak avlodni tarbiyalaymiz.
                </p>
                <p>
                  Maqsadimiz — har bir o'quvchini zamonaviy talablar darajasida bilimli, vatanparvar va barkamol inson qilib tayyorlash.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">Hurmat bilan,</p>
                <p className="text-lg font-semibold">Erkinov Ziyodullo Rahimovich</p>
                <p className="text-sm text-slate-400">Maktab direktori</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maqsad va Vazifa */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-slate-800 mb-3">Maqsadimiz</h4>
            <p className="text-slate-600 leading-relaxed">
              Har bir o'quvchini bilimli, axloqli va vatanparvar qilib tarbiyalash. 
              Ularning iste'dodini aniqlash va rivojlantirish uchun barcha sharoitlarni yaratish.
            </p>
            <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium">
              <span>Batafsil</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-slate-800 mb-3">Vazifamiz</h4>
            <p className="text-slate-600 leading-relaxed">
              Zamonaviy ta'lim texnologiyalarini joriy etish, o'quvchilarga sifatli bilim berish 
              va ularni mustaqil fikrlashga o'rgatish.
            </p>
            <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium">
              <span>Batafsil</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}