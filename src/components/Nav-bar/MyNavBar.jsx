import { useState } from "react";
import MyLink from "../link/MyLink";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const MyNavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <HiX /> : <HiMenuAlt1 />}
      </div>

      <ul
        className={`md:flex gap-4 
        
        ${open ? "top-4" : "-top-60"}
        
        items-center absolute md:static duration-1000  bg-slate-500  px-6  `}
      >
        {routes.map((route) => (
          <MyLink key={route.id} route={route}></MyLink>
        ))}
      </ul>
      <div className=" bg-yellow-300 ">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nemo ab atque qui aliquam eum perspiciatis, officia saepe officiis
          aut, dolore expedita fugit quod non quaerat provident rem eos. Ad?
        </h1>
      </div>
    </>
  );
};

export default MyNavBar;
