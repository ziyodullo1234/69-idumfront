import { Calendar, Users, GraduationCap, Target, BookOpen, Award, Sparkles, Heart, Globe, Clock, Zap, Shield, Star, ChevronRight, Quote, Building2, Library, FlaskConical, Trophy, Laptop, Dumbbell, CheckCircle, MapPin, Phone, Mail, MessageCircle, Code, Camera, ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function About() {
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
    { icon: Calendar, value: "?", label: "Tashkil topgan", color: "blue", gradient: "from-blue-500 to-blue-600" },
    { icon: Users, value: "?", label: "O'quvchilar", color: "green", gradient: "from-green-500 to-emerald-600" },
    { icon: GraduationCap, value: "?", label: "O'qituvchilar", color: "purple", gradient: "from-purple-500 to-indigo-600" },
    { icon: Award, value: "?", label: "Yillik tajriba", color: "orange", gradient: "from-orange-500 to-amber-600" },
  ];

  const facilities = [
    { icon: FlaskConical, title: "Laboratoriyalar", desc: "Tez orada qo'shiladi", color: "blue" },
    { icon: Laptop, title: "Kompyuter xonalari", desc: "Tez orada qo'shiladi", color: "green" },
    { icon: Dumbbell, title: "Sport majmuasi", desc: "Tez orada qo'shiladi", color: "orange" },
    { icon: Library, title: "Kutubxona", desc: "Tez orada qo'shiladi", color: "purple" },
  ];

  const achievements = [
    { year: "2024", title: "Yutuqlar tez orada", icon: Trophy, color: "yellow" },
    { year: "2023", title: "Ma'lumot qo'shiladi", icon: Star, color: "blue" },
    { year: "2022", title: "Kuzatib turing", icon: Award, color: "green" },
  ];

  const values = [
    { icon: Heart, title: "Sifatli ta'lim", desc: "Tez orada qo'shiladi", color: "rose" },
    { icon: Shield, title: "Axloqiy tarbiya", desc: "Tez orada qo'shiladi", color: "blue" },
    { icon: Zap, title: "Innovatsiya", desc: "Tez orada qo'shiladi", color: "amber" },
    { icon: Globe, title: "Xalqaro standart", desc: "Tez orada qo'shiladi", color: "emerald" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
      orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
      yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
      rose: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400",
      amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
      emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={!isMobile ? {
            x: [0, 100, 0],
            y: [0, -100, 0],
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={!isMobile ? {
            x: [0, -100, 0],
            y: [0, 100, 0],
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">69-IDUM • Ta'lim markazi</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight"
          >
            Maktab{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              haqida
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Batafsil ma'lumot tez orada qo'shiladi
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        
        {/* Main Coming Soon Card - Professional Design */}
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
                  y: [0, -8, 0],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 shadow-lg"
              >
                <BookOpen className="w-12 h-12 md:w-14 md:h-14 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Tez orada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  batafsil ma'lumot qo'shiladi
                </span>
              </motion.h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-3">
                Maktab tarixi, statistikasi va barcha ma'lumotlar
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base mb-6">
                Biz maktabimiz haqida to'liq va batafsil ma'lumotni tayyorlamoqdamiz.<br />
                Tez kunda barcha statistikalar va ma'lumotlar bilan!
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Kuzatib turing! Ma'lumotlar tez kunda</span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ⭐ Sifatli ta'lim sari birgalikda! ⭐
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              whileHover={!isMobile ? { y: -5 } : {}}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-5 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${getColorClasses(stat.color)} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                <stat.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* History & Achievements Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
          
          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Tariximiz</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-5">
              Maktab tarixi
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">Tez orada</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Ma'lumot qo'shiladi</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kuzatib turing</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1.5 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Yutuqlar</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-5">
              So'nggi yutuqlar
            </h2>
            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={!isMobile ? { x: 5 } : {}}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-10 h-10 ${getColorClasses(item.color)} rounded-lg flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400">
                        {item.year}
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white text-sm md:text-base">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </motion.div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Ma'lumotlar <strong className="text-gray-800 dark:text-white">tez orada</strong> qo'shiladi
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-7 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Maqsadimiz</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Vazifamiz</h3>
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Ma'lumot tez orada qo'shiladi. Kuzatib turing!
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-10">
            <motion.div
              animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-flex"
            >
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-500 dark:text-rose-400 mx-auto mb-3" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Asosiy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">qadriyatlar</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + idx * 0.05 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-14 h-14 ${getColorClasses(item.color)} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-10">
            <Building2 className="w-8 h-8 md:w-10 md:h-10 text-purple-500 dark:text-purple-400 mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Maktab <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">imkoniyatlari</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {facilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + idx * 0.05 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-14 h-14 ${getColorClasses(item.color)} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Director Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={!isMobile ? { y: -5 } : {}}
          className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-8 md:p-10 text-center mb-12 md:mb-16 shadow-xl"
        >
          <Quote className="w-10 h-10 md:w-12 md:h-12 text-gray-600 dark:text-gray-700 mx-auto mb-4" />
          <p className="text-white text-base md:text-lg lg:text-xl italic max-w-2xl mx-auto leading-relaxed">
            "Direktorimizning xabari tez orada qo'shiladi. Kuzatib turing!"
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-4 font-medium">— 69-IDUM jamoasi</p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={!isMobile ? { y: -3 } : {}}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 md:p-10 text-center shadow-xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
            Tez orada batafsil ma'lumot
          </h3>
          <p className="text-blue-100 text-sm md:text-base mb-6">
            Maktabimiz haqida to'liq ma'lumot tez kunda
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Bog'lanish
            </a>
            <a 
              href="https://t.me/erkinovziyodullo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </a>
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 md:mt-12 text-center pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <a 
            href="https://t.me/erkinovziyodullo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:gap-3"
          >
            <Code className="w-4 h-4" />
            <span>Erkinov Ziyodullo</span>
            <MessageCircle className="w-4 h-4" />
            <span>@erkinovziyodullo</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}