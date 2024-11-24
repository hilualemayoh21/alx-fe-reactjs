import React from "react";
import styles from "./style.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
function YoutubeForm() {
  return (
    <>
      <div className={styles.formWarpper}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          //validate,
          validationSchema={formSchema}
        >
          <Form className={styles.form}>
            <div className={styles.formcontrol}>
              <Field type="text" name="name" className={styles.textInput} />
              <br />
              <ErrorMessage name="name" />
            </div>
            <div className={styles.formcontrol}>
              <Field type="email" name="email" className={styles.emailInput} />
              <br />
              <ErrorMessage name="email" />
            </div>
            <div className={styles.formcontrol}>
              <Field
                type="text"
                name="channel"
                className={styles.channelInput}
              />
              <br />
              <ErrorMessage name="channel" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default YoutubeForm;
