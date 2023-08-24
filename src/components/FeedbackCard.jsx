import { quotes } from "../assets";
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
        <img src={img} alt={name} className="rounded-full h-[48px] w-[48px]" />
        <div className="flex flex-col ml-4">
          <h4 className="text-white font-poppins font-semibold leading-8 "> {name} </h4>
          <p className="font-poppins text-white font-normal text-base leading-6">
           {title} 
          </p>
           
        </div>
      </div>
    </article>
  );
}
