import { Award, Trophy, Medal, Star, Sparkles, TrendingUp, Users, Calendar, ChevronRight, Quote, Zap, Heart, Crown, Target, Globe, Flame, Shield, Clock, AlertCircle, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Achievements() {
  const [activeTab, setActiveTab] = useState('all');
  const [showComingSoon, setShowComingSoon] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    // 3 sekunddan keyin xabarni yashirish
    const timer = setTimeout(() => {
      setShowComingSoon(false);
    }, 5000);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const stats = [
    { icon: Trophy, value: "?", label: "1-o'rinlar", color: "yellow", gradient: "from-yellow-400 to-yellow-600", trend: "Tez orada" },
    { icon: Medal, value: "?", label: "2-o'rinlar", color: "gray", gradient: "from-gray-400 to-gray-600", trend: "Tez orada" },
    { icon: Award, value: "?", label: "3-o'rinlar", color: "orange", gradient: "from-orange-400 to-orange-600", trend: "Tez orada" },
    { icon: Star, value: "?", label: "Jami yutuqlar", color: "blue", gradient: "from-blue-400 to-blue-600", trend: "Tez orada" },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.25);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shine 2s infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .dark .gradient-text {
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        
        /* Dark mode styles */
        .dark .bg-gradient-to-b {
          background: linear-gradient(to bottom, #111827, #1f2937);
        }
        
        .dark .bg-white {
          background-color: #1f2937;
        }
        
        .dark .text-gray-900 {
          color: #f3f4f6;
        }
        
        .dark .text-gray-600 {
          color: #9ca3af;
        }
        
        .dark .border-gray-100 {
          border-color: #374151;
        }
        
        .dark .bg-gray-100 {
          background-color: #374151;
        }
        
        .dark .bg-gray-50 {
          background-color: #111827;
        }
        
        .dark .from-gray-50 {
          --tw-gradient-from: #111827;
        }
        
        .dark .to-gray-50 {
          --tw-gradient-to: #1f2937;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Hero Section - Dark mode responsive */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 dark:bg-yellow-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20 dark:border-white/10">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white font-medium">Yutuqlar • 2024-2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Bizning <span className="gradient-text">Yutuqlarimiz</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
                O'quvchilarimizning fan, sport va ijod sohasidagi muvaffaqiyatlari
              </p>
            </div>
          </div>        
          
          {/* Wave - Dark mode responsive */}
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" className="text-gray-50 dark:text-gray-900" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Coming Soon Banner */}
        {showComingSoon && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl shadow-2xl p-4 max-w-md mx-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Erkinov Ziyodullo</p>
                  <p className="text-white/80 text-sm">Yutuqlar tez orada admin tomonidan qo'shiladi! 🎉</p>
                </div>
                <button 
                  onClick={() => setShowComingSoon(false)}
                  className="text-white/60 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stats Section - Coming Soon style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-6 text-center hover-lift animate-on-scroll relative overflow-hidden`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute top-2 right-2">
                  <div className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
                    {stat.trend}
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Coming Soon Main Card */}
          <div className="mb-16 animate-on-scroll">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 text-center border-2 border-dashed border-indigo-300 dark:border-indigo-700">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-float">
                <Trophy className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Yutuqlar <span className="text-indigo-600 dark:text-indigo-400">tez orada</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Administrator tomonidan qo'shiladi. Maktabimizning barcha yutuqlari va sovrinlari shu yerda e'lon qilinadi.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Tez kunda</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Admin nazoratida</span>
                </div>
              </div>
              
              {/* Admin Info */}
              <div className="mt-8 pt-6 border-t border-indigo-200 dark:border-indigo-800/50">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    EZ
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Erkinov Ziyodullo</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Administrator • Yutuqlar bo'limi</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Tez orada barcha yutuqlar va sovrinlar qo'shiladi. Kuzatib turing! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Preview Cards - Showing coming soon style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-70"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                          <Target className="w-3 h-3" />
                          <span className="dark:text-gray-300">Tez orada</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400">
                      Yangi
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Yutuq nomi
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <Users className="w-4 h-4" />
                    <p className="text-sm">Tez orada qo'shiladi</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>2025 yil</span>
                    </div>
                    <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                      <span className="text-sm">Kutilmoqda</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Message Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl p-8 text-white animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl animate-pulse-glow">
                👨‍💻
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Erkinov Ziyodullo</h3>
                <p className="text-white/90 mb-3">
                  Hurmatli o'quvchilar va ota-onalar! Maktabimizning barcha yutuqlari tez orada ushbu bo'limda to'liq e'lon qilinadi. 
                  Biz eng yaxshi natijalarni sizlar bilan baham ko'rishga tayyorlanmoqdamiz.
                </p>
                <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm bg-white/20 rounded-full px-3 py-1">
                    <Sparkles className="w-3 h-3" />
                    <span>1 hafta ichida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white/20 rounded-full px-3 py-1">
                    <Trophy className="w-3 h-3" />
                    <span>50+ yutuq kutilmoqda</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">✨</div>
                <p className="text-sm text-white/80">Tez orada</p>
              </div>
            </div>
          </div>

          {/* Quote Section - Dark mode responsive */}
          <div className="mt-12 text-center py-10 border-t border-gray-200 dark:border-gray-700 animate-on-scroll">
            <Quote className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">
              "Har bir yutuq - bu birgalikdagi mehnat, fidoyilik va maqsad sari intilishning natijasidir"
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Heart className="w-4 h-4 text-red-400 dark:text-red-500" />
              <p className="text-sm text-gray-500 dark:text-gray-500">69-IDUM jamoasi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}