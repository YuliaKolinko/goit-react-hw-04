import css from "./SearchBox.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <Formik
        initialValues={{ search: value }}
        validationSchema={Yup.object({
          search: Yup.string()
            .min(3, "You must enter at least 3 characters")
            .max(50, "You cannot write more than 50 characters"),
        })}
        onSubmit={(values) => {
          onFilter(values.search);
        }}
      >
        {({ handleChange }) => (
          <Form className={css.form}>
            <label htmlFor="search" className={css.label}>
              Find contacts by name
            </label>
            <Field
              className={css.input}
              type="text"
              name="search"
              onChange={(element) => {
                handleChange(element);
                onFilter(element.target.value);
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
