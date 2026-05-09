import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Code } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Qismi */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Aloqa</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Biz bilan bog'laning, sizning savollaringizga javob beramiz
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Aloqa ma'lumotlari</h2>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Manzil</h3>
                    <p className="text-sm text-gray-600">
                      Paxtaobod tumani, Ko'ktonlik MFY
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                    <p className="text-sm text-gray-600">+998 95 057 10 17</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">ziyodulloerkinov906@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ish vaqti</h3>
                    <p className="text-sm text-gray-600">
                      Dushanba - Shanba: 08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rahbariyat */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Rahbariyat</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-xs">Direktor</div>
                  <div className="font-semibold">Erkinov Ziyodullo Dilmurodjon o'gli</div>
                  <div className="text-sm text-blue-200">+998 95 057 10 17</div>
                </div>
                <div>
                  <div className="text-blue-200 text-xs">O'quv ishlari bo'yicha</div>
                  <div className="font-semibold">Karimova Dilnoza Akramovna</div>
                  <div className="text-sm text-blue-200">+998 71 123 45 68</div>
                </div>
                <div>
                  <div className="text-blue-200 text-xs">Tarbiya ishlari bo'yicha</div>
                  <div className="font-semibold">Sobirova Nigora Shavkatovna</div>
                  <div className="text-sm text-blue-200">+998 71 123 45 69</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Bizga xabar yuboring</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ism familiya
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mavzu
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Xabar mavzusi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Xabaringizni yozing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Xabar yuborish
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Maktabni xaritada toping</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5947624155344!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjAiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Maktab manzili"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Developer Info - Erkinov Ziyodullo */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Erkinov Ziyodullo
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Web dasturchi | Full Stack Developer
              </p>
              <a
                href="https://t.me/erkinovziyodullo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088cc] text-white px-5 py-2 rounded-full hover:bg-[#006699] transition text-sm font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram: @erkinovziyodullo
              </a>
              <div className="flex gap-3 mt-3 text-xs text-gray-400">
                <span>© 2025 69-IDUM</span>
                <span>•</span>
                <span>Barcha huquqlar himoyalangan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}