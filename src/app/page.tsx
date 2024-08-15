"use client";

import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import Image from "next/image";
import banner from "../../public/assets/images/banner.png";
import Link from "next/link";

export default function Home() {
  return (
    <PagesLayout>
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <Image objectFit="cover" alt="Banner" src={banner} layout="fill" />
        <div className="z-10 lg:w-2/5 lg:left-10 absolute top-1/2 -translate-y-1/2 text-white">
          <h1 className="font-bold leading-[80px] text-6xl mb-10">
            Get your music fix with festival
          </h1>
          <Link href={"/concert"}>
            <span className="bg-white text-btn-secondary rounded-2xl px-5 py-2 font-semibold">
              Book now
            </span>
          </Link>
        </div>
      </div>
    </PagesLayout>
  );
}
