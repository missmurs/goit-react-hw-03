import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
export default function Contact({ name, number }) {
  return (
    <>
      <div className={css.contactBox}>
        <p className={css.contactNameBox}>
          <FaUserAlt />

          <span className={css.contactName}> {name}</span>
        </p>
        <p className={css.contactNumberBox}>
          <FaPhone />
          <span className={css.contactNumber}> {number}</span>
        </p>
      </div>
    </>
  );
}
