import React from "react"
import badge from "../assets/badge.webp"
import book from "../assets/book.webp"
import phone from "../assets/phone.webp"
import teacher from "../assets/teacher.webp"
import programImg from "../assets/program.webp"
import { useTranslation } from "react-i18next"
export default function Features() {
  const { t } = useTranslation()
  return (
    <section className="bg-[#f6f7f9] px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1fr_1.2fr_1fr]
        "
      >
        {/* Oxford */}
        <div className="group relative bg-white rounded-[24px] lg:rounded-[28px] p-5 lg:p-6 overflow-hidden">
          <h3 className="text-[18px] lg:text-[20px] font-semibold mb-3 leading-snug">
            {t('dastur')}
          </h3>
          <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[22px] max-w-[90%]">
            {t("dasturP")}
          </p>

          <img
            src={programImg}
            alt=""
            className="
              absolute bottom-0 right-0
              w-[120px] lg:w-[160px]
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-105
            "
          />
        </div>

        {/* Student App */}
        <div
          className="
            group relative
            row-span-1 sm:row-span-2
            rounded-[24px] lg:rounded-[28px]
            p-5 lg:p-6 text-center
            bg-gradient-to-b from-[#0e0e10] to-[#1b1b1d]
            text-white overflow-hidden
          "
        >
          <h2 className="text-[20px] lg:text-[22px] font-semibold mb-4">
            {t("appT1")}
          </h2>

          <img
            src={phone}
            alt=""
            className="
              mx-auto
              h-[260px] sm:h-[300px] lg:h-[360px]
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-105
            "
          />

          <p className="text-[14px] lg:text-[15px] text-gray-300 leading-[22px] max-w-[90%] mx-auto">
            {t("appTp")}
          </p>

          <button
            className="
              mt-5 lg:mt-6
              inline-flex items-center gap-2
              rounded-full bg-[#FBBF24]
              px-5 lg:px-6 py-3
              text-[13px] lg:text-[14px]
              font-semibold text-black
              transition hover:scale-105
            "
          >
            ▶ {t("appButton")}
          </button>
        </div>

        {/* Teachers */}
        <div className="group relative bg-white rounded-[24px] lg:rounded-[28px] p-5 lg:p-6 overflow-hidden">
          <h3 className="text-[18px] lg:text-[20px] font-semibold mb-3">
            {t("ustozT")}
          </h3>
          <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[22px] max-w-[90%]">
            {t("ustozP")}
          </p>

          <img
            src={teacher}
            alt=""
            className="
              absolute bottom-0 right-0
              w-[120px] lg:w-[150px]
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-105
            "
          />
        </div>

        {/* IELTS X */}
        <div className="group relative bg-white rounded-[24px] lg:rounded-[28px] p-5 lg:p-6 overflow-hidden">
          <h3 className="text-[18px] lg:text-[20px] font-semibold mb-2">
            {t("darajaT")}
          </h3>
          <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[22px] max-w-[90%]">
            {t("darajaP")}
          </p>

          <button
            className="
              mt-4
              inline-flex items-center gap-2
              rounded-full border border-gray-300
              px-4 lg:px-5 py-2
              text-[13px] lg:text-[14px]
              transition hover:bg-gray-100
            "
          >
            ▶ {t("darajaTugma")}
          </button>

          <img
            src={book}
            alt=""
            className="
              absolute bottom-4 right-4
              w-[100px] lg:w-[120px]
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-105
            "
          />
        </div>

        {/* Academic support */}
        <div className="group relative bg-white rounded-[24px] lg:rounded-[28px] p-5 lg:p-6 overflow-hidden">
          <h3 className="text-[18px] lg:text-[20px] font-semibold mb-2">
            {t("support")}
          </h3>
          <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[22px] max-w-[90%]">
            {t("supportT")}
          </p>

          <img
            src={badge}
            alt=""
            className="
              absolute bottom-4 right-4
              w-[110px] lg:w-[130px]
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  )
}
