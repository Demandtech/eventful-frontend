import Image from "next/image";
import { Button, CardContent, Card } from "../ui";

function CategoryCard({ img, name }: { img: string; name: string }) {
  return (
    <Card className="w-full">
      <CardContent className="p-0  h-[340px] w-full">
        <div className=" relative  overflow-hidden h-full rounded-2xl ">
          <Image className=" object-cover" alt="Concert photo" fill src={img} />
        </div>
        <div className=" w-4/5 -translate-y-5 mx-auto ">
          <Button
            variant="secondary"
            className="w-full border-4 border-white  font-semibold "
          >
            {name}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
