import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function SearchBar({ onSubmit }) {
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        validationSchema={Yup.object({
          search: Yup.string()
            .min(3, "You must enter at least 3 characters")
            .max(50, "You cannot write more than 50 characters"),
        })}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.search);
          resetForm();
        }}
      >
        <Form className={css.form}>
          <label htmlFor="search" className={css.label}></label>
          <Field
            className={css.input}
            type="text"
            name="search"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
