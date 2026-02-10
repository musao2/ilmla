import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    "about",
    "prices",
    "results",
    "jobs",
    "events",
    "ielts",
    "offer",
    "faq",
  ];

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "uz" ? "en" : "uz");
  };

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 text-white rounded-4xl shadow-lg">
      <div className="flex items-center justify-between px-6 lg:px-16 h-20">
        <h1 className="text-2xl font-semibold tracking-wide text-amber-300">
          Ilmla
        </h1>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium cursor-pointer">
          {navLinks.map((link) => (
            <a key={link} className="hover:text-blue-300 transition">
              {t(link)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <p className="hidden md:block text-[15px] opacity-90">
            +998 (33) 703 87 83
          </p>

          {/* LANG BUTTON */}
          <button
            onClick={changeLang}
            className="px-3 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-sm"
          >
            {i18n.language.toUpperCase()}
          </button>

          {/* USER */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30">
            <FaUser size={18} />
          </button>

          {/* BURGER */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`lg:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 flex flex-col items-center gap-4 rounded-b-4xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
          <a key={link} className="hover:text-blue-300 transition">
            {t(link)}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
