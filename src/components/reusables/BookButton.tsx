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
import { formatPrice } from "@/lib/utils";

function BookButton({ packages }: { packages: TicketType[] }) {
  const [bookingType, setBookingType] = useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-btn-primary whitespace-nowrap py-2 text-white rounded-3xl md:max-w-36 justify-between px-4 w-full flex gap-3">
        Book Now <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>Ticket type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          onValueChange={setBookingType}
          value={String(bookingType)}
        >
          {packages.map((ticket, index) => {
            return (
              <DropdownMenuRadioItem key={index} value={String(ticket.price)}>
                {ticket.name} (₦{formatPrice(ticket.price)})
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BookButton;
