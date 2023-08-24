import styles from "../style";
import { clients } from "../constant/index";

export default function Clients() {
  return (
    <section>
      <div className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} w-full flex-wrap `}>
          {clients.map((client, index) => {
            return (
              <div
                key={index}
                className={`${styles.flexCenter} flex-1 sm:min-w-[192px]`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-[100px] object-contain sm:w-[192px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
