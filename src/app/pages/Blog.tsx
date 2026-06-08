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
  ArrowRight,
  TrendingUp,
  Heart,
  Share2,
  Tag,
  User,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Hammasi");

  const categories = ["Hammasi", "Yangiliklar", "Tadbirlar", "E'lonlar", "Yutuqlar"];

  const allPosts = [
    {
      id: 1,
      title: "Xalqaro konferensiyada ishtirok",
      excerpt: "O'quvchilarimiz Buxoroda bo'lib o'tgan yosh olimlar konferensiyasida 5 ta loyiha bilan ishtirok etishdi.",
      category: "Tadbirlar",
      date: "15.03.2026",
      views: 234,
      comments: 12,
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Yangi sport zali ochildi",
      excerpt: "Zamonaviy jihozlar bilan ta'minlangan 500 kv.m sport zali o'z eshiklarini ochdi.",
      category: "Yangiliklar",
      date: "10.03.2026",
      views: 456,
      comments: 23,
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Bitiruvchilar uchrashuvi",
      excerpt: "30 yillik an'anaga aylangan bitiruvchilar uchrashuvida 200 dan ortiq mehmon qatnashdi.",
      category: "Tadbirlar",
      date: "05.03.2026",
      views: 189,
      comments: 8,
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Matematika olimpiadasi g'oliblari",
      excerpt: "Xalqaro matematika olimpiadasida 3 ta oltin, 2 ta kumush medal qo'lga kiritildi.",
      category: "Yutuqlar",
      date: "28.02.2026",
      views: 567,
      comments: 34,
      readTime: "5 min"
    },
    {
      id: 5,
      title: "Kutubxonaga yangi kitoblar",
      excerpt: "Maktab kutubxonamiz 500 dan ortiq yangi badiiy va ilmiy kitoblar bilan boyidi.",
      category: "E'lonlar",
      date: "20.02.2026",
      views: 123,
      comments: 5,
      readTime: "2 min"
    },
    {
      id: 6,
      title: "O'qituvchilar kuni",
      excerpt: "Hurmatli ustozlarimizga bag'ishlangan tantanali tadbir bo'lib o'tdi.",
      category: "Yangiliklar",
      date: "05.10.2025",
      views: 345,
      comments: 18,
      readTime: "3 min"
    }
  ];

  const popularPosts = [...allPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Hammasi" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">69-IDUM • Rasmiy blog</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Maktab blogi
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Eng so'nggi yangiliklar, tadbirlar va yutuqlar
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Maqolalar</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">O'qishlar</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">158</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Izohlar</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">24</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Yutuqlar</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Maqola qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Posts Grid */}
          <div className="lg:col-span-2">
            {filteredPosts.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center shadow-md">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-lg">Hech qanday maqola topilmadi</p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
                  >
                    Qidiruvni tozalash
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                        <Camera className="w-12 h-12 text-white/50" />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                          <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:gap-2 transition-all inline-flex items-center gap-1">
                            Tez orada <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Popular Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-gray-900 dark:text-white">Eng o'qilganlar</h3>
              </div>
              <div className="space-y-4">
                {popularPosts.map((post, i) => (
                  <div key={post.id} className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views} o'qish</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories List */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Tag className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-gray-900 dark:text-white">Kategoriyalar</h3>
              </div>
              <div className="space-y-2">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-between group"
                  >
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{cat}</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-500">
                      {allPosts.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Card */}
            <Link to="/gallery" className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 text-white shadow-md hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="w-10 h-10 text-white/80" />
                <div>
                  <h3 className="font-bold text-lg">Maktab galereyasi</h3>
                  <p className="text-white/70 text-sm">1500+ rasm va video</p>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-3">
                Maktab hayotidan eng yaxshi lavhalar
              </p>
              <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                Ko'rish <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-5 text-center">
              <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Yangiliklardan xabardor bo'ling</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Eng so'nggi yangiliklarni birinchi bo'lib o'qing
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:shadow-lg transition">
                  Obuna
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        {filteredPosts.length > 0 && filteredPosts.length >= 6 && (
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:shadow-lg transition">
              Ko'proq yuklash
            </button>
          </div>
        )}
      </div>
    </div>
  );
}