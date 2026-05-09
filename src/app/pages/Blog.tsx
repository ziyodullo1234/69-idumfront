import {
  Calendar,
  MessageCircle,
  Search,
  Filter,
  Sparkles,
  Eye,
  BookOpen,
} from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface Comment {
  id: number;
  post: number;
  name: string;
  text: string;
  created_at: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string | null;
  comments_count: number;
  views: number;
  likes: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Hammasi");

  const [stats, setStats] = useState({
    total: 0,
    views: 0,
    comments: 0,
  });

  // COMMENTS
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [submitting, setSubmitting] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  // BLOG POSTS
  const fetchBlogPosts = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/api/blog/");

      if (!response.ok) {
        throw new Error("Ma'lumot olishda xatolik");
      }

      const data = await response.json();
      const postsData: BlogPost[] = data.results || data;

      setPosts(postsData);

      // featured
      const featured = postsData.find((p) => p.featured) || postsData[0];
      setFeaturedPost(featured || null);

      // stats
      const totalViews = postsData.reduce((sum, p) => sum + (p.views || 0), 0);
      const totalComments = postsData.reduce((sum, p) => sum + (p.comments_count || 0), 0);

      setStats({
        total: postsData.length,
        views: totalViews,
        comments: totalComments,
      });

      // comments load
      postsData.forEach((post) => {
        fetchComments(post.id);
      });

      setError(null);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  // GET COMMENTS
  const fetchComments = async (postId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/blog/${postId}/comments/`);

      if (!response.ok) {
        throw new Error("Kommentlarni olishda xatolik");
      }

      const data: Comment[] = await response.json();

      setComments((prev) => ({
        ...prev,
        [postId]: data,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // POST COMMENT
  const submitComment = async (postId: number) => {
    const text = commentInputs[postId];

    if (!text?.trim()) return;

    setSubmitting((prev) => ({ ...prev, [postId]: true }));

    try {
      console.log(`Comment yuborilmoqda: Post ID ${postId}, Text: ${text}`);

      const response = await fetch(`http://127.0.0.1:8000/api/blog/${postId}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Foydalanuvchi",
          text: text,
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server xatosi:", errorData);
        throw new Error(errorData.error || "Komment yuborilmadi");
      }

      const newComment = await response.json();
      console.log("Yangi comment qo'shildi:", newComment);

      // Inputni tozalash
      setCommentInputs((prev) => ({
        ...prev,
        [postId]: "",
      }));

      // Kommentlarni qayta yuklash
      await fetchComments(postId);

      // Statistikani yangilash
      setStats((prev) => ({
        ...prev,
        comments: prev.comments + 1,
      }));
    } catch (err) {
      console.error("Comment yuborish xatosi:", err);
      alert("Komment yuborishda xatolik yuz berdi: " + (err instanceof Error ? err.message : "Noma'lum xato"));
    } finally {
      setSubmitting((prev) => ({ ...prev, [postId]: false }));
    }
  };

  // categories
  const categories = ["Hammasi", ...new Set(posts.map((post) => post.category))];

  // filtered
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "Hammasi" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  // loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  // error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button onClick={fetchBlogPosts} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Qayta urinish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Direktor Blogi</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog maqolalari</h1>

          <p className="text-gray-600 dark:text-gray-400">Eng so'nggi yangiliklar va maqolalar</p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
            <div className="text-gray-500">Jami maqolalar</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <Eye className="w-8 h-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.views}</div>
            <div className="text-gray-500">Ko'rishlar</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <MessageCircle className="w-8 h-8 text-purple-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.comments}</div>
            <div className="text-gray-500">Kommentlar</div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Filter className="w-4 h-4" />
            <span>{filteredPosts.length} ta maqola</span>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* POSTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col"
            >
              {/* image */}
              <div className="relative h-52">
                <ImageWithFallback
                  src={post.image || "/default-blog.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt || post.content?.substring(0, 150) + "..."}
                </p>

                {/* meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments_count || 0}
                    </div>
                  </div>
                </div>

                {/* COMMENTS SECTION */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Kommentlar ({comments[post.id]?.length || 0})
                  </h4>

                  {/* Comments List */}
                  <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                    {(comments[post.id] || []).length > 0 ? (
                      (comments[post.id] || []).map((comment) => (
                        <div key={comment.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-blue-600">{comment.name}</span>
                            <span className="text-[10px] text-gray-400">
                              {new Date(comment.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-2">
                        Hali kommentlar yo'q. Birinchi bo'lib komment yozing!
                      </p>
                    )}
                  </div>

                  {/* Add Comment Form */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Komment yozing..."
                      value={commentInputs[post.id] || ""}
                      onChange={(e) =>
                        setCommentInputs((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !submitting[post.id]) {
                          submitComment(post.id);
                        }
                      }}
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => submitComment(post.id)}
                      disabled={submitting[post.id] || !commentInputs[post.id]?.trim()}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white rounded-lg text-sm transition"
                    >
                      {submitting[post.id] ? "..." : "Yuborish"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}