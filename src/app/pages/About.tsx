import { Calendar, Users, GraduationCap, Target, BookOpen, Award, Sparkles, Heart, Globe, Clock, Zap, Shield, Star, ChevronRight, Quote, Building2, Library, FlaskConical, Trophy, Laptop, Dumbbell, CheckCircle, MapPin, Phone, Mail, MessageCircle, Code } from "lucide-react";
import { useState, useEffect } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState({});

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
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, value: "?", label: "Tashkil topgan", color: "blue" },
    { icon: Users, value: "?", label: "O'quvchilar", color: "green" },
    { icon: GraduationCap, value: "?", label: "O'qituvchilar", color: "purple" },
    { icon: Award, value: "?", label: "Yillik tajriba", color: "orange" },
  ];

  const facilities = [
    { icon: FlaskConical, title: "Laboratoriyalar", desc: "Tez orada", color: "blue" },
    { icon: Laptop, title: "Kompyuter xonalari", desc: "Tez orada", color: "green" },
    { icon: Dumbbell, title: "Sport majmuasi", desc: "Tez orada", color: "orange" },
    { icon: Library, title: "Kutubxona", desc: "Tez orada", color: "purple" },
  ];

  const achievements = [
    { year: "2024", title: "Yutuqlar tez orada", icon: Trophy, color: "yellow" },
    { year: "2023", title: "Ma'lumot qo'shiladi", icon: Star, color: "blue" },
    { year: "2022", title: "Kuzatib turing", icon: Award, color: "green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
        
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
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
        
        .animate-border-pulse {
          animation: borderPulse 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
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
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Hero Qismi */}
      <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 dark:from-blue-950 dark:to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">69-IDUM • Tez orada</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Maktab 
            <span className="gradient-text"> haqida</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
            Batafsil ma'lumot tez orada qo'shiladi
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Coming Soon Card */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift animate-border-pulse">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
              <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tez orada <span className="gradient-text">batafsil ma'lumot qo'shiladi</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              Maktab tarixi, statistikasi va barcha ma'lumotlar
            </p>
            
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Biz maktabimiz haqida to'liq va batafsil ma'lumotni tayyorlamoqdamiz.<br />
              Tez kunda barcha statistikalar va ma'lumotlar bilan!
            </p>
            
            <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Kuzatib turing! Ma'lumotlar tez kunda</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                ⭐ Sifatli ta'lim sari birgalikda! ⭐
              </p>
            </div>
          </div>
        </div>

        {/* Statistikalar - Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition hover-lift animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Maktab Tarixi - Placeholder */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400">Tariximiz</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Maktab tarixi</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400">Tez orada</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Ma'lumot qo'shiladi</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kuzatib turing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Yutuqlar - Placeholder */}
          <div className="animate-on-scroll delay-1">
            <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm text-yellow-600 dark:text-yellow-400">Yutuqlar</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">So'nggi yutuqlar</h2>
            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition">
                  <div className={`w-10 h-10 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">{item.year}</span>
                      <span className="font-medium text-gray-800 dark:text-white">{item.title}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ma'lumotlar <strong className="text-gray-800 dark:text-white">tez orada</strong> qo'shiladi
              </p>
            </div>
          </div>
        </div>

        {/* Maqsad va Vazifa - Placeholder */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl p-6 text-white hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6" />
              <h3 className="text-xl font-bold">Maqsadimiz</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 dark:from-green-800 dark:to-emerald-900 rounded-xl p-6 text-white hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold">Vazifamiz</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
          </div>
        </div>

        {/* Qadriyatlar - Placeholder */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Heart className="w-8 h-8 text-rose-500 dark:text-rose-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Asosiy qadriyatlar</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Heart, title: "Sifatli ta'lim", desc: "Tez orada", color: "rose" },
              { icon: Shield, title: "Axloqiy tarbiya", desc: "Tez orada", color: "blue" },
              { icon: Zap, title: "Innovatsiya", desc: "Tez orada", color: "amber" },
              { icon: Globe, title: "Xalqaro standart", desc: "Tez orada", color: "emerald" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-center hover:shadow-lg transition hover-lift">
                <div className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imkoniyatlar - Placeholder */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Building2 className="w-8 h-8 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Maktab imkoniyatlari</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition hover-lift">
                <div className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direktor Sitati - Placeholder */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-950 rounded-xl p-8 text-center mb-16 hover-lift">
          <Quote className="w-10 h-10 text-gray-600 dark:text-gray-700 mx-auto mb-4" />
          <p className="text-white text-lg italic max-w-2xl mx-auto leading-relaxed">
            "Direktorimizning xabari tez orada qo'shiladi. Kuzatib turing!"
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-4">— 69-IDUM jamoasi</p>
        </div>

        {/* Bog'lanish va CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 rounded-xl p-8 text-center hover-lift">
          <h3 className="text-2xl font-bold text-white mb-2">Tez orada batafsil ma'lumot</h3>
          <p className="text-blue-100 mb-6">Maktabimiz haqida to'liq ma'lumot tez kunda</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Bog'lanish
            </a>
            <a href="https://t.me/erkinovziyodullo" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-5 py-2 rounded-lg font-medium hover:bg-white/10 transition flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Telegram
            </a>
          </div>
        </div>

        {/* Developer Info */}
        <div className="mt-8 text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <a 
            href="https://t.me/erkinovziyodullo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Code className="w-4 h-4" />
            <span>Erkinov Ziyodullo</span>
            <MessageCircle className="w-4 h-4" />
            <span>@erkinovziyodullo</span>
          </a>
        </div>
      </div>
    </div>
  );
}