import { useEffect, useRef, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (
        t !== menuRef.current &&
        !menuRef.current.contains(t) &&
        !t.classList.contains("nav-toggler")
      )
        setToggle(false);
    });
  }, []);

  return (
    <nav className={`navbar flex w-full items-center justify-center py-6  `}>
      <img src={logo} alt="hoobanl logo" className="h-[32px] w-[123px]" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((navItem, index) => (
          <li
            key={navItem.id}
            className={`cursor-pointer font-poppins text-[16px]  font-normal text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            {" "}
            <a href={"#" + navItem.id}> {navItem.title} </a>{" "}
          </li>
        ))}
      </ul>
      <div className=" flex flex-1  items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="navbar menu  toggler"
          className="nav-toggler h-[28px] w-[28px] cursor-pointer object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          ref={menuRef}
          className={`sidebar bg-black-gradient absolute right-0 top-20 mx-4 rounded-xl p-6 ${
            toggle ? "flex" : "hidden"
          }  `}
        >
          <ul className=" flex flex-1 list-none flex-col items-center justify-end">
            {navLinks.map((navItem, index) => (
              <li
                key={navItem.id}
                className={`cursor-pointer font-poppins text-[16px]  font-normal text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                } `}
              >
                {" "}
                <a href={"#" + navItem.id}> {navItem.title} </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
