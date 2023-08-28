import styles from "../style";
import { footerLinks, socialMedia } from "../constant";
import { logo } from "../../public/assets";
export default function Footer() {
  return (
    <footer className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
      <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
        <div className="flex-1 flex-col justify-start">
          <img src={logo} alt="hoobank" className="w-[266px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            similique.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[1.5]  flex-wrap justify-between md:mt-0">
          {footerLinks.map((el) => (
            <div
              key={el.key}
              className="my-4 flex min-w-[150px] flex-col ss:my-0"
            >
              <h4 className="font-poppins  text-[18px] font-medium leading-7 text-white">
                {" "}
                {el.title}{" "}
              </h4>
              <ul className="mt-4 list-none">
                {" "}
                {el.links.map((obj, index) => (
                  <li
                    key={obj.name}
                    className={`cursor-pointer font-mono text-base font-normal leading-6 text-dimWhite hover:text-secondary 
                    ${index !== el.links.length - 1 ? "mb-4" : "mb-0"}
                    `}
                  >
                    {" "}
                    {obj.name}
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-between border-t border-t-[#3f3r45] pt-6 md:flex-row">
        <p className="text-center font-poppins text-[18px] font-normal leading-7 text-white">
          {new Date().getFullYear()} Hoobank .all rights reserved
        </p>
        <div className="mt-6 flex  md:mt-0 ">
          {socialMedia.map((link, i) => (
            <img
              key={link.id}
              src={link.icon}
              alt={link.id}
              className={` ${
                i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } hover: cursor-pointer transition-all hover:rotate-45 hover:scale-[1.15]`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
