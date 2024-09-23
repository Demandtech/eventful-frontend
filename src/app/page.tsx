"use client";

import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import Image from "next/image";
import banner from "../../public/assets/images/banner.png";
import Link from "next/link";
import Categories from "@/components/home/categories";
import Events from "@/components/home/events";

export default function Home() {
  return (
    <PagesLayout>
      <div className="relative h-[250px] lg:h-[500px] rounded-2xl overflow-hidden">
        <Image className="object-cover" alt="Banner" src={banner} fill />
        <div className="z-10 lg:w-2/5 left-5 right-5 lg:right-0 lg:left-10 absolute top-1/2 -translate-y-1/2 text-white">
          <h1 className="font-bold lg:leading-[80px] text-4xl lg:text-6xl mb-5 lg:mb-10">
            Get your music fix with festival
          </h1>
          <div className="flex gap-2 ">
            <Link href="#books">
              <span className="bg-white border-white border-2 text-btn-secondary rounded-3xl px-5 py-2 font-semibold">
                Book now
              </span>
            </Link>
            <Link href={"/create-event"}>
              <span className="border-white border-2 text-btn-secondary rounded-3xl px-5 py-2 font-semibold">
                Create Event
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div id="books" className="lg:mt-10 scroll-smooth">
        <Categories />
        <Events />
      </div>
    </PagesLayout>
  );
}
