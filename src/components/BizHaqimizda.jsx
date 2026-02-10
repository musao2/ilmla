import React from "react";
import Video from "../images/heroVideo.mp4";
import Bir from '../images/1.svg'
import Ikki from '../images/2.svg'
import Uch from '../images/3.svg'
import Tort from '../images/4.svg'
import Besh from '../images/5.svg'

function Bi() {
  const stats = [
    { title: "Filiallar", value: "13", icon: Bir },
    { title: "Xodimlar", value: "600+", icon: Ikki },
    { title: "Faoliyat davri", value: "13 yil", icon: Uch },
    { title: "O'quvchilar", value: "21,000+", icon: Tort },
    { title: "Bitiruvchilar", value: "200,000+", icon: Besh },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center font-bold text-4xl mb-12">Biz haqimizda</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
          <video
            className="w-full h-full object-cover"
            src={Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-6 gap-6">
          
          {stats.slice(0, 3).map((stat, i) => (
            <div
              key={i}
              className="col-span-2 relative bg-[#f3f3f3] rounded-2xl p-6 min-h-[120px]"
            >
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>

              <img
                src={stat.icon}
                alt=""
                className="absolute bottom-0 right-0 w-20 opacity-80 pointer-events-none"
              />
            </div>
          ))}

          {stats.slice(3, 5).map((stat, i) => (
            <div
              key={i}
              className="col-span-3 relative bg-[#f3f3f3] rounded-2xl p-6 min-h-[120px]"
            >
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>

              <img
                src={stat.icon}
                alt=""
                className="absolute bottom-0 right-0 w-24 opacity-80 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bi;
