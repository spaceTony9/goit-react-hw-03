import { Contact } from '../index.jsx';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact onDelete={onDelete} contactData={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
