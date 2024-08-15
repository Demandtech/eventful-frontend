"use client";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/reusables/datepicker";
import { useState } from "react";
import { Input } from "../ui/input";

function Searchbar() {
  const [date, setDate] = useState<Date>();

  return (
    <form className="bg-white p-5 flex items-center rounded-lg mt-5">
      <div className="flex">
        <div>
          <Input className="" placeholder="state or city" name="location" type="text"/>
        </div>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <Button size="md">Search</Button>
    </form>
  );
}

export default Searchbar;
