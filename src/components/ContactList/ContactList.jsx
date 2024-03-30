import { Contact } from '../index.jsx';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact onDelete={onDelete} contactData={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
