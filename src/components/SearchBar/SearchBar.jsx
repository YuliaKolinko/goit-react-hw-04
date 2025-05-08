import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function SearchBar({ onSearch }) {
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
          onSearch(values.search);
          resetForm();
        }}
      >
        {() => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" className={css.btn}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
