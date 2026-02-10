import HeroVideo from "../images/heroVideo.mp4";
import { PiStarFourFill } from "react-icons/pi";
export default function Hero() {
    return (
        <section className="hero">
            <video
                className="bg-video"
                src={HeroVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="hero-content">
                <h2 className="text-5xl font-bold my-4">
                    <span className="text-amber-500">
                        INTER NATION
                    </span>
                    <br />
                    <span>
                        ingliz tili va IELTS
                    </span>
                </h2>
                <p className="my-2 font-semibold">

                    INTER NATION
                    ingliz tili va IELTS
                    O’zbekistondagi eng yirik ingliz tili o’quv markazi.
                </p>
                <button className="flex items-center bg-amber-500 py-3 px-4 rounded-2xl gap-2 hover:shadow-amber-600 shadow-xl transition duration-600"><PiStarFourFill/>Birinchi bepul darsga yozilish</button>
            </div>
        </section>
    );
}
