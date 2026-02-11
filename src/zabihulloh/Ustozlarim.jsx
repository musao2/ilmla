import { FaPlay } from "react-icons/fa";

import bir from "../assets/1.webp";
import ikki from "../assets/2.webp";
import uch from "../assets/3.webp";
import tort from "../assets/4.webp";
import besh from "../assets/5.webp";
import olti from "../assets/6.webp";
import yetti from "../assets/7.webp";
import sakkiz from "../assets/8.webp";
import toqqiz from "../assets/9.webp";
import on from "../assets/10.webp";

const teachers = [
    { id: 1, img: bir },
    { id: 2, img: ikki },
    { id: 3, img: uch },
    { id: 4, img: tort },
    { id: 5, img: besh },
    { id: 6, img: olti },
    { id: 7, img: yetti },
    { id: 8, img: sakkiz },
    { id: 9, img: toqqiz },
    { id: 10, img: on },
];

export default function Teachers() {
    return (
        <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#f5f5f5]">
            <h1 className="text-3xl md:text-3xl font-bold text-center mb-8">USTOZLARIMIZ</h1>
            <h1 className="text-xl md:text-2xl font-small text-center mb-14">CELTA va IELTS 9.0 sertifikatiga ega oliy toifali mutaxassislar.</h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5  gap-8  ">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="relative   h-[280px] w-[210px] rounded-[28px]  overflow-hidden group transition-all duration-500 hover:scale-105 hover:z-20 hover:shadow-2xl">
                        <div className="absolute  inset-0 bg-gradient-to-b from-[#FFD84D] to-[#F4A300]" />

                        <img src={teacher.img} alt="teacher" className="absolute bottom-0 w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"/>
                         <div className="absolute inset-0  transition " />
                          <div className="absolute inset-0 flex items-center justify-center top-[-220px] right-[-130px]">
                            <div className="w-10 h-10  bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110  group-hover:bg-white">
                                <FaPlay className="text-yellow-500 ml-1" size={20} />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-center   ">
                <button className="bg-gray-800  rounded-3xl font-sans text-amber-50 text-xl py-2 pl-2 justify-center items-center  flex ">✨Ro`yxatdan o`tish</button>
                </div>
            </div>
        </section>
    );
}
