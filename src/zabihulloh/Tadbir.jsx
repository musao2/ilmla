import ustozlar from "../assets/event.webp"

export default function Tadbir() {
    return (
        <>
        <div className="flex flex-row gap-20 px-15 py-10 bg-yellow-300 rounded-3xl mx-15">
            <div className="flex flex-col gap-6 ">
                <h1 className="font-bold text-3xl ">Studentlar uchun maxsus tashkillashtiriladigan tadbirlar</h1>
                <p className="text-xl">Mashxur inflyunserlar va muvaffaqiyatli biznesmenlar bilan uchrashuvlar</p>
                <p className="text-xl">Bepul IELTS CD Mock imtihonlar va har hafta maxsus Speaking klublari</p>
                <button className="py-4 text-xl text-gray-390 rounded-xl  bg-white">Tadbirlarni Ko`rish</button>
            </div>
            <div>
                <img
                className="relative right-[-60px] top-30   w-80 "
                src={ustozlar} 
                alt="" />
            </div>
        </div>
        </>
    )
}