import HeroVideo from "../images/heroVideo.mp4";
import { PiStarFourFill } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center top-150
      px-4 sm:px-10 lg:px-20 max-w-6xl">

        <h2 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold my-4 leading-tight">

          <span className="text-amber-500">
            INTER NATION
          </span>
          <br />
          <span className="text-white">
            ingliz tili va IELTS
          </span>
        </h2>

        <p className="
        my-3 font-medium text-sm sm:text-base md:text-lg 
        text-gray-200 max-w-xl">
          INTER NATION ingliz tili va IELTS
          O’zbekistondagi eng yirik ingliz tili o’quv markazi.
        </p>

        <button className="
        mt-4 w-fit
        flex items-center gap-2
        bg-amber-500
        py-3 px-5 rounded-2xl font-semibold

        transition-all duration-300 ease-in-out
        hover:bg-amber-400 hover:scale-105 hover:shadow-xl text-white">

          <PiStarFourFill className="text-lg sm:text-xl" />
          Birinchi bepul darsga yozilish
        </button>

      </div>
    </section>
  );
}
