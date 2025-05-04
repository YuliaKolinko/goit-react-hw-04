import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.conteiner}>
      <div className={css.info}>
        <div className={css.icon_box}>
          <FaUser />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.icon_box}>
          <FaPhoneAlt />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
