import css from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contactData: { name, number, id }, onDelete }) => {
  function deleteContact(e) {
    console.log(e.currentTarget);
  }

  return (
    <div className={css.contactWrapper}>
      <div>
        <p>
          <FontAwesomeIcon className={css.icon} icon={faUser} />
          {name}
        </p>
        <p>
          <FontAwesomeIcon className={css.icon} icon={faPhone} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
