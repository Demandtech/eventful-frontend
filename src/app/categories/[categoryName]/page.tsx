"use client";
import Events from "@/components/home/events";
import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

function Page() {
  const { categoryName } = useParams();
  const router = useRouter();

  return (
    <PagesLayout>
      <div className="min-h-[calc(100vh-428px)]">
        <div
          className="h-52 pl-5 pt-4 rounded-2xl overflow-hidden"
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
        </div>

        <Events header={`${categoryName} Events For you`} />
      </div>
    </PagesLayout>
  );
}

export default Page;
