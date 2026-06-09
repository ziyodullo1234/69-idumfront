import { Camera, LayoutGrid, Building2, Users, Calendar, Trophy, Sparkles, Clock, Heart, Quote, Image, FolderOpen, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Gallery() {
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
    { id: "all", name: "Hammasi", icon: LayoutGrid, gradient: "from-blue-500 to-cyan-500" },
    { id: "building", name: "Maktab binosi", icon: Building2, gradient: "from-green-500 to-emerald-500" },
    { id: "classes", name: "Dars jarayoni", icon: Users, gradient: "from-purple-500 to-pink-500" },
    { id: "events", name: "Tadbirlar", icon: Calendar, gradient: "from-orange-500 to-red-500" },
    { id: "sports", name: "Sport", icon: Trophy, gradient: "from-yellow-500 to-amber-500" },
  ];

  // Preview placeholder items
  const previewItems = [1, 2, 3, 4, 5, 6];

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
            <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Galereya</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 tracking-tight">
            Maktab{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              galereyasi
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Maktab hayotidan lavhalar va esdalik suratlar
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
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
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
                <Camera className="w-12 h-12 md:w-14 md:h-14 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Tez orada{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  rasmlar qo'shiladi
                </span>
              </motion.h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-6">
                Maktab hayotidan eng yaxshi lavhalar va esdalik suratlar
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
                    Rasmlar qo'shiladi
                  </p>
                </div>
              </motion.div>
              
              <div className="mt-8 pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>Kuzatib turing! Yangi rasmlar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                  📸 Maktab hayotining eng chiroyli lahzalari! ⭐
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preview Gallery Grid - Blur Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Kelayotgan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">galereya</span>
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Tez orada qo'shiladigan rasmlar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {previewItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.05 }}
                whileHover={!isMobile ? { y: -5 } : {}}
                className="group relative cursor-pointer"
              >
                {/* Blur Preview Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl z-10 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-white/90 dark:bg-gray-800/90 rounded-xl px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 shadow-lg"
                  >
                    <Camera className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
                    <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Tez orada</span>
                  </motion.div>
                </div>
                
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-12 h-12 md:w-16 md:h-16 text-gray-400 dark:text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs md:text-sm font-medium">Rasm {item}</p>
                    <p className="text-white/60 text-xs">Tez orada</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
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
            "Har bir surat — maktab hayotining bir parchasi, esdalik va kelajak uchun meros"
          </p>
          
          <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-3 font-medium">- 69-IDUM galereyasi</p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 md:p-6 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">500+ Surat</h3>
                <p className="text-blue-100 text-xs md:text-sm">Tez orada galereyamizda</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5 } : {}}
            className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-5 md:p-6 text-white shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Doimiy yangilanadi</h3>
                <p className="text-purple-100 text-xs md:text-sm">Har oy yangi rasmlar qo'shiladi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}