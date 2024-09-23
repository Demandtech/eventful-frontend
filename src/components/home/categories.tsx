import { categories } from "@/lib/dummy-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import CategoryCard from "./categoryCard";   


function Categories() {
  return (
    <div className="w-full">
      <h2 className="lg:text-3xl font-bold pb-5 mb-5 border-b">
        Browse By Category
      </h2>
      <Carousel className="flex h-[280px] lg:h-[370px] justify-center w-full ">
        <CarouselContent className="w-full">
          {categories.map((category, index) => {
            return (
              <CarouselItem
                className=" md:basis-1/3 lg:basis-1/4 min-w-[320px]"
                key={index}
              >
                <CategoryCard {...category} />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div>
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}

export default Categories;
