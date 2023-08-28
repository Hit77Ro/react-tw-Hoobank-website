import { quotes } from "../../public/assets";
export default function FeedbackCard({ name, content, img, title }) {
  return (
    <article
      className="feedback-card mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px]  px-10 py-12
     sm:mr-5 md:mr-10"
    >
      <img
        src={quotes}
        alt="quotes"
        className="h-[27px] w-[42px] object-contain"
      />
      <p className="my-10 font-poppins text-[18px] font-normal leading-[32px] text-white">
        {" "}
        {content}{" "}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins font-semibold leading-8 text-white ">
            {" "}
            {name}{" "}
          </h4>
          <p className="font-poppins text-base font-normal leading-6 text-white">
            {title}
          </p>
        </div>
      </div>
    </article>
  );
}
