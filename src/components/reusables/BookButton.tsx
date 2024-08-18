import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../ui";
import { useState } from "react";
import { TicketType } from "@/types";

function BookButton({ packages }: { packages: TicketType[] }) {
  const [bookingType, setBookingType] = useState(packages[0].price);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-btn-primary py-2 text-white rounded-3xl md:max-w-36 justify-between px-4 w-full flex gap-5">
        Book <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>Ticket type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          onValueChange={setBookingType}
          value={bookingType}
        >
          {packages.map((ticket, index) => {
            return (
              <DropdownMenuRadioItem key={ticket._id} value={ticket.price}>
                {ticket.name} (₦{ticket.price})
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BookButton;
