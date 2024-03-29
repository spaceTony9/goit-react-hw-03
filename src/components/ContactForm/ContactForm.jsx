import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('Required'),
  contactPhone: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    addContact({
      id: nanoid(),
      name: values.contactName,
      number: values.contactPhone,
    });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        contactName: '',
        contactPhone: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="contactName" id={nameFieldId}></Field>
          <ErrorMessage name="contactName" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="contactPhone" id={numberFieldId}></Field>
          <ErrorMessage name="contactPhone" as="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
