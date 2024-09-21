import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ticketTypes } from "@/app/details/[eventId]/page";
import BookButton from "../reusables/BookButton";
import { Event } from "@/types";

function EventCard({ name, time, date, _id, img, venue }: Event) {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10 lg:max-w-[50%]">
        <div className="text-sm block lg:hidden font-semibold text-black/70">
          <time>{time}</time> <span> • </span>
          <time>{date}</time>
        </div>
        <div className="min-w-28 w-full rounded-2xl overflow-hidden lg:w-auto h-28 relative">
          <Image
            sizes="(max-width:112px)"
            className="object-cover object-center"
            alt=""
            src={img}
            fill
          />
        </div>
        <div>
          <div className="text-sm hidden lg:block font-semibold text-black/70">
            <time>{time}</time> <span> • </span>
            <time>{date}</time>
          </div>
          <p className="text-lg  font-bold">{name}</p>
          <p className="font-bold">{venue}</p>
        </div>
      </div>
      <div
        className="lg:ml-auto gap-3 space-y-2  flex lg:block
      "
      >
        <Button
          onClick={() => router.push(`/details/${_id}`)}
          variant="outline"
          size="md"
          className="block w-full mt-2 lg:mt-0 border-btn-primary text-btn-primary text-xs lg:text-sm"
        >
          View Details
        </Button>

        <BookButton packages={ticketTypes} />
      </div>
    </div>
  );
}

export default EventCard;
