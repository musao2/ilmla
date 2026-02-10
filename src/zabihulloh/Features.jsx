import React from "react"
import badge from "../assets/badge.webp"
import book from "../assets/book.webp"
import phone from "../assets/phone.webp"
import teacher from "../assets/teacher.webp"
import programImg from "../assets/program.webp"

export default function Features() {
    return (
        <section className="bg-[#f6f7f9] px-16 py-16">
            <div className="grid grid-cols-[1fr_1.2fr_1fr] gap-6">


                <div className="group relative bg-white rounded-[28px] p-6 overflow-hidden">
                    <h3 className="text-[20px] font-semibold mb-3 leading-snug">
                        Oxford University Press dasturi
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[22px] max-w-[88%]">
                        Umumiy ingliz tilining 5 bosqichi uchun dunyoning eng yetakchi va
                        litsenziyalangan Britaniya o‘quv dasturi.
                    </p>

                    <img
                        src={programImg}
                        alt=""
                        className="absolute bottom-0 right-0 w-[160px] object-contain
                       transition-all duration-300 ease-out
                       group-hover:-translate-y-2 group-hover:scale-105 group-hover:z-10"
                    />
                </div>


                <div className="group relative row-span-2 rounded-[28px] p-6 text-center
                        bg-gradient-to-b from-[#0e0e10] to-[#1b1b1d]
                        text-white overflow-hidden">
                    <h2 className="text-[22px] font-semibold mb-4">
                        Student App raqamli platforma
                    </h2>

                    <img
                        src={phone}
                        alt=""
                        className="mx-auto  h-[360px] object-contain
                       transition-all duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
                    />

                    <p className="text-[15px] text-gray-300 leading-[22px] max-w-[85%] mx-auto">
                        Ingliz tili o‘rganishning ikkinchi avlod ta’limi, yangi so‘zlarni
                        yodlash va uy vazifalarini bajarish endi raqamli platformada.
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2
                             rounded-full bg-[#FBBF24]
                             px-6 py-3 text-[14px]
                             font-semibold text-black
                             transition hover:scale-105">
                        ▶ Platformani ko‘rish
                    </button>
                </div>


                <div className="group relative bg-white rounded-[28px] p-6 overflow-hidden">
                    <h3 className="text-[20px] font-semibold mb-3">
                        IELTS 9.0 va CELTA egalardan darslar
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[22px] max-w-[88%]">
                        Har bir talaba uchun 3ta malakali o‘qituvchilar.
                    </p>

                    <img
                        src={teacher}
                        alt=""
                        className="absolute bottom-0 right-0 w-[150px] object-contain
                       transition-all duration-300
                       group-hover:-translate-y-2 group-hover:scale-105 group-hover:z-10"
                    />
                </div>


                <div className="group relative bg-white rounded-[28px] p-6 overflow-hidden">
                    <h3 className="text-[20px] font-semibold mb-2">
                        © IELTS X — faqat bizda!
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[22px] max-w-[88%]">
                        IELTS 9.0 egalari va Native Speakerlar tomonidan ishlab chiqilgan
                        yagona o‘quv dasturi.
                    </p>

                    <button className="mt-4 inline-flex items-center gap-2
                             rounded-full border border-gray-300
                             px-5 py-2 text-[14px]
                             font-medium transition hover:bg-gray-100">
                        ▶ Dasturini ko‘rish
                    </button>

                    <img
                        src={book}
                        alt=""
                        className="absolute bottom-4 right-4 w-[120px] object-contain
                       transition-all duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
                    />
                </div>


                <div className="group relative bg-white rounded-[28px] p-6 overflow-hidden">
                    <h3 className="text-[20px] font-semibold mb-2">
                        Academic support
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[22px] max-w-[88%]">
                        Har bir o‘quvchi bilan individual ishlash uchun darsdan tashqari
                        qo‘shimcha o‘qituvchi.
                    </p>

                    <img
                        src={badge}
                        alt=""
                        className="absolute bottom-4 right-4 w-[130px] object-contain
                       transition-all duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
                    />
                </div>

            </div>
        </section>
    )
}
