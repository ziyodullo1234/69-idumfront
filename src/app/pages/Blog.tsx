import {
  Calendar,
  MessageCircle,
  Search,
  Filter,
  Sparkles,
  Eye,
  BookOpen,
  Camera,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Hammasi");

  const categories = ["Hammasi", "Yangiliklar", "Tadbirlar", "E'lonlar", "Yutuqlar"];

  // Test posts (faqat ko'rinish uchun)
  const allPosts = [
    {
      id: 1,
      title: "Maktab hayoti",
      excerpt: "Maktabimizdagi so'nggi yangiliklar va tadbirlar haqida...",
      category: "Yangiliklar",
      date: "2025-03-15",
      views: 234,
      comments: 12
    },
    {
      id: 2,
      title: "O'quv yili yakunlari",
      excerpt: "O'quv yili davomida erishilgan yutuqlar...",
      category: "Yutuqlar",
      date: "2025-03-10",
      views: 189,
      comments: 8
    },
    {
      id: 3,
      title: "Sport musobaqalari",
      excerpt: "Maktab jamoalarining muvaffaqiyatlari...",
      category: "Tadbirlar",
      date: "2025-03-05",
      views: 456,
      comments: 23
    }
  ];

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Hammasi" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          {/* HEADER */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">69-IDUM • Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Maktab <span className="text-blue-600 dark:text-blue-400">blogi</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Eng so'nggi yangiliklar, tadbirlar va e'lonlar
            </p>
          </div>

          {/* Coming Soon Banner - Gallery Link */}
          <div className="mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">📸 Maktab galereyasi</h3>
                    <p className="text-white/80 text-sm">Maktab hayotidan lavhalar va esdalik suratlar</p>
                  </div>
                </div>
                <a 
                  href="/gallery" 
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-full px-5 py-2 transition-all duration-300"
                >
                  <span>Ko'rish</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-blue-300 dark:border-blue-700 hover-lift">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full mb-6 animate-pulse">
                <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Tez orada <span className="text-blue-600 dark:text-blue-400">rasmlar qo'shiladi</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Maktab galereyasini ko'rishingiz mumkin! 📸
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Yangi maqolalar, tadbirlar va maktab hayotidan eng so'nggi rasmlar<br />
                tez kunda sizlar bilan!
              </p>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Kuzatib turing! Yangi kontentlar tez kunda</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  ⭐ Maktab hayoti bilan birga bo'ling! ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Maqola qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <BookOpen className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">Hech qanday maqola topilmadi</p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Qidiruvni tozalash
                </button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-white/50 mx-auto mb-2" />
                      <p className="text-white/70 text-sm">Tez orada rasm</p>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Preview Button */}
                    <button className="mt-4 w-full py-2 text-center text-sm text-blue-600 dark:text-blue-400 border-t border-gray-100 dark:border-gray-700 pt-3 hover:text-blue-700 transition">
                      Tez orada...
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery Link Card */}
          <div className="mt-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl p-8 text-white text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 animate-float">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Maktab galereyasi</h3>
            <p className="text-indigo-100 mb-4 max-w-md mx-auto">
              Maktab hayotidan eng yaxshi lavhalar va esdalik suratlar
            </p>
            <a 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-6 py-2 font-medium transition-all duration-300"
            >
              <span>Galereyani ko'rish</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


