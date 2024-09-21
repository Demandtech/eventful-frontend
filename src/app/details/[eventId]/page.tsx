"use client";
import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import BookButton from "@/components/reusables/BookButton";
import { Button } from "@/components/ui";
import {
  ArrowLeft,
  Timer,
  Calendar,
  User,
  Hotel,
  Dot,
  DollarSign,
  Tag,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { TicketType } from "@/types";
import { formatPrice } from "@/lib/utils";

export const ticketTypes: TicketType[] = [
  { name: "Regular", price: "1000.00" },
  { name: "Vip", price:"2000.00" } ,
  { name: "VVip", price: "4000.00" },
  { name: "Table", price: "10000.00" },
];

function Page() {
  const { eventId } = useParams();
  const router = useRouter();
  console.log({ eventId });

  return (
    <PagesLayout>
      <div className="min-h-[calc(100vh-428px)]">
        <div
          className="h-52 relative lg:h-80 pl-5 pt-4 rounded-2xl overflow-hidden"
          style={{
            background: "url(/assets/images/banner.png) no-repeat center",
            backgroundSize: "cover",
          }}
        >
          <Button
            onClick={() => router.back()}
            className="px-0  text-white gap-2"
            variant="default"
          >
            <ArrowLeft /> Back
          </Button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-bold w-full px-2 text-white text-center lg:leading text-4xl lg:text-6xl mb-5 lg:mb-10 backdrop-blur-sm">
              Sunday Pocono Raceway
            </h1>
          </div>
        </div>
        <div className="mt-5 gap-3 lg:items-center flex-col md:flex-row flex">
          <BookButton packages={ticketTypes} />
          <ul className="md:items-center space-y-3 md:space-y-0 flex-wrap flex-col md:flex-row flex lg:ml-auto">
            <li className="flex space-x-1 items-center">
              <Timer className="text-btn-primary" />
              <span className="font-medium text-sm text-[#333333]">
                10:00am
              </span>
            </li>
            <Dot size={50} className="text-gray-500 hidden md:block" />
            <li className="flex space-x-1 items-center">
              <Calendar className="text-btn-primary" />
              <span className="font-medium text-sm text-[#333333]">
                Aug 13 Sun
              </span>
            </li>
            <Dot size={50} className="text-gray-500 text-4xl hidden md:block" />
            <li className="flex space-x-1 items-center">
              <Hotel className="text-btn-primary" />
              <span className="font-medium text-sm text-[#333333]">
                Sunday Pocono Raceway
              </span>
            </li>
            <Dot size={50} className="text-gray-500 hidden md:block" />
            <li className="flex space-x-1 items-center">
              <User className="text-btn-primary" />
              <span className="font-medium text-sm text-[#333333]">
                John Kennedy
              </span>
            </li>
            <Dot size={50} className="text-gray-500 hidden md:block" />
            <li className="flex space-x-1 items-center">
              <Tag className="text-btn-primary" />
              <span className="font-medium text-sm text-[#333333]">
                ₦{formatPrice(ticketTypes[0].price)}
              </span>
              -
              <span className="font-medium text-sm text-[#333333]">
                ₦{formatPrice(ticketTypes[ticketTypes.length - 1].price)}
              </span>
            </li>
          </ul>
        </div>
        <div className="border-t mt-5 pt-5">
          <div className="lg:max-w-4xl">
            <h3 className="font-bold mb-5">Description</h3>
            <p className="mb-5">
              Join us for the Tech Innovators Summit 2024, a premier event
              bringing together the brightest minds in technology,
              entrepreneurship, and innovation. This one-day summit is designed
              to inspire, educate, and connect professionals who are passionate
              about the future of technology. Whether you&apos;re an
              entrepreneur, developer, investor, or tech enthusiast, this event
              offers a unique opportunity to engage with industry leaders and
              like-minded peers.
            </p>
            <h3 className="font-bold mb-5">What to Expect</h3>
            <ul className="list-disc list-inside lg:max-w-[70%]">
              <li>
                <strong>Keynote Speeches:</strong> Hear from world-renowned tech
                leaders, including CEOs of top tech companies, who will share
                insights on the latest trends and future directions in
                technology.
              </li>
              <li>
                <strong>Panel Discussions:</strong> Participate in
                thought-provoking discussions with industry experts on topics
                such as AI, blockchain, and the metaverse.
              </li>
              <li>
                <strong>Interactive Workshops:</strong> Gain hands-on experience
                in our workshops, where you&apos;ll learn about cutting-edge
                tools and technologies that are shaping the future.
              </li>
              <li>
                <strong>Startup Showcase:</strong> Discover the next big thing
                as innovative startups present their groundbreaking ideas and
                compete for the &quot;Best in Show&quot; award.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> Connect with fellow
                attendees, speakers, and exhibitors during dedicated networking
                sessions and our exclusive after-party.
              </li>
            </ul>
            <p>
              Whether you&apos;re looking to expand your network, gain valuable
              knowledge, or explore new opportunities, the{" "}
              <strong>Tech Innovators Summit 2024</strong> has something for
              everyone.
            </p>
            <h3 className="font-bold my-5">Tickets</h3>
            <ul className="list-disc list-inside lg:max-w-[70%]">
              <li>
                <strong>General Admission:</strong> $299 - Access to all
                sessions, workshops, and networking events.
              </li>
              <li>
                <strong>VIP Admission:</strong> $499 - Includes priority
                seating, access to the VIP lounge, and a meet-and-greet with
                keynote speakers.
              </li>
            </ul>
            <h3 className="font-bold my-5">How to Register</h3>
            <p className="mb-3">
              Register now at{" "}
              <a
                className="text-btn-primary"
                href="www.techinnovatorssummit2024.com/register"
              >
                www.techinnovatorssummit2024.com/register
              </a>{" "}
              to secure your spot. Early bird pricing is available until August
              15, 2024, so don&apos;t miss out on this incredible opportunity!
            </p>
            <p>
              We look forward to welcoming you to the{" "}
              <strong>Tech Innovators Summit 2024</strong> and exploring the
              future of technology together!
            </p>
            <h3 className="font-bold my-5">How to Register</h3>
            <p>
              For more information, please contact Sarah Johnson at (555)
              123-4567 or{" "}
              <a
                className="text-btn-primary"
                target="_blank"
                href=" sarah.johnson@techsummit.com"
              >
                {" "}
                sarah.johnson@techsummit.com.
              </a>
            </p>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}

export default Page;
