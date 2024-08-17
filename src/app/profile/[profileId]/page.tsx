"use client";

import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

function Page() {
  const router = useRouter();

  const { profileId } = useParams();

  console.log(profileId);

  return (
    <PagesLayout>
      <div className="min-h-[calc(100vh-580px)]">
        <Button
          onClick={() => router.back()}
          className="px-0"
          variant="default"
        >
          <ArrowLeft /> Back
        </Button>
      </div>
    </PagesLayout>
  );
}

export default Page;
