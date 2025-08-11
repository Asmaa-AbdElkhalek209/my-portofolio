import React, { lazy, Suspense } from 'react';
import Titlesection from '../components/shared/TitleSection';
import Loader from '../components/shared/Loader'; // افترض عندك مكون Loader جاهز

const ContactInfo = lazy(() => import('../components/contact/ContactInfo'));
const ContactForm = lazy(() => import('../components/contact/ContactForm'));

function Contact() {
  return (
    <Suspense fallback={<Loader />}>
    <section id="contact" className="min-h-screen py-16 px-8 bg-white">
      <Titlesection title="GET IN" higeLighted="TOUCH" bakgroundText="CONTACT" />
      <div className="flex flex-col lg:flex-row gap-16 mt-10 px-5 py-5 lg:px-24 xl:px-32">
          <ContactInfo />
          <ContactForm />
      </div>
    </section>
    </Suspense>

  );
}

export default Contact;
