import { Link } from "react-router";
import {
  Users,
  Award,
  Image as ImageIcon,
  Phone,
  Newspaper,
  ArrowRight,
  BookOpen,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Heart,
  Sparkles,
  Quote,
  ChevronRight,
  Clock,
  Trophy,
  Target,
  Zap,
  GraduationCap,
  Mail,
  MessageCircle,
  Youtube,
  Instagram,
  Facebook,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "../components/AnimatedCounter";

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTestMode, setShowTestMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Mobil ekranlarni aniqlash
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => {
      setShowTestMode(false);
    }, 5000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const quickLinks = [
    {
      title: "O'qituvchilar",
      icon: Users,
      href: "/teachers",
      description: "45+ tajribali pedagog",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      color: "blue",
    },
    {
      title: "Yangiliklar",
      icon: Newspaper,
      href: "/blog",
      description: "So'nggi yangiliklar",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
      color: "green",
    },
    {
      title: "Yutuqlar",
      icon: Award,
      href: "/achievements",
      description: "128 ta sovrin",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.3,
      color: "yellow",
    },
    {
      title: "Galereya",
      icon: ImageIcon,
      href: "/gallery",
      description: "1500+ foto va video",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      color: "purple",
    },
    {
      title: "Aloqa",
      icon: Phone,
      href: "/contact",
      description: "24/7 bog'laning",
      gradient: "from-red-500 to-rose-500",
      delay: 0.5,
      color: "red",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "Eng innovatsion maktab",
      description: "Viloyat miqyosidagi tanlovda 1-o'rin",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      year: "2023",
      title: "Xalqaro matematika olimpiadasi",
      description: "3 ta oltin, 2 ta kumush medal",
      icon: Star,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "2023",
      title: "Eng yaxshi o'quv dasturi",
      description: "Respublika ta'lim forumida taqdirlandi",
      icon: Award,
      color: "from-green-400 to-green-600",
    },
  ];

  const testimonials = [
    {
      name: "Karimov Aziz",
      role: "Bitiruvchi 2024",
      image: "/student1.jpg",
      text: "Bu maktab meni nafaqat bilim, balki hayotiy ko'nikmalar bilan ham qurollantirdi. O'qituvchilar har bir o'quvchiga alohida e'tibor berishadi.",
      rating: 5,
    },
    {
      name: "Rustamova Malika",
      role: "Ota-ona",
      image: "/parent1.jpg",
      text: "Farzandimning muvaffaqiyatlari meni juda xursand qiladi. Maktabdagi zamonaviy yondashuv va professional o'qituvchilar tufayli u sevimli fanlarini topdi.",
      rating: 5,
    },
    {
      name: "Shodmonov Jasur",
      role: "10-sinf o'quvchisi",
      image: "/student2.jpg",
      text: "Robototexnika to'garagi va IT darslari eng sevimli mashg'ulotlarimga aylandi. Kelajakda dasturchi bo'lishni orzu qilaman.",
      rating: 5,
    },
  ];

  const news = [
    {
      title: "Xalqaro konferensiyada ishtirok",
      date: "15.03.2026",
      image: "/ustozlar.jpg",
      category: "Tadbir",
      excerpt: "O'quvchilarimiz Buxoroda bo'lib o'tgan yosh olimlar konferensiyasida 5 ta loyiha bilan ishtirok etishdi.",
    },
    {
      title: "Yangi sport zali ochildi",
      date: "10.03.2026",
      image: "/sport.jpg",
      category: "Yangilik",
      excerpt: "Zamonaviy jihozlar bilan ta'minlangan 500 kv.m sport zali o'z eshiklarini ochdi.",
    },
    {
      title: "Bitiruvchilar uchrashuvi",
      date: "05.03.2026",
      image: "/chet.jpg",
      category: "An'ana",
      excerpt: "30 yillik an'anaga aylangan bitiruvchilar uchrashuvida 200 dan ortiq mehmon qatnashdi.",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Maqsadli ta'lim",
      description: "Har bir o'quvchining qobiliyatiga qarab individual yondashuv",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Zap,
      title: "Zamonaviy texnologiyalar",
      description: "AI va VR texnologiyalari asosida interaktiv darslar",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: Heart,
      title: "Qulay muhit",
      description: "Psixologik jihatdan sog'lom va ijodiy muhit",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: TrendingUp,
      title: "Yuqori natijalar",
      description: "85% bitiruvchilar grant asosida o'qishga kiradi",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ];

  const socialLinks = [
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: MessageCircle, href: "#", color: "hover:text-green-600" },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Ranglarni dinamik qilish uchun funksiya
  const getIconBgClass = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
      yellow: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400",
      purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
      red: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-x-hidden bg-white dark:bg-gray-950 w-full font-sans antialiased">
      {/* Test Mode Banner */}
      <AnimatePresence>
        {showTestMode && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl"
          >
            <div className="relative overflow-hidden py-2.5 md:py-3 px-6 md:px-8">
              <div className="flex items-center justify-center gap-3 text-white">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 animate-pulse" />
                <p className="text-xs md:text-sm font-medium text-center">
                  🧪 TEST REJIMI — Bu sayt test asosida ishlayapti! Barcha ma'lumotlar va funksiyalar sinov tariqasida taqdim etilmoqda.
                </p>
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 animate-pulse" />
              </div>
            </div>
            <button
              onClick={() => setShowTestMode(false)}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800" 
        style={{ top: showTestMode ? (isMobile ? 40 : 48) : 0 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-screen md:min-h-[700px] overflow-hidden pt-14 md:pt-0">
        <div className="absolute inset-0">
          <img 
            src="/maktab.jpg" 
            alt="Maktab binosi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 md:mb-8 shadow-lg"
            >
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-yellow-400" />
              <span className="text-xs md:text-sm font-medium tracking-wide">O'zbekiston Top 10 maktabi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-[1.2] tracking-tight"
            >
              Kelajakni
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                bugundan quring
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 max-w-2xl leading-relaxed"
            >
              69-IDUM - innovatsion ta'lim, tajribali ustozlar va 
              zamonaviy infratuzilma bilan kelajak avlodni tayyorlaymiz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Batafsil ma'lumot</span>
                <ArrowRight className="relative z-10 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-8 md:gap-12 mt-10 md:mt-14 flex-wrap"
            >
              {[
                { value: "39", label: "Yillik tajriba" },
                { value: "45+", label: "Mutaxassis" },
                { value: "1500+", label: "Bitiruvchilar" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {!isMobile && (
          <>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2 text-xs tracking-widest"
            >
              <span>SCROLL</span>
              <ChevronRight className="h-4 w-4 rotate-90" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute right-6 md:right-8 bottom-8 flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, x: -5 }}
                  className={`text-white/60 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-5 tracking-tight">
              Nega aynan{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                69-IDUM?
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
              Eng yaxshi ta'lim va rivojlanish imkoniyatlari
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.1 }}
                whileHover={!isMobile ? { y: -8 } : {}}
                onHoverStart={() => !isMobile && setHoveredCard(index)}
                onHoverEnd={() => !isMobile && setHoveredCard(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
                
                {!isMobile && hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-5 tracking-tight">
              Tezkor <span className="font-bold">bo'limlar</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
              Sizni qiziqtirgan bo'limga tezda o'ting
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : link.delay }}
                whileHover={!isMobile ? { y: -6 } : {}}
              >
                <Link
                  to={link.href}
                  className="group relative block bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-7 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${getIconBgClass(link.color)} transition-all duration-300 group-hover:scale-110`}>
                    <link.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  
                  <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-5 tracking-tight">
              So'nggi <span className="font-bold">yutuqlar</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
              Maktabimiz faxrlanadigan natijalar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.15 }}
                whileHover={!isMobile ? { y: -8 } : {}}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={!isMobile ? { scale: 1.1, rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4 shadow-md`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <div className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Counter */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, value: 850, label: "O'quvchilar", delay: 0 },
              { icon: Award, value: 128, label: "Yutuqlar", delay: 0.1 },
              { icon: GraduationCap, value: 45, label: "O'qituvchilar", delay: 0.2 },
              { icon: Clock, value: 39, label: "Yillik tajriba", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : stat.delay, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <motion.div
                  whileHover={!isMobile ? { scale: 1.15, rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-3 md:p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-3 md:mb-5"
                >
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8" />
                </motion.div>
                <div className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
                  <AnimatedCounter end={stat.value} />
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-between items-end mb-12 md:mb-20 gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 tracking-tight">
                So'nggi <span className="font-bold">yangiliklar</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
                Maktab hayotidan eng so'nggi xabarlar
              </p>
            </div>
            
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base hover:gap-3 transition-all"
            >
              <span>Barcha yangiliklar</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.1 }}
                whileHover={!isMobile ? { y: -8 } : {}}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      whileHover={!isMobile ? { scale: 1.1 } : {}}
                      transition={{ duration: 0.5 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Batafsil</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-5 tracking-tight">
              Ota-onalar <span className="font-bold">fikri</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
              Biz haqimizda ular nima deydi
            </p>
          </motion.div>

          <div className="relative">
            {!isMobile && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </>
            )}

            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-3 md:px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 md:p-10 shadow-xl">
                      <Quote className="h-10 w-10 md:h-14 md:w-14 text-blue-600/20 mb-4 md:mb-6" />
                      
                      <p className="text-base md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-gray-700">
                          <img
                            src="/rasm2.jpg"
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg md:text-xl">{testimonial.name}</h4>
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? "w-8 bg-blue-600" 
                      : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/maktab.jpg" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-7 tracking-tight"
            >
              Farzandingiz kelajagi uchun
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                to'g'ri tanlov qiling
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Bizning maktabimizda farzandingiz nafaqat bilim, balki hayotiy ko'nikmalar,
              do'stlik va muvaffaqiyat sirlarini o'rganadi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-6 justify-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Qabulga yozilish</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
                <span>Maktab bilan tanishing</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-5 md:gap-8 mt-10 md:mt-14 text-white/70 text-xs md:text-sm"
            >
              <a href="tel:+998950571017" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>+998 95 057 10 17</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>Andijon vil, Paxtaobod tumani</span>
              </a>
              <a href="mailto:ziyodulloerkinov906@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>ziyodulloerkinov906@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}