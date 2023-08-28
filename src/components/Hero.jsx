import styles from "../style";
import { discount, robot } from "../../public/assets";
import Getstarted from "./Getstarted";
export default function Hero() {
  return (
    <section id="home" className={`flex  max-md:flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins  text-[52px] font-semibold  capitalize leading-[72px] text-white ss:text-[72px] ss:leading-[100px]">
            {" "}
            the next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">generation</span>
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <Getstarted />
          </div>
        </div>
        <h1 className=" w-full  font-poppins text-[52px] font-semibold  capitalize leading-[68px] text-white ss:text-[72px] ss:leading-[100px]">
          payment method
        </h1>
        <p className={`${styles.paragraph}`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
        <img src={robot} alt="" className="z-5 relative h-[100%] w-[100%] " />
        {/* gradient start */}
        <div className="white_gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter} `}>
        <Getstarted />
      </div>
    </section>
  );
}
