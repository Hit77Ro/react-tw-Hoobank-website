
import styles from "../style" 
import Button from "./Button" 

export default function Cta() {
  return (
    <section
      id=""
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className={`${styles.heading2}`}>let's try our service now</h2>
        <p className={`${styles.paragraph} mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          sequi dolore animi recusandae ducimus, iusto itaque veritatis!
          Distinctio, itaque corporis!
        </p>
      </div>
      <div className={`sm:mt0 ml-0 mt-10 sm:ml-10`}>
        {" "}
        <Button />{" "}
        
      </div>
    </section>
  );
}

