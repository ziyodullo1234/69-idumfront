import { Calendar, Users, GraduationCap, Target, BookOpen, Award, Sparkles, Heart, Globe, Clock, Zap, Shield, Star, ChevronRight, Quote, Building2, Library, FlaskConical, Trophy, Laptop, Dumbbell, CheckCircle, MapPin, Phone, Mail, Play } from "lucide-react";
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
    { icon: Calendar, value: "1985", label: "Tashkil topgan", color: "blue" },
    { icon: Users, value: "850+", label: "O'quvchilar", color: "green" },
    { icon: GraduationCap, value: "60+", label: "O'qituvchilar", color: "purple" },
    { icon: Award, value: "39", label: "Yillik tajriba", color: "orange" },
  ];

  const facilities = [
    { icon: FlaskConical, title: "Laboratoriyalar", desc: "Fizika, kimyo, biologiya", color: "blue" },
    { icon: Laptop, title: "Kompyuter xonalari", desc: "50 ta kompyuter", color: "green" },
    { icon: Dumbbell, title: "Sport majmuasi", desc: "Zamonaviy sport zali", color: "orange" },
    { icon: Library, title: "Kutubxona", desc: "15000+ kitob", color: "purple" },
  ];

  const achievements = [
    { year: "2024", title: "Eng innovatsion maktab", icon: Trophy, color: "yellow" },
    { year: "2023", title: "Xalqaro olimpiada", icon: Star, color: "blue" },
    { year: "2022", title: "Eng yaxshi maktab", icon: Award, color: "green" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
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
      <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">69-IDUM • 39 yillik an'ana</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Maktab 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"> haqida</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            39 yillik tarix, 850+ o'quvchi va 60+ malakali pedagog
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Statistikalar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="text-xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Maktab Tarixi */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">Tariximiz</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Maktab tarixi</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-600">1985</div>
                  <h3 className="font-semibold text-gray-800">Maktab ochilishi</h3>
                  <p className="text-sm text-gray-500">400 o'quvchi, 35 o'qituvchi bilan</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-purple-600">2018</div>
                  <h3 className="font-semibold text-gray-800">Yangilanish</h3>
                  <p className="text-sm text-gray-500">Maktab ta'miri va jihozlanish</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-green-600">2024</div>
                  <h3 className="font-semibold text-gray-800">Raqamlashtirish</h3>
                  <p className="text-sm text-gray-500">Zamonaviy texnologiyalar joriy etildi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Yutuqlar */}
          <div className="animate-on-scroll delay-1">
            <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-yellow-600">Yutuqlar</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">So'nggi yutuqlar</h2>
            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-yellow-600">{item.year}</span>
                      <span className="font-medium text-gray-800">{item.title}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <p className="text-sm text-gray-600">
                Jami: <strong className="text-gray-800">5000+ bitiruvchi</strong> tayyorlandi
              </p>
            </div>
          </div>
        </div>

        {/* Maqsad va Vazifa */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6" />
              <h3 className="text-xl font-bold">Maqsadimiz</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Har bir o'quvchini bilimli, axloqli va vatanparvar qilib tayyorlash. Iste'dodlarni aniqlash va rivojlantirish.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold">Vazifamiz</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Zamonaviy ta'lim texnologiyalaridan foydalanib, sifatli ta'lim berish va o'quvchilarni mustaqil fikrlashga o'rgatish.
            </p>
          </div>
        </div>

        {/* Qadriyatlar */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-gray-800">Asosiy qadriyatlar</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Heart, title: "Sifatli ta'lim", desc: "Zamonaviy uslublar", color: "rose" },
              { icon: Shield, title: "Axloqiy tarbiya", desc: "Yuksak axloq", color: "blue" },
              { icon: Zap, title: "Innovatsiya", desc: "Yangi texnologiyalar", color: "amber" },
              { icon: Globe, title: "Xalqaro standart", desc: "Jahon talablari", color: "emerald" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imkoniyatlar */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Building2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-gray-800">Maktab imkoniyatlari</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direktor Sitati */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center mb-16">
          <Quote className="w-10 h-10 text-gray-600 mx-auto mb-4" />
          <p className="text-white text-lg italic max-w-2xl mx-auto leading-relaxed">
            "Har bir bola - bu dunyo. Bizning vazifamiz - ularga o'z dunyosini kashf etishga yordam berish"
          </p>
          <p className="text-gray-400 mt-4">— 69-IDUM jamoasi</p>
        </div>

        {/* Bog'lanish va CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Farzandingiz kelajagi uchun to'g'ri tanlov</h3>
          <p className="text-blue-100 mb-6">Maktabimiz haqida batafsil ma'lumot oling</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Bog'lanish
            </button>
            <button className="border border-white/30 text-white px-5 py-2 rounded-lg font-medium hover:bg-white/10 transition flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Elektron pochta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}