import { Award, Trophy, Medal, Star, Sparkles, TrendingUp, Users, Calendar, ChevronRight, Quote, Zap, Heart, Crown, Target, Globe, Flame, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Achievements() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      year: "2024",
      title: "Xalqaro matematika olimpiadasi",
      place: "1-o'rin",
      description: "3 ta oltin, 2 ta kumush medal",
      icon: Trophy,
    },
    {
      id: 2,
      year: "2024",
      title: "Eng innovatsion maktab",
      place: "1-o'rin",
      description: "Viloyat miqyosidagi tanlov",
      icon: Award,
    },
    {
      id: 3,
      year: "2024",
      title: "Robototexnika tanlovi",
      place: "1-o'rin",
      description: "Respublika miqyosida",
      icon: Zap,
    },
    {
      id: 4,
      year: "2023",
      title: "Eng yaxshi o'quv dasturi",
      place: "1-o'rin",
      description: "Respublika ta'lim forumida",
      icon: Star,
    },
    {
      id: 5,
      year: "2023",
      title: "Xalqaro ingliz tili olimpiadasi",
      place: "2-o'rin",
      description: "2 ta kumush medal",
      icon: Medal,
    },
    {
      id: 6,
      year: "2023",
      title: "Sport maktabi",
      place: "1-o'rin",
      description: "Viloyat miqyosida",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1.5 mb-4">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">2024-2025 yutuqlar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Bizning <span className="text-blue-600 dark:text-blue-400">yutuqlarimiz</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            O'quvchilarimizning fan, sport va ijod sohasidagi muvaffaqiyatlari bilan faxrlanamiz
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { icon: Trophy, value: "45+", label: "1-o'rinlar" },
            { icon: Medal, value: "38+", label: "2-o'rinlar" },
            { icon: Award, value: "52+", label: "3-o'rinlar" },
            { icon: Star, value: "135+", label: "Jami sovrinlar" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all animate-on-scroll"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements List */}
        <div className="space-y-4 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all animate-on-scroll group cursor-pointer"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{item.year}</span>
                    <span className="text-xs font-medium px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                      {item.place}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Siz ham bizning jamoamizga qo'shiling!</h3>
          <p className="text-white/80 mb-6">Farzandingizning iste'dodini rivojlantirish imkoniyatini yarating</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            <span>Qabulga yozilish</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quote */}
        <div className="text-center py-10 mt-8 border-t border-gray-100 dark:border-gray-800">
          <Quote className="w-8 h-8 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
          <p className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">
            "Har bir yutuq - bu birgalikdagi mehnat, fidoyilik va maqsad sari intilishning natijasidir"
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-red-500" />
            <p className="text-sm text-gray-500">69-IDUM jamoasi</p>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}