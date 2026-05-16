import { GraduationCap, Award, TrendingUp, Users, Star, MapPin, Globe, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Graduates() {
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
        {/* Hero Qismi */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-950 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-medium">69-IDUM • Bitiruvchilar</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in-up">Bitiruvchilar</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Maktabimiz bitiruvchilarining yutuqlari va muvaffaqiyatlari
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Coming Soon Card */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
                <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Tez orada <span className="text-blue-600 dark:text-blue-400">ma'lumotlar qo'shiladi</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Bitiruvchilarimizning yutuqlari va muvaffaqiyatlari
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                So'nggi yillardagi bitiruvchilarimizning OTM larga kirish natijalari,<br />
                grantlar va yutuqlar tez kunda e'lon qilinadi!
              </p>
              
              {/* Admin Info */}
              <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md animate-float">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  EZ
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Erkinov Ziyodullo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ma'lumotlar qo'shiladi</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Kuzatib turing! Statistikalar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  🎓 Muvaffaqiyatlar sari birgalikda! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Preview Stats Cards - Coming Soon style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "?", label: "Bitiruvchilar", icon: GraduationCap, color: "blue" },
              { value: "?", label: "OTMga kirdi", icon: TrendingUp, color: "green" },
              { value: "?", label: "Diplom bilan", icon: Award, color: "orange" },
              { value: "?", label: "Chet elda", icon: Globe, color: "purple" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 text-center hover-lift animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Preview Year Card - Coming Soon */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8 animate-fade-in-up opacity-70">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">2025 yil</h2>
                <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                  <span className="text-xl font-bold text-white">?</span>
                  <span className="text-sm text-white/80 ml-1">o'quvchi</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">?</div>
                  <div className="text-xs text-blue-200">OTMga kirdi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">?</div>
                  <div className="text-xs text-blue-200">Diplom bilan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">?</div>
                  <div className="text-xs text-blue-200">Chet elda</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 dark:from-green-800 dark:to-emerald-900 rounded-2xl p-6 text-white hover-lift">
              <h3 className="text-xl font-bold mb-2">⭐ Muvaffaqiyat tarixi</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Bitiruvchilarimizning OTM larga kirish natijalari, xorijiy grantlar va 
                yutuqlar haqida to'liq ma'lumot tez orada e'lon qilinadi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 dark:from-purple-800 dark:to-pink-900 rounded-2xl p-6 text-white hover-lift">
              <h3 className="text-xl font-bold mb-2">📊 Statistikalar</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Bitiruvchilar statistikasi, qabul ko'rsatkichlari va muvaffaqiyat 
                ko'rsatkichlari tez kunda sizlar bilan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}