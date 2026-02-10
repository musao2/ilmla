import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="
      fixed top-0 left-0 w-full h-[80px] z-50
      flex items-center justify-between
      px-6 lg:px-16
      bg-white/10 backdrop-blur-xl
      border-b border-white/20
      text-white
    ">

      <h1 className="text-2xl font-semibold tracking-wide text-amber-300">
        Ilmla
      </h1>

      <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium cursor-grabbing">
        <a className="hover:text-blue-300 transition">Biz haqimizda</a>
        <a className="hover:text-blue-300 transition">Narxlar</a>
        <a className="hover:text-blue-300 transition">Natijalar</a>
        <a className="hover:text-blue-300 transition">Vakansiyalar</a>
        <a className="hover:text-blue-300 transition">Tadbirlar</a>
        <a className="hover:text-blue-300 transition">IELTS</a>
        <a className="hover:text-blue-300 transition">Ommaviy offerta</a>
        <a className="hover:text-blue-300 transition">FAQ</a>
      </nav>

      <div className="flex items-center gap-5">

        <p className="hidden md:block text-[15px] opacity-90">
          +998 (33) 703 87 83
        </p>

        <button className="
          w-10 h-10 flex items-center justify-center
          rounded-full
          bg-white/20 hover:bg-white/30
          backdrop-blur-md
          transition
        ">
          <FaUser size={18}/>
        </button>

      </div>

    </header>
  );
}

export default Header;
