import {
  Navbar,
  Testimonials,
  Billing,
  Businsess,
  CardDeal,
  Cta,
  Footer,
  Hero,
  Stats,
  Clients,
} from "./components/index";
import styles from "./style";
const App = () => (
  <div className="w-full overflow-hidden bg-primary">
    {/* start navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth} relative`}>
        <Navbar />
      </div>
    </div>
    {/* end  navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <main className={`bg-primary${styles.paddingX} ${styles.flexStart}  `}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Businsess />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </main>
  </div>
);

export default App;
