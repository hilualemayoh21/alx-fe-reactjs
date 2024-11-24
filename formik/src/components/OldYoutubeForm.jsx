import React from "react";
import styles from "./style.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "required";
  }

  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email format ";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};
const formSchema = Yup.object({
  name: Yup.string().required("required!"),
  email: Yup.string().email("invalid email format!").required(),
  channel: Yup.string().required("required!"),
});
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form submitted", values);
};
function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    formSchema,
    validationSchema: formSchema,
  });
  return (
    <>
      <div className={styles.formWarpper}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.formcontrol}>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={styles.textInput}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.errors}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.formcontrol}>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={styles.emailInput}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.errors}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.formcontrol}>
            <input
              type="text"
              name="channel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channel}
              className={styles.channelInput}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className={styles.errors}>{formik.errors.channel}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default OldYoutubeForm;
