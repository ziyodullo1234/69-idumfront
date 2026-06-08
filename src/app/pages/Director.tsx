import { 
  Award, BookOpen, Users, Target, Quote, Star, Sparkles, 
  ChevronRight, Heart, Clock, MessageCircle, Camera, BellRing,
  Mail, Phone, GraduationCap, Trophy, BadgeCheck 
} from "lucide-react";
import { useState, useEffect } from "react";

export function Director() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      
      {/* Notification Banner */}
      {showNotification && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <BellRing className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white">
                    <span className="font-bold">✨ Tez kunda!</span> Direktor bo'limi to'liq ma'lumot bilan yangilanadi.
                  </p>
                </div>
                <button
                  onClick={() => setShowNotification(false)}
                  className="text-white/80 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-32 md:pt-32 md:pb-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">69-IDUM • Rahbariyat</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Direktor
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            "Sifatli ta'lim va barkamol avlod tarbiyasi — asosiy maqsadimiz"
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Coming Soon Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Users className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Direktor haqida to'liq ma'lumot
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            To'liq ma'lumot va rasmiy sahifa tez orada taqdim etiladi.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-5 py-2">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">Kontent tayyorlanmoqda</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            {/* Image Placeholder */}
            <div className="h-[400px] md:h-auto bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                  <Camera className="w-10 h-10 text-white/70" />
                </div>
                <p className="text-white/80">Rasm tez orada</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                <BadgeCheck className="w-3 h-3" />
                Rahbar
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Direktor ism familiyasi
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Maktab direktori</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Lavozimi</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Oliy toifali pedagog</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Ma'lumoti</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Tez orada qo'shiladi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Mutaxassisligi</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Tez orada qo'shiladi</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:shadow-lg transition-all">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Aloqa
                  </button>
                  <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Bog'lanish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 rounded-full px-3 py-1 mb-3">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-amber-700 dark:text-amber-400">Mukofotlar</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Yutuq va Mukofotlar
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mt-3" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { medal: "🏆", title: "Eng yaxshi direktor", year: "2024" },
              { medal: "🥇", title: "Milliy ta'lim mukofoti", year: "2023" },
              { medal: "🏅", title: "Xalqaro sertifikat", year: "2023" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-5 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-2">{item.medal}</div>
                <h4 className="font-bold text-gray-800 dark:text-white">{item.title}</h4>
                <p className="text-sm text-amber-600 dark:text-amber-400">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Director Message */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 md:p-8 flex items-center justify-center">
              <Quote className="w-12 h-12 text-white/30" />
            </div>
            <div className="md:col-span-3 p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Direktor so'zi
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>Hurmatli o'quvchilar, ota-onalar va hamkasblar!</p>
                <p className="text-blue-300">
                  Direktorning to'liq xabari va murojaati tez orada qo'shiladi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">Hurmat bilan,</p>
                <p className="text-lg font-semibold text-blue-300">Direktor ism familiyasi</p>
                <p className="text-sm text-gray-400">69-IDUM direktori</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Maqsadimiz</h4>
            <p className="text-gray-600 dark:text-gray-400">
              To'liq ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
            <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm">
              <span>Tez orada</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vazifamiz</h4>
            <p className="text-gray-600 dark:text-gray-400">
              To'liq ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
            <div className="mt-4 flex items-center gap-1 text-green-600 text-sm">
              <span>Tez orada</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}