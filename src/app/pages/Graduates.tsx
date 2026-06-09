import { GraduationCap, Award, TrendingUp, Users, Star, MapPin, Globe, Clock, MessageCircle, Heart, Quote, Sparkles, Rocket, ChevronRight, Calendar, Trophy, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Graduates() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { value: "?", label: "Bitiruvchilar", icon: GraduationCap, color: "blue", gradient: "from-blue-500 to-cyan-500" },
    { value: "?", label: "OTMga kirdi", icon: TrendingUp, color: "green", gradient: "from-green-500 to-emerald-500" },
    { value: "?", label: "Diplom bilan", icon: Award, color: "orange", gradient: "from-orange-500 to-amber-500" },
    { value: "?", label: "Chet elda", icon: Globe, color: "purple", gradient: "from-purple-500 to-pink-500" },
  ];

  const upcomingYears = [2025, 2024, 2023];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <motion.div
          animate={!isMobile ? {
            x: [0, 100, 0],
            y: [0, -80, 0],
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-64 h-64 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={!isMobile ? {
            x: [0, -100, 0],
            y: [0, 80, 0],
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-80 h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-5 shadow-lg"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs md:text-sm font-medium">69-IDUM • Bitiruvchilar</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight"
          >
            Bitiruvchilar
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Maktabimiz bitiruvchilarining yutuqlari va muvaffaqiyatlari
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Main Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="relative bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl overflow-hidden border-2 border-dashed border-blue-300 dark:border-blue-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
            
            <div className="relative p-8 md:p-10 lg:p-12 text-center">
              <motion.div
                animate={!isMobile ? {
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 shadow-lg"
              >
                <GraduationCap className="w-12 h-12 md:w-14 md:h-14 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Tez orada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  ma'lumotlar qo'shiladi
                </span>
              </motion.h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-3">
                Bitiruvchilarimizning yutuqlari va muvaffaqiyatlari
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base mb-8">
                So'nggi yillardagi bitiruvchilarimizning OTM larga kirish natijalari,<br />
                grantlar va yutuqlar tez kunda e'lon qilinadi!
              </p>
              
              {/* Admin Info */}
              <motion.div
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-4 py-2.5 md:px-5 md:py-3 shadow-md"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                  EZ
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">Erkinov Ziyodullo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Ma'lumotlar qo'shiladi
                  </p>
                </div>
              </motion.div>
              
              <div className="mt-8 pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>Kuzatib turing! Statistikalar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                  🎓 Muvaffaqiyatlar sari birgalikda! ⭐
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              whileHover={!isMobile ? { y: -5 } : {}}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Year Cards */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-10">
            <motion.div
              animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-flex"
            >
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
            </motion.div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
              Yillar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">bo'yicha</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">So'nggi yillardagi statistikalar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {upcomingYears.map((year, idx) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`bg-gradient-to-r ${idx === 0 ? 'from-blue-600 to-indigo-700' : idx === 1 ? 'from-indigo-600 to-purple-700' : 'from-purple-600 to-pink-700'} p-5 md:p-6`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{year} yil</h3>
                    <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-1.5 md:px-4 md:py-2">
                      <span className="text-lg md:text-xl font-bold text-white">?</span>
                      <span className="text-xs text-white/80 ml-1">o'quvchi</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-white">?</div>
                      <div className="text-xs text-blue-200">OTMga kirdi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-white">?</div>
                      <div className="text-xs text-blue-200">Diplom bilan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-white">?</div>
                      <div className="text-xs text-blue-200">Chet elda</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 shadow-md">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">⭐ Muvaffaqiyat tarixi</h3>
              <p className="text-green-100 text-sm md:text-base leading-relaxed">
                Bitiruvchilarimizning OTM larga kirish natijalari, xorijiy grantlar va 
                yutuqlar haqida to'liq ma'lumot tez orada e'lon qilinadi.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">📊 Statistikalar</h3>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                Bitiruvchilar statistikasi, qabul ko'rsatkichlari va muvaffaqiyat 
                ko'rsatkichlari tez kunda sizlar bilan!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center py-8 md:py-10 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div
            animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex"
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-400 dark:text-rose-500 mx-auto mb-3" />
          </motion.div>
          
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
          
          <p className="text-gray-600 dark:text-gray-400 italic text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            "Har bir bitiruvchi — maktabimizning faxri. Ularning yutuqlari bizning eng katta mukofotimizdir."
          </p>
          
          <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-3 font-medium">- 69-IDUM jamoasi</p>
        </motion.div>
      </div>
    </div>
  );
}