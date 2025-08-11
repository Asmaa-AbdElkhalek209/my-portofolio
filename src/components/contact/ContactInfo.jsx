import React from 'react';
import { Phone, MailOpen } from "lucide-react";
import SocialIcons from './SocialIcons';
import ContactItem from './ContactItem';

function ContactInfo() {
  return (
    <div className="lg:w-1/3 space-y-6">
      <h2 className="text-MediumGray font-bold text-3xl font-open uppercase">
        Don't be shy!
      </h2>
      <p
        className="text-sm font-open text-left opacity-75 p-2"
        style={{ lineHeight: 2 }}
      >
        I'm always excited to collaborate on fresh ideas, cool projects, or
        anything that brings creativity to life. Feel free to reach out anytime!
      </p>

      <ContactItem
        icon={MailOpen}
        title="MAIL ME"
        link="mailto:asmaa0abdelkhalek@gmail.com"
        linkText="asmaa0abdelkhalek@gmail.com"
      />

      <ContactItem
        icon={Phone}
        title="CALL ME"
        link="tel:+201095276187"
        linkText="+20 109 527 6187"
      />

      <SocialIcons />
    </div>
  );
}

export default ContactInfo;
