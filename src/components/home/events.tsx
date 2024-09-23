import React, { useState } from "react";
import EventCard from "./eventCard";
import { Button } from "../ui";
import { events } from "@/lib/dummy-data";

function Events({ header = "Top Picks Near You" }) {
  const [displayEvents, setEvents] = useState(events);
  return (
    <div className="mt-10 w-full">
      <h2 className="lg:text-3xl font-bold pb-5 mb-10 border-b">{header}</h2>
      <div className="relative">
        <ul className="">
          {displayEvents.map((event) => {
            return (
              <li key={event._id} className=" border-b py-3">
                <EventCard {...event} />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center left-0 right-0 items-end lg:absolute bottom-0 bg-gradient-to-t from-white to-white/5 lg:h-28">
          <Button
            onClick={() => {
              const latest = [
                ...displayEvents,
                {
                  _id: "5555",
                  time: "10:00am",
                  date: "Aug 13 Sun",
                  name: "Elements Music",
                  venue: "Sunday Pocono Raceway",
                  price: "2000",
                  img: "/assets/images/event1.png",
                },
              ];
              setEvents(latest);
            }}
            className="text-btn-primary"
            size="lg"
            variant="default"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Events;
