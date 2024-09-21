import Image from "next/image";
import { Button, CardContent, Card } from "../ui";
import { useRouter } from "next/navigation";

function CategoryCard({ img, name }: { img: string; name: string }) {
  const router = useRouter();
  return (
    <Card className="w-full">
      <CardContent className="p-0  h-[250px] lg:h-[340px] w-full">
        <div className=" relative  overflow-hidden h-full rounded-2xl ">
          <Image sizes="(max-width:300px)" className=" object-cover" alt="Concert photo" fill src={img} />
        </div>
        <div className=" w-4/5 -translate-y-5 mx-auto ">
          <Button
            variant="secondary"
            className="w-full border-4 border-white  font-semibold "
            onClick={() => router.push(`/categories/${name}`)}
          >
            {name}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
