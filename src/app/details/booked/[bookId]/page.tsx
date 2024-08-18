"use client";
import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button } from "@/components/ui";
import { ArrowLeft, DownloadCloudIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

function Page() {
  const { bookId } = useParams();
  const router = useRouter();
  console.log({ bookId });

  return (
    <PagesLayout>
      <div className="min-h-[calc(100vh-443px)]">
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
            <h1 className="font-bold px-2 text-white text-center lg:leading text-4xl lg:text-6xl mb-5 lg:mb-10 backdrop-blur-sm">
              Sunday Pocono Raceway
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-10 lg:flex-row gap-10">
          <div className="w-full sm:max-w-[300px]">
            <div className="w-full h-[300px] relative ">
              <Image
                fill
                alt="Booking qr code"
                src="/assets/images/qrcode.png"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="/assets/images/qrcode.png"
                download={`${"Elements Music and Arts Festival event"
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.png`}
                className="inline-flex items-center px-4 py-1 rounded-md gap-2 justify-center border border-btn-primary text-btn-primary"
              >
                Save <DownloadCloudIcon />
              </a>
            </div>
          </div>
          <div className="">
            <ul className="space-y-5">
              <li>
                <strong>Ticket Number: </strong> <span>Ticket-7647836D7D</span>
              </li>
              <li>
                <strong>Event name: </strong>{" "}
                <span>Elements Music and Arts Festival</span>
              </li>
              <li>
                <strong>Time: </strong> <span>10:00am</span>
              </li>
              <li>
                <strong>Date: </strong> <span>Aug 13 Sun</span>
              </li>
              <li>
                <strong>Venue: </strong> <span>Sunday Pocono Raceway</span>
              </li>
              <li>
                <strong>Ticket owner: </strong> <span>Rasheed Adekunle</span>
              </li>
              <li>
                <strong>Event creator: </strong> <span>John Kennedy</span>
              </li>
              <li>
                <strong>Amount: </strong> <span>₦2000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-5">
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
