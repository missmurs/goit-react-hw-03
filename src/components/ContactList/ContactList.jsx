import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li className={css.sectionContact} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button
              className={css.contactButton}
              type="submit"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
