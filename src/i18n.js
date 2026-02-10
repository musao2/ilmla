import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            about: "Biz haqimizda",
            prices: "Narxlar",
            results: "Natijalar",
            jobs: "Vakansiyalar",
            events: "Tadbirlar",
            ielts: "IELTS",
            offer: "Ommaviy offerta",
            faq: "FAQ",
            login: "Kirish",
            heroH1: "INTER NATION",
            heroH2: "ingliz tili va IELTS",
            pTag: "INTER NATION ingliz tili va IELTS O’zbekistondagi eng yirik ingliz tili o’quv markazi.",
            tugma: "Birinchi bepul darsga yozilish",
            biz: "Biz haqimizda",
            filialla: "Filiallar",
            xodimla: "Xodimlar",
            faoliyat: "Faoliyat davri",
            oquvchilar: "O'quvchilar",
            bituruvchilar: "Bitiruvchilar",
            dastur: "Oxford University Press dasturi",
            dasturP: "Umumiy ingliz tilining 5 bosqichi uchun dunyoning eng yetakchi va litsenziyalangan Britaniya o’quv dasturi.",
            appT1: "Student App raqamli platforma",
            appTp: "Ingliz tili o‘rganishning ikkinchi avlod ta’limi, yangi so‘zlarni yodlash va uy vazifalarini bajarish endi raqamli platformada.",
            appButton: 'Platformani ko‘rish',
            ustozT: "IELTS 9.0 va CELTA egalardan darslar",
            ustozP: " Har bir talaba uchun 3ta malakali o‘qituvchilar.",
            darajaT: "© IELTS X — faqat bizda!",
            darajaP: "IELTS 9.0 egalari va Native Speakerlar tomonidan ishlab chiqilgan yagona o‘quv dasturi.",
            darajaTugma: "Dasturini ko‘rish",
            support: "Academic support",
            supportT: "Har bir o‘quvchi bilan individual ishlash uchun darsdan tashqari qo‘shimcha o‘qituvchi.",
            oquvTadbir: "Studentlar uchun maxsus tashkillashtiriladigan tadbirlar",
            oquvTadbirP: " Mashhur inflyunserlar va muvaffaqiyatli biznesmenlar bilan uchrashuvlar",
            oquvTadbirP1: " Mashhur inflyunserlar va muvaffaqiyatli biznesmenlar bilan uchrashuvlar",
            oquvTadbirButton: "Tadbirlarni ko‘rish"

        }
    },
    en: {
        translation: {
            about: "About us",
            prices: "Prices",
            results: "Results",
            jobs: "Vacancies",
            events: "Events",
            ielts: "IELTS",
            offer: "Public offer",
            faq: "FAQ",
            login: "Login",
            heroH1: "INTER NATION",
            heroH2: "English and IELTS",
            pTag: "The largest English language learning center in Uzbekistan.",
            tugma: "Sign up for your first free lesson",
            biz: "ABOUT US",
            filialla: "Branches",
            xodimla: "Staff",
            faoliyat: "Activity period",
            oquvchilar: "Students",
            bituruvchilar: "Graduates",
            dastur: "Oxford University Press Program",
            dasturP: "The world’s leading and licensed British curriculum for five levels of general English.",
            appT1: "Student App Digital Platform",
            appTp: "The second-generation education for learning English, now on a digital platform for memorizing new words and doing homework. Personal lessons with AI tutor Professor Harry.",
            appButton: 'View the platform',
            ustozT: "Lessons from IELTS 9.0 and CELTA Holders",
            ustozP: "Three qualified teachers for each student",
            darajaT: "© IELTS X — Only with us!",
            darajaP: "The unique educational program developed by IELTS 9.0 holders and 'Native Speakers,' with copyright protection.",
            darajaTugma: "View the program",
            support: "Academic support",
            supportT: "An additional teacher for individual work with each student outside of regular lessons.",
            oquvTadbir: "Special Events Organized for Students",
            oquvTadbirP: "Meetings with famous influencers and successful entrepreneurs",
            oquvTadbirP1: "Free IELTS CD Mock exams and weekly special Speaking clubs",
            oquvTadbirButton: "View the events"
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false }
});

export default i18n;
