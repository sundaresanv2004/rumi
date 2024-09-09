import {
    NavBar,
    Hero,
    FeaturesSection,
    Footer,
    Courses,
    TrendCard,
    CourseStats,
    IconCloud,
    CareerCoursesClient,
    Testimonial,
} from "@/components/shared";


export default function Home() {
  return (
      <div className="w-full overflow-hidden">
          <NavBar />
          <div id={"Home"}>
              <Hero />
          </div>
          <div className="flex items-center justify-center px-8 md:px-16 lg:px-36">
              <CourseStats />
          </div>
          <CareerCoursesClient />

          <div id={"featuresSection"}>
              <FeaturesSection />
          </div>
          <TrendCard />
          <Courses />
          <div className="flex items-center justify-center mb-10">
              <IconCloud />
          </div>
          <Testimonial />
          <Footer />
      </div>
  );
}
