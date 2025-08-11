import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import ContactInput from '../shared/ContactInput';
import Button from '../shared/Button';
import { SendHorizontal } from 'lucide-react';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await emailjs.send(
          'service_auvflks',       // service ID
          'template_uriwtam',      // template ID
          values,
          'hVg3jY0U47T7-Z0a6'      // public key
        );
        console.log("Toast success هنا");
        toast.success('Message sent successfully!',{
          position:"bottom-right"
        });
        resetForm();
      } catch (error) {
        toast.error('Something went wrong. Please try again.',{
          position:"bottom-right"
        });
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="lg:w-2/3 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <ContactInput
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div className="w-full">
            <ContactInput
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <ContactInput
              type="text"
              name="subject"
              placeholder="Your Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
            )}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border-gray-300 border-[0.5px] rounded-3xl
            focus:border-mainColor focus:outline-none focus-visible:border-mainColor focus-visible:outline-none"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>
        <div>
          <Button
          title={loading ? 'Sending...' : 'Send Message'}
          icon={SendHorizontal}
          type="submit"
          disabled={loading}
        />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
