import { ContactForm, ContactList, SearchBox } from './components/index.jsx';
import { useState, useEffect } from 'react';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contact, setContact] = useState(() => {
    const savedObject = window.localStorage.getItem('contacts');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return contactsData;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

  const filteredValues = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  function addContact(contactObj) {
    setContact(prevValue => {
      return [...prevValue, contactObj];
    });
  }

  function addFilter(currentFilter) {
    setFilter(currentFilter);
  }

  function deleteContact(contactId) {
    setContact(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} addFilter={addFilter} />
      <ContactList contacts={filteredValues} onDelete={deleteContact} />
    </div>
  );
};

export default App;
