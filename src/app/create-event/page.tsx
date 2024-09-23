"use client";

import PagesLayout from "@/components/layouts/mainlayout/pagesLayout";
import { Button, Input, Label } from "@/components/ui";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import moment from "moment";
import { createEventSchema } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";

function ErrorComp({ errorMessage }: { errorMessage: string | undefined }) {
  return (
    <div className="text-xs p-2 bg-error-foreground text-error">
      <span>{errorMessage}</span>
    </div>
  );
}

function Page() {
  const router = useRouter();
  const [categories, setCategories] = useState([{ name: "", price: "" }]);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
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
      description: "",
    },
  });

  const currentCategory = getValues().categories;

  const addNewCategory = () => {
    const isDataEmpty = currentCategory?.some((cat) => !cat.name || !cat.price);

    if (isDataEmpty) {
      console.log("Error Dey o");

      toast({
        variant: "destructive",
        description: "Name and Price can not be empty",
        duration: 3000,
      });

      return;
    }

    setCategories((prevCategories) => [
      ...prevCategories,
      { name: "", price: "" },
    ]);
  };

  const removeCategory = (index: number) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
    const updatedCategories = currentCategory?.filter((_, i) => i !== index);
    setValue("categories", updatedCategories);
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
            <div className="grid md:grid-cols-2 gap-5 md:gap-10">
              <div className="flex flex-1 flex-col gap-2">
                <div>
                  <Label>Name</Label>
                  <Input
                    {...register("name")}
                    className="h-12"
                    placeholder="Enter event name"
                    isError={errors.name}
                    errorMessage={errors.name?.message}
                  />
                </div>
                <div>
                  <Label>Venue</Label>
                  <Input
                    {...register("venue")}
                    className="h-12"
                    placeholder="Enter event venue"
                    isError={errors.venue}
                    errorMessage={errors.venue?.message}
                  />
                </div>
                <div className="flex gap-2 sm:gap-5">
                  <div className="flex-1">
                    <Label>Date</Label>
                    <Input
                      {...register("date")}
                      className="h-12"
                      type="date"
                      placeholder="Enter event name"
                      min={moment().format("YYYY-MM-DD")}
                      isError={errors.date}
                      errorMessage={errors.date?.message}
                    />
                  </div>
                  <div className="flex-1">
                    <Label className="">Time</Label>
                    <div
                      className={`flex pr-2 h-12 overflow-hidden border sm:gap-1 rounded-md items-center
                      `}
                    >
                      <Input
                        className="h-12 w-12 border-0 outline-none"
                        type="text"
                        placeholder="HH"
                        {...register("hour", { maxLength: 2 })}
                      />
                      <Input
                        className=" h-12 w-12 border-0"
                        type="text"
                        placeholder="MM"
                        {...register("minute", { maxLength: 2 })}
                      />
                      <select
                        {...register("ampm", { maxLength: 2 })}
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
                    {errors.time ||
                    errors.hour ||
                    errors.minute ||
                    errors.ampm ? (
                      <ErrorComp errorMessage="Event full time is required" />
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex w-full gap-2 sm:gap-5">
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
                                  {...register(`categories.${index}.name`)}
                                  isError={errors.categories?.[index]?.name}
                                  errorMessage={
                                    errors?.categories?.[index]?.name?.message
                                  }
                                />
                              )}
                            />
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
                                    isError={errors.categories?.[index]?.price}
                                    errorMessage={
                                      errors?.categories?.[index]?.price
                                        ?.message
                                    }
                                  />
                                )}
                              />

                              {/* {errors.categories?.[index]?.price && (
                                <p className="text-xs font-semibold text-red-900">
                                  {errors.categories[index].price.message}
                                </p>
                              )} */}
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
              <div className="flex flex-col gap-2 relative">
                <div className="card ">
                  <Label>Desciption</Label>
                  <div className="relative">
                    <div className="">
                      <Editor
                        onTextChange={(e) =>
                          setValue("description", e.htmlValue || "")
                        }
                        {...register("description")}
                        style={{
                          height: "215px",
                        }}
                      />
                      {errors.description && (
                        <ErrorComp errorMessage={errors.description?.message} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-10 justify-center">
              <Button className="px-10 w-[350px] sm:max-w-md" variant="primary">
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
