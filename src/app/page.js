import ImageCarousel from "@/components/carousel";
import Link from "next/link";

const images = [
  "/images/1-fa.png",
  "/images/2-fa.png",
  "/images/3-fa.png",
  "/images/4-fa.png",
  "/images/5-fa.png",
];

export default function Home() {
  return (
    <div className="">
      <main className="flex items-center justify-between">
      <div className="">
          <ImageCarousel images={images}/>
        </div>
        <div className="flex flex-col items-center justify-between h-screen px-8 py-16">
        <div>
        <h1 className="font-bold text-start text-5xl">
        <span className="block text-white">Welcome to</span>
        <span className="block text-[#84c4eb]">Gramatic</span>
      </h1>
      <h2 className="text-3xl pt-4">
        با اپلیکیشن Gramatic، حساب اینستاگرام خود را بدون زحمت مدیریت کنید
      </h2>
        </div>
        <div>
          <div className="flex items-center justify-center bg-[#84c4eb] p-4 text-white text-xl font-bold rounded-3xl transition-all duration-500 hover:text-cyan-900">
            <Link href={'/signup'}>
            ثبت نام کنید
            </Link>
          </div>
          <div className="pt-4">
          <Link className="text-[#84c4eb] font-bold text-xl hover:text-white transition-all duration-500" href={'/login'}>
          حساب کاربری دارید؟ وارد شوید.
          </Link>
          </div>
        </div>
        </div>
        
      </main>
    </div>
  );
}
