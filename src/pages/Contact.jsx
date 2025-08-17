import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Titlesection from '../components/shared/TitleSection';
import Loader from '../components/shared/Loader';

const ContactInfo = lazy(() => import('../components/contact/ContactInfo'));
const ContactForm = lazy(() => import('../components/contact/ContactForm'));

function Contact() {
  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>Contact Me | Asmaa AbdElkhalek</title>
        <meta
          name="description"
          content="Get in touch with Asmaa AbdElkhalek for collaborations, projects, or inquiries. Contact form and personal contact information."
        />
        <meta
          name="keywords"
          content="Asmaa AbdElkhalek, contact, email, phone, frontend developer"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <section id="contact" className="min-h-screen py-16 px-8 bg-white">
          <Titlesection title="GET IN" higeLighted="TOUCH" bakgroundText="CONTACT" />
          <div className="flex flex-col lg:flex-row gap-16 mt-10 px-5 py-5 lg:px-24 xl:px-32">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default Contact;
