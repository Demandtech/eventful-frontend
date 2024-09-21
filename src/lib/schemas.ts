import moment from "moment";
import * as Yup from "yup";

export const createEventSchema = Yup.object().shape({
  name: Yup.string().required("Event name is required"),
  venue: Yup.string().required("Event venue is required"),
  date: Yup.date().min(new Date(), "Please choose future date"),
  hour: Yup.string()
    .required("Hour is required")
    .matches(/^(0?[0-9]|1[0-2])$/, "Invalid hour format"),
  minute: Yup.string()
    .required("Minute is required")
    .matches(/^([0-5][0-9])$/, "Invalid minute format"),
  ampm: Yup.string()
    .required("AM/PM is required")
    .oneOf(["AM", "PM", "--"], "Invalid AM/PM value"),
  time: Yup.string().test(
    "is-future",
    "Event time must be at least 6 hours from now",
    function (value) {
      const { date, hour, minute, ampm } = this.parent;

      if (!date || !hour || !minute || !ampm) return true;

      const formattedTime = `${hour}:${minute} ${ampm}`;
      const selectedDateTime = moment(
        `${moment(date).format("YYYY-MM-DD")} ${formattedTime}`,
        "YYYY-MM-DD hh:mm A"
      );
      const currentDateTime = moment();

      if (moment(date).isSame(currentDateTime, "day")) {
        return selectedDateTime.isAfter(currentDateTime.add(6, "hours"));
      }

      return true;
    }
  ),
  categories: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Category name is required"),
      price: Yup.string()
        .required("Category price is required")
        .matches(/^\d+(\.\d+)?$/, "Price must be a valid amount")
        .test(
          "no-leading-zero",
          "Price cannot have leading zeros",
          (value) => !/^0\d/.test(value) || /^\d+(\.\d+)?$/.test(value)
        ),
    })
  ),
});
