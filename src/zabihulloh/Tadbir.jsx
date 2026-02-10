import ustozlar from "../assets/event.webp"
import { useTranslation } from "react-i18next"
export default function Tadbir() {
  const { t } = useTranslation()
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10 lg:py-14">
      <div
        className="
          relative overflow-hidden
          rounded-[24px] lg:rounded-[32px]
          bg-gradient-to-r from-[#FFD400] to-[#FFE55A]
          px-6 sm:px-10 lg:px-14
          py-8 sm:py-10 lg:py-12
          flex flex-col lg:flex-row
          gap-10
          items-start lg:items-center
        "
      >
        {/* TEXT */}
        <div className="w-full lg:max-w-[60%] flex flex-col gap-5 sm:gap-6">
          <h1
            className="
              text-[24px] sm:text-[28px] lg:text-[34px]
              leading-[32px] sm:leading-[38px] lg:leading-[42px]
              font-bold text-black
            "
          >
            {t('oquvTadbir')}
          </h1>

          <div
            className="
              flex items-start gap-3
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[24px] sm:leading-[26px] lg:leading-[28px]
              text-black
            "
          >
            <span className="text-[20px] lg:text-[22px]">✨</span>
            <p>
             {t("oquvTadbirP")}
            </p>
          </div>

          <div
            className="
              flex items-start gap-3
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[24px] sm:leading-[26px] lg:leading-[28px]
              text-black
            "
          >
            <span className="text-[20px] lg:text-[22px]">✨</span>
            <p>
              {t("oquvTadbirP1")}
            </p>
          </div>

          <button
            className="
              mt-3 sm:mt-4
              w-fit flex items-center gap-3
              rounded-full bg-white
              px-5 sm:px-6 lg:px-7
              py-3 sm:py-3.5 lg:py-4
              text-[15px] sm:text-[16px] lg:text-[18px]
              font-medium
              transition hover:scale-105
            "
          >
            {t("oquvTadbirButton")}
            <span
              className="
                flex items-center justify-center
                w-7 h-7 lg:w-8 lg:h-8
                rounded-full border border-black
              "
            >
              ↗
            </span>
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={ustozlar}
          alt=""
          className="
            static lg:absolute
            mx-auto lg:mx-0
            lg:right-0 lg:bottom-[10px]
            w-[260px] sm:w-[320px] lg:w-[420px]
            object-contain
          "
        />
      </div>
    </section>
  )
}
