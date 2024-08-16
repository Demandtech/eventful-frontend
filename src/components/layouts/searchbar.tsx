"use client";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/reusables/datepicker";
import { useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon, LocateIcon } from "lucide-react";

function Searchbar() {
  const [date, setDate] = useState<Date>();

  return (
    <form className="bg-white gap-5 p-5 w-full flex items-center rounded-lg mt-5">
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-3">
        <div className="w-full relative shadow-lg rounded-3xl ">
          <Input
            className="rounded-3xl pl-12"
            placeholder="Search by Event, Venue, Creator..."
            name="search"
            type="text"
          />

          <SearchIcon className="text-btn-primary absolute top-1/2  left-4 -translate-y-1/2" />
        </div>
        <div className="relative w-full shadow-lg rounded-3xl ">
          <Input
            className="rounded-3xl  pl-12"
            placeholder="state or city"
            name="location"
            type="text"
          />
          <LocateIcon className="text-btn-primary absolute top-1/2  left-4 -translate-y-1/2" />
        </div>

        <div className="lg:max-w-[200px] w-full shadow-lg rounded-3xl">
          <DatePicker date={date} setDate={setDate} />
        </div>
      </div>
      <div className="ml-auto w-full max-w-24 lg:max-w-40 shadow-lg rounded-3xl">
        <Button className="w-full" size="md">
          Search
        </Button>
      </div>
    </form>
  );
}

export default Searchbar;
