import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Header from "../components/header";

const Contact = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "The fist name is too short!")
      .max(50, "The fist name is too long!")
      .required("First name is required"),
    lastName: Yup.string()
      .min(4, "The last name is too short!")
      .max(50, "The last name is too long!")
      .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    options: Yup.string().required("Email is required"),
    message: Yup.string()
      .min(10, "The message is too short!")
      .max(100, "The message is too long!")
      .required("A message is required"),
  });
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Contact</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            options: "",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{ display: "flex", flexDirection: "column", width: "30%" }}
            >
              <Field
                name="firstName"
                placeholder="First name"
                style={{
                  border: "solid 2px lightgray",
                  borderRadius: "5px",
                  height: "35px",
                  paddingLeft: "10px",
                  marginTop: "20px",
                }}
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field
                name="lastName"
                placeholder="Last name"
                style={{
                  border: "solid 2px lightgray",
                  borderRadius: "5px",
                  height: "35px",
                  paddingLeft: "10px",
                  marginTop: "20px",
                }}
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                style={{
                  border: "solid 2px lightgray",
                  borderRadius: "5px",
                  height: "35px",
                  paddingLeft: "10px",
                  marginTop: "20px",
                }}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label
                style={{
                  marginTop: "20px",
                }}
              >
                Subject
              </label>
              <Field
                as="select"
                name="options"
                style={{
                  border: "solid 2px lightgray",
                  borderRadius: "5px",
                  height: "35px",
                  paddingLeft: "10px",
                }}
              >
                <option value=""></option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="blue">Eyecolor</option>
              </Field>
              {errors.options && touched.options ? (
                <div>{errors.options}</div>
              ) : null}
              <label
                style={{
                  marginTop: "20px",
                }}
              >
                Message:
              </label>
              <Field
                name="message"
                as="textarea"
                style={{
                  border: "solid 2px lightgray",
                  borderRadius: "5px",
                  height: "70px",
                  paddingLeft: "10px",
                }}
              />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
              <button
                type="submit"
                style={{
                  border: "none",
                  height: "45px",
                  borderRadius: "10px",
                  marginTop: "30px",
                }}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
