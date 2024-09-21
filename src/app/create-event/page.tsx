"use client";

import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button, Input, Label } from "@/components/ui";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { TicketType } from "@/types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import moment from "moment";
import { createEventSchema } from "@/lib/schemas";

function Page() {
  const router = useRouter();
  const [categories, setCategories] = useState([{ name: "", price: "" }]);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEventSchema),
    defaultValues: {
      name: "",
      venue: "",
      date: undefined,
      hour: "",
      minute: "",
      ampm: "--",
      categories: [{ name: "", price: "" }],
    },
  });

  const addNewCategory = () => {
    const existingNames = categories.map((cat) =>
      cat.name.trim().toLowerCase()
    );
    // if (existingNames.some()) {
    //   alert("This category name already exists.");
    //   return;
    // }

    setCategories((prevCategories) => [
      ...prevCategories,
      { name: "", price: "" },
    ]);
  };

  const removeCategory = (index: number) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCreateEvent = (data: any) => {
    const formattedTime = `${data.hour}:${data.minute} ${data.ampm}`;
    const formattedData = {
      ...data,
      time: formattedTime,
    };

    console.log("Form Data: ", formattedData);
  };

  return (
    <PagesLayout>
      <div className="min-h-[calc(100vh-443px)]  h-full">
        <div className="mb-16">
          <Button
            onClick={() => router.back()}
            className="px-0  gap-2"
            variant="default"
          >
            <ArrowLeft /> Back
          </Button>
        </div>
        <div>
          <h2 className="text-center mb-5 text-4xl font-bold">Event Details</h2>
          <form
            onSubmit={handleSubmit(handleCreateEvent)}
            className="h-full"
            action=""
          >
            <div className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-1 flex-col gap-2">
                <div>
                  <Label>Name</Label>
                  <Input
                    {...register("name")}
                    className="h-12"
                    placeholder="Enter event name"
                  />
                  {errors.name && (
                    <p className="text-xs mt-1 font-semibold text-red-900">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Venue</Label>
                  <Input
                    {...register("venue")}
                    className="h-12"
                    placeholder="Enter event venue"
                  />
                  {errors.venue && (
                    <p className="text-xs font-semibold mt-1 text-red-900">
                      {errors.venue.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Date</Label>
                  <Input
                    {...register("date")}
                    className="h-12"
                    type="date"
                    placeholder="Enter event name"
                    min={moment().format("YYYY-MM-DD")}
                  />

                  {errors.date && (
                    <p className="text-xs font-semibold text-red-900">
                      {errors.date.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <Label className="">Time</Label>
                  <div className="flex pr-2  border gap-1 rounded-md items-center">
                    <Input
                      className="h-12 w-12 border-0"
                      type="text"
                      placeholder="HH"
                      {...register("hour")}
                    />
                    <Input
                      className="h-12 w-12 border-0"
                      type="text"
                      placeholder="MM"
                      {...register("minute")}
                    />
                    <select
                      {...register("ampm")}
                      defaultValue="--"
                      className="h-12 w-12 text-sm"
                    >
                      <option disabled value="--">
                        --
                      </option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  {errors.time && (
                    <p className="text-xs font-semibold text-red-900">
                      {errors.time.message}
                    </p>
                  )}
                  {errors.hour && (
                    <p className="text-xs font-semibold text-red-900">
                      {errors.hour.message}
                    </p>
                  )}
                  {errors.minute && (
                    <p className="text-xs font-semibold text-red-900">
                      {errors.minute.message}
                    </p>
                  )}
                  {errors.ampm && (
                    <p className="text-xs font-semibold text-red-900">
                      {errors.ampm.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <div className="flex flex-col gap-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex w-full gap-3">
                          <div className="flex-1">
                            <Label>Name</Label>
                            <div className="w-full">
                              <Controller
                                control={control}
                                name={`categories.${index}.name`}
                                render={() => (
                                  <Input
                                    placeholder="Enter ticket category name"
                                    className="h-12 w-full"
                                    // name="category"
                                    {...register(`categories.${index}.name`)}
                                  />
                                )}
                              />
                              {errors.categories?.[index]?.name && (
                                <p className="text-xs font-semibold text-red-900">
                                  {errors.categories[index].name.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <Label>Price(₦)</Label>
                            <div className="w-full">
                              <div>
                                <Controller
                                  control={control}
                                  name={`categories.${index}.price`}
                                  render={() => (
                                    <Input
                                      placeholder="Enter ticket category price"
                                      className="h-12"
                                      {...register(`categories.${index}.price`)}
                                    />
                                  )}
                                />

                                {errors.categories?.[index]?.price && (
                                  <p className="text-xs font-semibold text-red-900">
                                    {errors.categories[index].price.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-end pb-1.5 sm:pb-2">
                            {categories.length > 1 && index !== 0 && (
                              <Button
                                onClick={() => removeCategory(index)}
                                variant="default"
                                type="button"
                                className="px-1"
                              >
                                <Minus className="size-3 sm:size-4 md:size-5" />
                              </Button>
                            )}

                            {index === categories.length - 1 && (
                              <Button
                                variant="default"
                                type="button"
                                onClick={addNewCategory}
                                className="px-1"
                              >
                                <Plus className="size-3 sm:size-4 md:size-5" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="card">
                  <Label>Desciption</Label>
                  <div className="h-[150px] md:h-[300px]">
                    <Editor
                      // value={text}
                      // onTextChange={(e) => setText(e.htmlValue)}
                      className="h-full"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="flex mt-10 justify-center">
              <Button
                // onClick={() => router.back()}
                className="px-10 w-full sm:max-w-md"
                variant="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PagesLayout>
  );
}

export default Page;
