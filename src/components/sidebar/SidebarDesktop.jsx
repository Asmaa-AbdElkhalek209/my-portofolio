/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom';

export default function SidebarDesktop({ navLinks }) {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-y-6 p-3 h-screen justify-center items-center ">
      {navLinks.map(({ to, label, icon: Icon }) => (
        <li key={label} className="group mb-12">
          <Link
            to={to}
            className="group-hover:bg-mainColor rounded-full overflow-hidden
              text-center group-hover:pl-2 flex justify-center items-center fixed right-4"
          >
            <span className="sr-only">{label}</span>
            <span
              className="text-white uppercase text-sm font-[500] group-hover:p-1 max-w-0 overflow-hidden
                group-hover:max-w-[200px] transition-all duration-300 whitespace-nowrap"
            >
              {label}
            </span>
            <div
              className={`text-darkGray bg-lightGray h-12 w-12 rounded-full flex justify-center items-center
                group-hover:text-white group-hover:bg-mainColor
                ${location.pathname === to ? 'bg-mainColor text-white' : ''}`}
            >
              <Icon size={24} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
