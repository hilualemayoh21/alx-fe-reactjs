import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validateschema = Yup.object({
  username: Yup.string().required("username required"),
  email: Yup.string().email("invalid email format").required("email required"),
  password: Yup.string().required("password required"),
});
function FormikForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validateschema}
      >
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default FormikForm;
