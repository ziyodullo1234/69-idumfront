import { MapPin, Phone, Mail, Send, MessageCircle, Code, Globe, Sparkles, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gmailga xabar yuborish uchun mailto link
    const mailtoLink = `mailto:ziyodulloerkinov906@gmail.com?subject=Saytdan xabar - ${formData.name}&body=Ism: ${formData.name}%0AEmail: ${formData.email}%0A%0AXabar: ${formData.message}`;
    window.location.href = mailtoLink;
    
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

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
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .dark .glass-effect {
          background: rgba(31, 41, 55, 0.95);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Hero Qismi */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-950 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4 animate-float">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-medium">69-IDUM • Aloqa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Biz bilan bog'lanishing</h1>
            <p className="text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
              Savollaringiz bo'lsa, biz bilan bog'lanishingiz mumkin
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information - Telegram, Map, Email, Phone */}
            <div className="space-y-6">
              {/* Telegram Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover-lift animate-scale-in">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0088cc]/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-[#0088cc]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Telegram</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Ish vaqti: 24/7</p>
                  </div>
                </div>
                <a
                  href="https://t.me/erkinovziyodullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#0088cc]/5 dark:bg-[#0088cc]/10 rounded-xl p-3 hover:bg-[#0088cc]/10 transition"
                >
                  <span className="text-[#0088cc] font-medium">@erkinovziyodullo</span>
                  <MessageCircle className="h-4 w-4 text-[#0088cc]" />
                </a>
              </div>

              {/* Map Card - YANGI IFRAME QO'YILDI */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Manzil</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Xarita orqali toping</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1102.2762921625788!2d72.49460650720002!3d40.95604670297282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcc3004cda305b%3A0xde8ca94fb13460cd!2s69%20IDUM!5e1!3m2!1sru!2s!4v1779709357862!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="69-IDUM maktab manzili"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  69-IDUM, Paxtaobod tumani
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Xabar yuborish</p>
                  </div>
                </div>
                <a
                  href="mailto:ziyodulloerkinov906@gmail.com"
                  className="flex items-center justify-between bg-red-50 dark:bg-red-900/20 rounded-xl p-3 hover:bg-red-100 dark:hover:bg-red-900/30 transition"
                >
                  <span className="text-red-600 dark:text-red-400 font-medium">ziyodulloerkinov906@gmail.com</span>
                  <Mail className="h-4 w-4 text-red-600 dark:text-red-400" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Telefon raqam</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Ish vaqti: 08:00 - 17:00</p>
                  </div>
                </div>
                <a
                  href="tel:+998950571017"
                  className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">+998 95 057 10 17</span>
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover-lift animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Xabar yuborish</h2>
              </div>
              
              {isSent && (
                <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center gap-2 animate-scale-in">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-green-700 dark:text-green-300">Xabar muvaffaqiyatli yuborildi!</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Xabar *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none transition"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="h-4 w-4" />
                  Xabar yuborish
                </button>
              </form>
              
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                Xabaringiz ziyodulloerkinov906@gmail.com ga yuboriladi
              </p>
            </div>
          </div>

          {/* Developer Info - Erkinov Ziyodullo */}
          <div className="mt-10 animate-fade-in-up">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 text-white text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">Erkinov Ziyodullo</h3>
                <p className="text-sm text-gray-300 mb-4">Web dasturchi | Full Stack Developer</p>
                <a
                  href="https://t.me/erkinovziyodullo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#006699] px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium"
                >
                  <MessageCircle className="h-4 w-4" />
                  Telegram: @erkinovziyodullo
                </a>
                <div className="flex gap-3 mt-4 text-xs text-gray-400">
                  <span>© 2025 69-IDUM</span>
                  <span>•</span>
                  <span>Barcha huquqlar himoyalangan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}