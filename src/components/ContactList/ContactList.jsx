import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact data={{ id, name, number }} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
