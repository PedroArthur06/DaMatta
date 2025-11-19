import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  BookOpen,
  Users,
  Sparkles,
  MessageCircle,
  Award,
  Calendar,
  User,
} from "lucide-react";
import BiographySection from "../components/BiographySection";
import ConceptsSection from "../components/ConceptsSection";
import AnalysisSection from "../components/AnalysisSection";
import PresentersSection from "../components/PresentersSection";
import ReferencesSection from "../components/ReferencesSection";
import QuizSection from "../components/QuizSection";
import CommentsSection from "../components/CommentsSection";

export const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "biography",
        "concepts",
        "analysis",
        "presenters",
        "quiz",
        "comments",
        "references",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-yellow-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span className="font-bold text-lg text-gray-800">
                Roberto DaMatta
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "home" ? "text-green-600" : "text-gray-600"
                }`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("biography")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "biography"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                Biografia
              </button>
              <button
                onClick={() => scrollToSection("concepts")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "concepts"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                Conceitos
              </button>
              <button
                onClick={() => scrollToSection("analysis")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "analysis"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                Análises
              </button>
              <button
                onClick={() => scrollToSection("quiz")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "quiz" ? "text-green-600" : "text-gray-600"
                }`}
              >
                Quiz
              </button>
              <button
                onClick={() => scrollToSection("references")}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === "references"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                Referências
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-1 bg-green-500 rounded"></div>
                <Sparkles className="w-8 h-8 text-yellow-500" />
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Roberto DaMatta
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
              Carnavais, Malandros e Heróis
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma análise antropológica profunda da sociedade brasileira através
              dos rituais, personagens e símbolos culturais que definem nossa
              identidade nacional.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-green-700" />
                <span className="font-medium text-green-800">
                  Antropologia Cultural
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-100 px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-yellow-700" />
                <span className="font-medium text-yellow-800">
                  Identidade Brasileira
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full">
                <Calendar className="w-5 h-5 text-blue-700" />
                <span className="font-medium text-blue-800">
                  Publicado em 1979
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("biography")}
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors mt-8 animate-bounce"
            >
              <span>Explorar</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Main Content Sections */}
      <BiographySection />
      <ConceptsSection />
      <AnalysisSection />
      <PresentersSection />
      <QuizSection />
      <CommentsSection />
      <ReferencesSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-green-400" />
            <span className="font-bold text-lg">Roberto DaMatta</span>
          </div>
          <p className="text-gray-400 text-sm">
            Seminário Escolar - Antropologia da Cultura Brasileira
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2025 - Material educacional para fins acadêmicos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
