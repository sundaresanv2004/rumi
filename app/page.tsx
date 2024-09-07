import styles from "@/app/styles";
import {NavBar, Hero, FeaturesSection} from "@/components/shared";


export default function Home() {
  return (
      <div className="w-full overflow-hidden">
          <NavBar/>

          <div id="home" className={`bg-dark_blue mt-5 max-md:mt-20 ${styles.flexStart} h-[97vh]`}>
              <div className={`${styles.boxWidth} pt-10`}>
                  <Hero/>
              </div>
          </div>

          <div className={`bg-dark_blue mt-5 max-md:mt-20 ${styles.flexStart} h-[97vh]`}>
              <div className={`${styles.boxWidth} pt-5`}>
                  <FeaturesSection/>
              </div>
          </div>

      </div>
  );
}
