import { Mail, Phone, Award, BookOpen, Users, Star, Clock, GraduationCap, Heart, Trophy, Sparkles, ChevronRight, MessageCircle, Code, Camera, Image } from "lucide-react";
import { useState } from "react";

export function Teachers() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  return (
    <>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .dark .shimmer-effect {
          background: linear-gradient(90deg, #1f2937 0%, #374151 50%, #1f2937 100%);
          background-size: 1000px 100%;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Pedagogik jamoa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              O'qituvchilar <span className="text-blue-600 dark:text-blue-400">jamoasi</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Bizning tajribali va malakali pedagog jamoamiz
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">📸 O'qituvchilar rasmi</h3>
                    <p className="text-white/80 text-sm">Tez orada o'qituvchilarimizning rasmlari qo'shiladi</p>
                  </div>
                </div>
                <a 
                  href="https://t.me/erkinovziyodullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-full px-5 py-2 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>@erkinovziyodullo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
                <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Tez orada <span className="text-blue-600 dark:text-blue-400">o'qituvchilar rasmi qo'shiladi</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Barcha o'qituvchilarimiz haqida to'liq ma'lumot
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                O'qituvchilarimizning rasmlari, malaka toifalari va tajribalari <br />
                tez kunda sizlar bilan!
              </p>
              
              {/* Telegram Contact */}
              <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md animate-float">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ma'lumot uchun:</p>
                  <a 
                    href="https://t.me/erkinovziyodullo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    @erkinovziyodullo
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ⭐ Kuzatib turing! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Teachers Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {previewTeachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-70"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shimmer-effect">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                      <p className="text-xs text-gray-400 dark:text-gray-500">Tez orada rasm</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                      teacher.category === 'Oliy toifali' 
                        ? 'bg-yellow-400 text-yellow-900' 
                        : teacher.category === '1-toifali'
                        ? 'bg-blue-400 text-white'
                        : 'bg-green-400 text-white'
                    }`}>
                      {teacher.category}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center gap-2 text-white text-xs">
                      <Clock className="w-3 h-3" />
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
                    <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
                      {teacher.name}
                    </h3>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <p className="line-clamp-2">Ma'lumot tez orada qo'shiladi</p>
                  </div>
                  
                  {/* Contact Buttons Preview */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all py-2 rounded-lg">
                      <Mail className="w-3 h-3" />
                      Email
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all py-2 rounded-lg">
                      <Phone className="w-3 h-3" />
                      Telefon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-6 text-white hover-lift">
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
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 dark:from-purple-800 dark:to-pink-900 rounded-2xl p-6 text-white hover-lift">
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
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center py-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in-up">
            <Heart className="w-8 h-8 text-red-400 dark:text-red-500 mx-auto mb-3 animate-pulse" />
            <p className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">
              "Eng yaxshi o'qituvchi - bu bilim berish bilan birga, o'quvchining qalbini ham tarbiyalaydigan ustozdir"
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">- 69-IDUM pedagogik jamoasi</p>
          </div>

          {/* Developer Info */}
          <div className="mt-8 text-center">
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
    </>
  );
}