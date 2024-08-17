"use client";
import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

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
            <h1 className="font-bold px-2 text-white text-center lg:leading text-4xl lg:text-6xl mb-5 lg:mb-10 backdrop-blur-sm">
              Sunday Pocono Raceway
            </h1>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}

export default Page;
