import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
} from "@/components/svgs";
import {
  EnvelopeClosedIcon,
  CalendarIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

function Footer() {
  return (
    <div className=" max-w-[1440px] mx-auto bg-[#04092c] text-white  ">
      <div className="py-10 px-3 gap-10 md:px-5 lg:px-20 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1">
          <Link href="/">
            <p className="uppercase font-bold text-4xl tracking-wide first-letter:text-btn-primary">
              Eventful
            </p>
          </Link>
          <div className="flex gap-2 mt-10">
            <a
              className="bg-[#1877F2] w-7 h-7 rounded-md justify-center flex items-center"
              href="#"
            >
              <FacebookIcon />
            </a>
            <a
              className="bg-black w-7 h-7 rounded-md justify-center flex items-center"
              href="#"
            >
              <XIcon />
            </a>
            <a
              className="bg-[#0a66c2] w-7 h-7 rounded-md justify-center flex items-center"
              href="#"
            >
              <LinkedinIcon />
            </a>
            <a
              style={{
                background:
                  "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
              }}
              className=" w-7 h-7 rounded-md justify-center flex items-center"
              href="#"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <ul className="space-y-5">
            <li className="font-semibold text-sm lg:text-base">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="font-semibold text-sm lg:text-base">
              <Link href={"/"}>About Us</Link>
            </li>
            <li className="font-semibold text-sm lg:text-base">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="font-semibold text-sm lg:text-base">
              <Link href={"/"}>Trending Event</Link>
            </li>
            <li className="font-semibold text-sm lg:text-base">
              <Link href={"/"}>Categories</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <ul className="space-y-5">
            <li className=" font-extralight text-xs lg:text-sm flex justify-between">
              <div className="inline-flex items-center gap-2">
                <EnvelopeClosedIcon className="text-white/70" />
                <span>Email</span>
              </div>
              <p>sparessupport@metaticket.in</p>
            </li>
            <li className="font-extralight text-xs lg:text-sm  flex justify-between">
              <div>
                <span>Phone Number</span>
              </div>
              <p>(+234) 08145188560</p>
            </li>
            <li className=" font-extralight text-xs lg:text-sm flex justify-between">
              <div className="inline-flex items-center gap-2">
                <CalendarIcon className="text-white/70" />
                <span>Working Days</span>
              </div>
              <p>Monday - Sunday</p>
            </li>
            <li className=" font-extralight text-xs lg:text-sm flex justify-between">
              <div className="inline-flex items-center gap-2">
                <TimerIcon className="text-white/70" />
                <span>Working Hours</span>
              </div>
              <p>8:00AM - 8:00PM (WAT)</p>
            </li>
            <li className=" font-extralight text-xs lg:text-sm flex justify-between">
              <div>
                <span>Address</span>
              </div>
              <p className="max-w-[50%] text-end">
                717 Harrison St, Ibadan, Oyo, Nigeria
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-btn-primary text-center py-2">
        <span className="text-xs">© 2023 Eventful Private Limited</span>
      </div>
    </div>
  );
}

export default Footer;
