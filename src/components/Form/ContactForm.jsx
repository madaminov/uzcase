import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ModalSaccess from '../Modal/ModalSaccess';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum number of characters 2')
    .max(250, 'Maximum 250 characters')
    .required('This field is required.'),
  message: Yup.string()
    .min(2, 'Minimum number of characters 2')
    .max(250, 'Maximum 250 characters')
    .required('This field is required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required.'),
});

const ContactForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await axios.post(
              'https://uzcase.tech/send-email',
              values,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log('Success:', response.data);
            resetForm();
            setShowSuccessModal(true); // Показать модалку
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <label htmlFor="name" className="pb-2">
                  Your Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className={
                    errors.name && touched.name
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  id="name"
                />
                {errors.name && touched.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="pb-2">
                  Your Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className={
                    errors.email && touched.email
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  id="email"
                />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="message" className="pb-2">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  className={
                    errors.message && touched.message
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  id="message"
                />
                {errors.message && touched.message && (
                  <div className="text-danger">{errors.message}</div>
                )}
              </div>
              <div className="col-md-12 text-center">
                <button type="submit">Send</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {showSuccessModal && (
        <ModalSaccess show={true} onClose={() => setShowSuccessModal(false)} />
      )}
    </>
  );
};

export default ContactForm;
