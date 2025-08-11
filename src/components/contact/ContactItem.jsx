/* eslint-disable no-unused-vars */
import React from 'react';

const ContactItem = React.memo(({ icon: Icon, title, link, linkText }) => {
  return (
    <div className="flex gap-3">
      <div className="w-12 h-12 bg-mainColor rounded-full flex items-center justify-center">
        <Icon className="w-6 h-5 text-white" />
      </div>
      <div>
        <h4 className="uppercase text-MediumGray opacity-75">{title}</h4>
        <a
          href={link}
          className="font-open font-semibold text-MediumGray hover:underline text-[15px]"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
});

export default ContactItem;
