import styles from "@/app/styles";
import {NavBar, Hero, FeaturesSection, Footer, IconCloudDemo} from "@/components/shared";


export default function Home() {
  return (
      <div className="w-full overflow-hidden">
          <NavBar />

          <div id="home" className={`mt-5 max-md:mt-20 ${styles.flexStart} h-[97vh]`}>
              <div className={`${styles.boxWidth} pt-10`}>
                  <Hero />
              </div>
          </div>

          <div className={`${styles.paddingX} pt-10`}>
              <FeaturesSection />
          </div>

          <div className={`${styles.paddingX} pt-10 flex w-full justify-center`}>
              <IconCloudDemo />
          </div>

          <div className={`mt-5 max-md:mt-20 ${styles.flexStart} bg-dark_blue`}>
              <div className={`${styles.boxWidth} pt-10`}>
                  <Footer />
              </div>
          </div>
      </div>
  );
}
