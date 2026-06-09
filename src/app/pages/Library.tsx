import { BookOpen, Sparkles, LayoutGrid, Users, Calendar, Trophy, Clock, MessageCircle, Camera, Heart, Quote, ChevronRight, GraduationCap, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Library() {
  const [activeTab, setActiveTab] = useState("ebooks");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [
    { id: "ebooks", name: "Elektron kitoblar", icon: BookOpen, gradient: "from-blue-500 to-cyan-500" },
    { id: "textbooks", name: "Rasmiy darsliklar", icon: GraduationCap, gradient: "from-green-500 to-emerald-500" },
    { id: "guides", name: "O'quv qo'llanmalar", icon: Calendar, gradient: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Kutubxona</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 tracking-tight">
            Elektron{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              kutubxona
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Biz bilan dunyo qarashni kengaytiring! 📚
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-blue-500/25`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <category.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Coming Soon Card - Professional Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl overflow-hidden border-2 border-dashed border-blue-300 dark:border-blue-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-purple-400/10 rounded-full blur-2xl" />
            
            <div className="relative p-8 md:p-10 lg:p-12 text-center">
              <motion.div
                animate={!isMobile ? {
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 shadow-lg"
              >
                <BookOpen className="w-12 h-12 md:w-14 md:h-14 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Tez orada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  kitoblar qo'shiladi
                </span>
              </motion.h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-3">
                Biz bilan dunyo qarashni kengayting! 🌍
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base mb-8">
                Elektron kitoblar, darsliklar va o'quv qo'llanmalari tez kunda sizlar uchun!
              </p>
              
              {/* Admin Info Card */}
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
                    Kitoblar qo'shiladi
                  </p>
                </div>
              </motion.div>
              
              <div className="mt-8 pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>Kuzatib turing! Yangi kitoblar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                  📖 Bilim sari birgalikda! ⭐
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">1000+ Kitob</h3>
              <p className="text-blue-100 text-sm md:text-base">Tez orada kutubxonamizda</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Bepul foydalanish</h3>
              <p className="text-purple-100 text-sm md:text-base">24/7 onlayn rejimda</p>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center py-8 md:py-10 border-t border-gray-200 dark:border-gray-700"
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
            "Kitob o'qish — bilim olishning eng qisqa yo'lidir. O'qigan har bir kitob insonning dunyoqarashini kengaytiradi."
          </p>
          
          <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-3 font-medium">- 69-IDUM kutubxonasi</p>
        </motion.div>
      </div>
    </div>
  );
}