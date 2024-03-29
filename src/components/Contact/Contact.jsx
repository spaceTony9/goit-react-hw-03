const Contact = ({ contactData: { name, number, id }, onDelete }) => {
  function deleteContact(e) {
    console.log(e.currentTarget);
  }

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
