import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum number of characters 2')
    .max(250, 'Maximum 250 characters')
    .required('This field is required.'),
  subject: Yup.string().max(250, 'Maximum 250 characters'),
  message: Yup.string()
    .min(2, 'Minimum number of characters 2')
    .max(250, 'Maximum 250 characters')
    .required('This field is required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required.'),
});

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', subject: '' }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {({ errors, touched }) => (
      <Form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
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
            {errors.name && touched.name ? (
              <div className="text-danger">{errors.name}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="pb-2">
              Your Email
            </label>
            <Field
              name="email"
              type="email"
              className={
                errors.name && touched.name
                  ? 'is-invalid form-control'
                  : 'form-control'
              }
              id="email"
            />
            {errors.email && touched.email ? (
              <div className="text-danger">{errors.email}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="subject" className="pb-2">
              Subject
            </label>
            <Field
              name="subject"
              type="text"
              className={
                errors.name && touched.name
                  ? 'is-invalid form-control'
                  : 'form-control'
              }
              id="subject"
            />
            {errors.subject && touched.subject ? (
              <div className="text-danger">{errors.subject}</div>
            ) : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="message" className="pb-2">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              type="text"
              className={
                errors.name && touched.name
                  ? 'is-invalid form-control'
                  : 'form-control'
              }
              id="message"
            />
            {errors.message && touched.message ? (
              <div className="text-danger">{errors.message}</div>
            ) : null}
          </div>
          <div className="col-md-12 text-center">
            <button type="submit">Send</button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);
export default ContactForm;
