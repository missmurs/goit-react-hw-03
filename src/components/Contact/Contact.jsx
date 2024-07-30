import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
export default function Contact({ name, number }) {
  return (
    <>
      <div className={css.sectionContact}>
        <div className={css.contactBox}>
          <p className={css.contactName}>
            <FaUserAlt />
            {name}
          </p>
          <p className={css.contactNumber}>
            <FaPhone />
            {number}
          </p>
        </div>
        <divdiv className={css.contactButton}>
          <button type="submit">Delete</button>
        </divdiv>
      </div>
    </>
  );
}
