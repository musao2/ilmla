import { useTranslation } from "react-i18next";
import OnlineImg from "../images/OnlineImg.png";
import { PiStarFourFill } from "react-icons/pi";
import { HiMiniPlay } from "react-icons/hi2";
function Online() {
    const { t } = useTranslation();

    return (
        <section className="w-full py-20">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col gap-6">

                    <button className="flex w-fit items-center gap-3 border border-amber-500 rounded-2xl px-5 py-2 text-lg font-semibold text-amber-500">
                        <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></span>
                        {t("onlineButton")}
                    </button>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                        {t("onlineh2")}
                    </h2>

                    <p className="text-lg text-black">
                        {t("onlineP")}
          ``          </p>

                    <div className="flex flex-col gap-3 text-lg">
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP1")}</p>
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP2")}</p>
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP3")}</p>
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP4")}</p>
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP5")}</p>
                        <p className="flex items-center gap-2"><PiStarFourFill className="text-amber-500" />{t("onlineP6")}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-black hover:bg-[#1a1a1a] transition text-white font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
                          <PiStarFourFill/>  {t("buttonOqish")}
                        </button>
                        <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
                            <HiMiniPlay/>{t("buttonkorish")}

                        </button>
                    </div>

                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src={OnlineImg}
                        alt="online"
                        className="w-full max-w-[700px] rounded-2xl shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
}

export default Online;
