import { Mail, Phone, Award, BookOpen, Users, Star, Clock, GraduationCap, Heart, Trophy, Sparkles, ChevronRight, MessageCircle, Code, Camera, Image, UserPlus, Calendar, Briefcase, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Teachers() {
  const [selectedCategory, setSelectedCategory] = useState("all");
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
    { id: "all", name: "Hammasi" },
    { id: "high", name: "Oliy toifali" },
    { id: "first", name: "1-toifali" },
    { id: "young", name: "Yosh mutaxassislar" },
  ];

  // Preview teachers (faqat ko'rinish uchun)
  const previewTeachers = [
    { id: 1, name: "Ism Familiya", subject: "Fan nomi", category: "Oliy toifali", experience: "?" },
    { id: 2, name: "Ism Familiya", subject: "Fan nomi", category: "1-toifali", experience: "?" },
    { id: 3, name: "Ism Familiya", subject: "Fan nomi", category: "Yosh mutaxassis", experience: "?" },
    { id: 4, name: "Ism Familiya", subject: "Fan nomi", category: "Oliy toifali", experience: "?" },
  ];

  const getCategoryColor = (category) => {
    if (category === 'Oliy toifali') return 'from-amber-400 to-orange-500';
    if (category === '1-toifali') return 'from-blue-400 to-indigo-500';
    return 'from-emerald-400 to-teal-500';
  };

  const getCategoryBadgeClass = (category) => {
    if (category === 'Oliy toifali') return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400';
    if (category === '1-toifali') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400';
    return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Pedagogik jamoa</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            O'qituvchilar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">jamoasi</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bizning tajribali va malakali pedagog jamoamiz
          </p>
        </motion.div>

        {/* Coming Soon Banner - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={!isMobile ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <Camera className="w-7 h-7 md:w-8 md:h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">📸 O'qituvchilar rasmi</h3>
                    <p className="text-white/80 text-sm md:text-base">Tez orada o'qituvchilarimizning rasmlari qo'shiladi</p>
                  </div>
                </div>
                <motion.a 
                  href="https://t.me/erkinovziyodullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-full px-5 py-2.5 transition-all duration-300 backdrop-blur-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">@erkinovziyodullo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Coming Soon Card - Professional Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <div className="relative bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
            
            {/* Animated Dots */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
            
            <div className="relative p-8 md:p-12 text-center">
              <motion.div
                animate={!isMobile ? {
                  y: [0, -10, 0],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 shadow-lg"
              >
                <GraduationCap className="w-14 h-14 md:w-16 md:h-16 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Tez orada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  o'qituvchilar rasmi qo'shiladi
                </span>
              </motion.h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-3">
                Barcha o'qituvchilarimiz haqida to'liq ma'lumot
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base mb-8">
                O'qituvchilarimizning rasmlari, malaka toifalari va tajribalari <br className="hidden sm:block" />
                tez kunda sizlar bilan!
              </p>
              
              {/* Telegram Contact Card */}
              <motion.div
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl px-5 py-3 shadow-md"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ma'lumot uchun:</p>
                  <a 
                    href="https://t.me/erkinovziyodullo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    @erkinovziyodullo
                  </a>
                </div>
              </motion.div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-blue-500"
                    />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Kuzatib turing!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Teachers Preview Grid - Blurred Preview Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-7 mb-14 md:mb-20"
        >
          {previewTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={!isMobile ? { y: -5 } : {}}
              className="group relative"
            >
              {/* Preview Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/40 rounded-2xl z-10 backdrop-blur-[2px] flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
                >
                  <Camera className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tez orada</span>
                </motion.div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 opacity-80">
                {/* Image Placeholder */}
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${getCategoryColor(teacher.category)}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <UserPlus className="w-14 h-14 text-white/30 mx-auto mb-2" />
                      <p className="text-xs text-white/50">Rasm qo'shiladi</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3 z-20">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${getCategoryBadgeClass(teacher.category)}`}>
                      {teacher.category}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 z-20">
                    <div className="flex items-center gap-2 text-white text-xs">
                      <Briefcase className="w-3 h-3" />
                      <span>Tajriba: {teacher.experience} yil</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full mb-2">
                      {teacher.subject}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                      {teacher.name}
                    </h3>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <p className="line-clamp-2">Ma'lumot tez orada qo'shiladi</p>
                  </div>
                  
                  {/* Contact Buttons Preview */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all py-2 rounded-lg">
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all py-2 rounded-lg">
                      <Phone className="w-3.5 h-3.5" />
                      Telefon
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-5 md:gap-7 mt-8"
        >
          <motion.div
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Malaka oshirish</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Barcha o'qituvchilarimiz muntazam ravishda malaka oshirish kurslarida qatnashadilar 
              va zamonaviy ta'lim metodlarini o'rganishadi.
            </p>
          </motion.div>
          
          <motion.div
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-800 rounded-2xl p-6 md:p-7 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Tajriba almashish</h3>
            </div>
            <p className="text-purple-100 leading-relaxed">
              O'qituvchilarimiz respublika va xalqaro darajadagi konferensiya, seminar va treninglarda 
              faol ishtirok etadilar.
            </p>
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-14 md:mt-20 text-center py-8 md:py-10 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div
            animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex"
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-red-400 dark:text-red-500 mx-auto mb-4" />
          </motion.div>
          
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
          
          <p className="text-gray-600 dark:text-gray-400 italic text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            "Eng yaxshi o'qituvchi - bu bilim berish bilan birga, o'quvchining qalbini ham tarbiyalaydigan ustozdir"
          </p>
          
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 font-medium">- 69-IDUM pedagogik jamoasi</p>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 md:mt-10 text-center"
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