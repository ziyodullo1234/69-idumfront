import { BookOpen, Sparkles, LayoutGrid, Users, Calendar, Trophy, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Library() {
  const [activeTab, setActiveTab] = useState("ebooks");

  // Kategoriyalar
  const categories = [
    { id: "ebooks", name: "Elektron kitoblar", icon: BookOpen },
    { id: "textbooks", name: "Rasmiy darsliklar", icon: Users },
    { id: "guides", name: "O'quv qo'llanmalar", icon: Calendar },
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
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">69-IDUM • Kutubxona</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Elektron <span className="text-blue-600 dark:text-blue-400">kutubxona</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Biz bilan dunyo qarashni kengaytiring! 📚
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Coming Soon Card */}
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
                <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Tez orada <span className="text-blue-600 dark:text-blue-400">kitoblar qo'shiladi</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Biz bilan dunyo qarashni kengayting! 🌍
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Elektron kitoblar, darsliklar va o'quv qo'llanmalari tez kunda sizlar uchun!
              </p>
              
              {/* Admin Info */}
              <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md animate-float">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  EZ
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Erkinov Ziyodullo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Kitoblar qo'shiladi</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Kuzatib turing! Yangi kitoblar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  📖 Bilim sari birgalikda! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-2xl p-6 text-white text-center hover-lift">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">1000+ Kitob</h3>
              <p className="text-blue-100">Tez orada kutubxonamizda</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-2xl p-6 text-white text-center hover-lift">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bepul foydalanish</h3>
              <p className="text-purple-100">24/7 onlayn rejimda</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}