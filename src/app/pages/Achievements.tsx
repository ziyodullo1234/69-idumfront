import { Award, Trophy, Medal, Star, Sparkles, TrendingUp, Users, Calendar, ChevronRight, Quote, Zap, Heart, Crown, Target, Globe, Flame, Shield, Clock, MessageCircle, X, Bell, Gem, Rocket, Infinity } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Achievements() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Trophy, value: "?", label: "1-o'rinlar", color: "text-yellow-600", bg: "bg-yellow-50" },
    { icon: Medal, value: "?", label: "2-o'rinlar", color: "text-gray-500", bg: "bg-gray-50" },
    { icon: Award, value: "?", label: "3-o'rinlar", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Star, value: "?", label: "Jami sovrinlar", color: "text-blue-600", bg: "bg-blue-50" },
  ];

  const categories = [
    { name: "Fan olimpiadalari", icon: Target, count: "?" },
    { name: "Sport musobaqalari", icon: Trophy, count: "?" },
    { name: "Ijodiy tanlovlar", icon: Sparkles, count: "?" },
    { name: "Ilmiy loyihalar", icon: Rocket, count: "?" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Notification Message */}
      {showMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] animate-slide-down">
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-gray-800 rounded-2xl px-5 py-4 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Erkinov Ziyodullo</p>
                  <p className="text-gray-300 text-sm">Yutuqlar tez orada qo'shiladi! ⭐</p>
                </div>
                <button 
                  onClick={() => setShowMessage(false)}
                  className="text-gray-400 hover:text-white transition p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-5 py-2 mb-6">
            <Gem className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-300">Premium ta'lim • 2024-2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Bizning
            <span className="block text-gray-300">
              Yutuqlarimiz
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Maktabimizning barcha sovrin va yutuqlari tez orada e'lon qilinadi
          </p>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${stat.bg} dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon - Main Card */}
        <div className="relative mb-24">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 md:p-16 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-gray-600 dark:text-gray-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Tez orada
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                Maktabimizning barcha yutuqlari, sovrinlari va mukofotlari ushbu bo'limda e'lon qilinadi.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Admin tomonidan tayyorlanmoqda</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Preview */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Yutuqlar <span className="text-gray-600 dark:text-gray-400">kategoriyalari</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Har bir yo'nalish bo'yicha sovrin va mukofotlar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <cat.icon className="w-7 h-7 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{cat.name}</h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{cat.count} ta sovrin</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Placeholder Items */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Kelayotgan <span className="text-gray-600 dark:text-gray-400">yutuqlar</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Tez orada qo'shiladigan sovrinlar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="h-1 bg-gray-200 dark:bg-gray-700" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-16 mt-1 animate-pulse" />
                      </div>
                    </div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3 animate-pulse" />
                    <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-2/3 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mb-16 overflow-hidden rounded-3xl bg-gray-800">
          <div className="relative px-8 py-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-700 rounded-full px-4 py-1.5 mb-4">
              <Rocket className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-300 font-medium">Cheklangan vaqt</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siz ham bizning jamoamizga qo'shiling!
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
              Farzandingizning iste'dodini rivojlantirish va yangi yutuqlarga erishish imkoniyatini yarating
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <span>Qabulga yozilish</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all"
              >
                <span>Maktab bilan tanishing</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-12 border-t border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Quote className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 italic text-lg max-w-2xl mx-auto">
            "Har bir yutuq - bu birgalikdagi mehnat, fidoyilik va maqsad sari intilishning natijasidir"
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-red-500" />
            <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">69-IDUM jamoasi</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translate(-50%, -30px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}