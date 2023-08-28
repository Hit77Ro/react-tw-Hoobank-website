import Button from "./Button";
import styles, { layout } from "../style";
import Br from "./Br";
import { card } from "../../public/assets";
const CardDeal = () => (
  <section className={`${layout.section}`} id="product">
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        find a better deal <Br /> in few easy steps{" "}
      </h2>
      <p className={`${styles.paragraph} `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis
        accusantium doloremque necessitatibus dicta sequi?
      </p>
      <Button />
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="  h-[100%] w-[90%] md:w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
