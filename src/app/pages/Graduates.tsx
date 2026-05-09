import { GraduationCap, Award, TrendingUp, Users, Star, MapPin, Globe } from "lucide-react";

export function Graduates() {
  const graduatingClasses = [
    {
      year: "2025",
      total: 98,
      university: 92,
      honors: 15,
      abroad: 8,
      achievements: [
        "12 ta o'quvchi 190+ ball",
        "8 ta o'quvchi chet elga grant",
        "15 ta o'quvchi diplom bilan",
      ],
      notable: [
        {
          name: "Karimov Azizbek",
          university: "TATU",
          score: "196.4 ball",
        },
        {
          name: "Yusupova Madina",
          university: "TDPU",
          score: "194.8 ball",
        },
        {
          name: "Rahimov Sardor",
          university: "TATU (Koreya granti)",
          score: "195.2 ball",
        },
      ],
    },
    {
      year: "2024",
      total: 95,
      university: 88,
      honors: 12,
      abroad: 6,
      achievements: [
        "10 ta o'quvchi 190+ ball",
        "6 ta o'quvchi chet elga grant",
        "12 ta o'quvchi diplom bilan",
      ],
      notable: [
        {
          name: "Sobirova Dilnoza",
          university: "NUUz",
          score: "193.6 ball",
        },
        {
          name: "Toshmatov Javohir",
          university: "TATU",
          score: "192.4 ball",
        },
      ],
    },
    {
      year: "2023",
      total: 92,
      university: 85,
      honors: 10,
      abroad: 5,
      achievements: [
        "8 ta o'quvchi 190+ ball",
        "5 ta o'quvchi chet elga grant",
        "10 ta o'quvchi diplom bilan",
      ],
      notable: [
        {
          name: "Nurmatova Nigora",
          university: "TDTU",
          score: "191.8 ball",
        },
        {
          name: "Ergashev Aziz",
          university: "TIIAME",
          score: "189.6 ball",
        },
      ],
    },
  ];

  const statistics = [
    { value: "285", label: "Bitiruvchilar", icon: GraduationCap, color: "blue" },
    { value: "94%", label: "OTMga kirdi", icon: TrendingUp, color: "green" },
    { value: "37", label: "Diplom bilan", icon: Award, color: "orange" },
    { value: "19", label: "Chet elda", icon: Globe, color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Qismi */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Bitiruvchilar</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Maktabimiz bitiruvchilarining yutuqlari va muvaffaqiyatlari
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Statistikalar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 mb-12">
          {statistics.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-xl transition">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bitiruvchilar yillar bo'yicha */}
        <div className="space-y-8">
          {graduatingClasses.map((classData, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Yil sarlavhasi */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold">{classData.year} yil</h2>
                  <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span className="text-xl font-bold">{classData.total}</span>
                    <span className="text-sm ml-1">o'quvchi</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{classData.university}</div>
                    <div className="text-xs text-blue-200">OTMga kirdi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{classData.honors}</div>
                    <div className="text-xs text-blue-200">Diplom bilan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{classData.abroad}</div>
                    <div className="text-xs text-blue-200">Chet elda</div>
                  </div>
                </div>
              </div>

              {/* Kontent qismi */}
              <div className="p-6">
                {/* Yutuqlar */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Yutuqlar</h3>
                  <div className="flex flex-wrap gap-2">
                    {classData.achievements.map((item, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eng yaxshi o'quvchilar */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eng yaxshi natijalar</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {classData.notable.map((student, i) => (
                      <div key={i} className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 text-sm">{student.name}</h4>
                            <p className="text-xs text-gray-500">{student.university}</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-blue-600">{student.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qabul yo'nalishlari */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-5">Qabul qilingan OTMlar</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
              <div className="text-sm text-gray-700">Texnika</div>
              <div className="text-xs text-gray-500 mt-1">TATU, TDTU</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
              <div className="text-sm text-gray-700">Pedagogika</div>
              <div className="text-xs text-gray-500 mt-1">NUUz, TDPU</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-1">25%</div>
              <div className="text-sm text-gray-700">Tibbiyot</div>
              <div className="text-xs text-gray-500 mt-1">ToshDTU</div>
            </div>
          </div>
        </div>

        {/* Muvaffaqiyat tarixi */}
        <div className="mt-10 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-3">Muvaffaqiyat tarixi</h2>
          <div className="space-y-3">
            <p className="text-green-100 text-sm leading-relaxed">
              So'nggi 3 yilda <strong className="text-white">19 ta bitiruvchi</strong> xorijiy universitetlarga 
              grant asosida o'qishga ketdi. Janubiy Koreya, Rossiya, Turkiya va boshqa davlatlardagi 
              nufuzli universitetlarda ta'lim olishmoqda.
            </p>
            <p className="text-green-100 text-sm leading-relaxed">
              Bitiruvchilarimizning <strong className="text-white">94 foizi</strong> OTMlarga kirgan. 
              30 dan ortiq o'quvchi DTM testida 190+ ball to'plagan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}