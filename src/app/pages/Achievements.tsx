import { Award, Trophy, Medal, Star, Sparkles, TrendingUp, Users, Calendar, ChevronRight, Quote, Zap, Heart, Crown, Target, Globe, Flame, Shield, Clock, MessageCircle, X, Bell, Gem, Rocket, Infinity } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Achievements() {
  const [showMessage, setShowMessage] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Trophy, value: "?", label: "1-o'rinlar", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { icon: Medal, value: "?", label: "2-o'rinlar", color: "text-gray-500", bg: "bg-gray-50 dark:bg-gray-800" },
    { icon: Award, value: "?", label: "3-o'rinlar", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { icon: Star, value: "?", label: "Jami sovrinlar", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  const categories = [
    { name: "Fan olimpiadalari", icon: Target, count: "?", gradient: "from-blue-500 to-cyan-500" },
    { name: "Sport musobaqalari", icon: Trophy, count: "?", gradient: "from-green-500 to-emerald-500" },
    { name: "Ijodiy tanlovlar", icon: Sparkles, count: "?", gradient: "from-purple-500 to-pink-500" },
    { name: "Ilmiy loyihalar", icon: Rocket, count: "?", gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* Notification Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-20 left-1/2 z-[100]"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl px-5 py-4 shadow-2xl border border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold flex items-center gap-2">
                      Erkinov Ziyodullo
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                    </p>
                    <p className="text-gray-300 text-sm">Yutuqlar tez orada qo'shiladi! ⭐</p>
                  </div>
                  <button 
                    onClick={() => setShowMessage(false)}
                    className="text-gray-400 hover:text-white transition p-1 rounded-full hover:bg-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <motion.div
            animate={!isMobile ? {
              x: [0, 100, 0],
              y: [0, -80, 0],
            } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 md:w-72 md:h-72 bg-yellow-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={!isMobile ? {
              x: [0, -100, 0],
              y: [0, 80, 0],
            } : {}}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-5 md:py-2 mb-6"
          >
            <Gem className="w-4 h-4 text-yellow-500" />
            <span className="text-xs md:text-sm font-medium text-gray-300">Premium ta'lim • 2024-2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight"
          >
            Bizning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Yutuqlarimiz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4"
          >
            Maktabimizning barcha sovrin va yutuqlari tez orada e'lon qilinadi
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gray-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={!isMobile ? { y: -5 } : {}}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon - Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mb-16 md:mb-24"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/5 dark:to-orange-900/5" />
            
            <div className="relative">
              <motion.div
                animate={!isMobile ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-gray-600 dark:text-gray-400" />
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                Tez orada
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6 md:mb-8 px-4">
                Maktabimizning barcha yutuqlari, sovrinlari va mukofotlari ushbu bo'limda e'lon qilinadi.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Admin tomonidan tayyorlanmoqda</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
              Yutuqlar <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-500">kategoriyalari</span>
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Har bir yo'nalish bo'yicha sovrin va mukofotlar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 lg:p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${cat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <cat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base mb-1">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{cat.count} ta sovrin</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preview Placeholder Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
              Kelayotgan <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-500">yutuqlar</span>
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Tez orada qo'shiladigan sovrinlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
            {[1, 2, 3].map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400" />
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-500" />
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative mb-12 md:mb-16 overflow-hidden rounded-2xl md:rounded-3xl"
        >
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 px-6 md:px-8 py-12 md:py-16 lg:py-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
            
            <motion.div
              animate={!isMobile ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4"
            >
              <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />
              <span className="text-xs md:text-sm text-gray-300 font-medium">Cheklangan vaqt</span>
            </motion.div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
              Siz ham bizning jamoamizga qo'shiling!
            </h3>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8 max-w-md mx-auto px-4">
              Farzandingizning iste'dodini rivojlantirish va yangi yutuqlarga erishish imkoniyatini yarating
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Qabulga yozilish</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gray-700 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-600 transition-all duration-300 hover:scale-105"
              >
                <span>Maktab bilan tanishing</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center py-8 md:py-12 border-t border-gray-100 dark:border-gray-800"
        >
          <motion.div
            animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Quote className="w-5 h-5 md:w-6 md:h-6 text-gray-500 dark:text-gray-400" />
          </motion.div>
          
          <p className="text-gray-600 dark:text-gray-400 italic text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            "Har bir yutuq - bu birgalikdagi mehnat, fidoyilik va maqsad sari intilishning natijasidir"
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-red-500" />
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 font-medium">69-IDUM jamoasi</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}