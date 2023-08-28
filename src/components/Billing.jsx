import { apple, bill, google } from "../../public/assets";
import styles, { layout } from "../style";
export default function Billing() {
  return (
    <section id="billing" className={`${layout.sectionReverse} relative`}>
      <div className="blue__gradient absolute -left-[50%] top-40 z-[0] h-[60%] w-[60%] rounded-full" />
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="relative z-[5] h-full w-[80%]  md:w-full"
        />
        {/* <div
          className={`white__gradient absolute -left-2/4 top-0 z-[3] h-[50%] w-[50%] rounded-full`}
        />
        <div
          className={`pink__gradient absolute -left-2/3 bottom-40 z-0 h-[50%] w-[50%] rounded-full`}
        /> */}
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          {" "}
          easily control your
          <br className="hidden sm:block" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
          <img
            src={apple}
            alt="apple store"
            className=" h-[42px] w-[127px] cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="apple store"
            className=" h-[42px] w-[127px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
}
