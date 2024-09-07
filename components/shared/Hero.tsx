import styles from "@/app/styles";
import Image from "next/image";
import {hero} from "../../public/assets"
import {Button} from "@/components/ui/button";

const Hero = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

            <div className="flex flex-row justify-between items-center w-full ">
                <h1 className={`${styles.heading1} leading-8`}>Shape Your Future with the Right Course Today!</h1>
            </div>

            <p className={`${styles.paragraph} max-w-[650px] mt-5 pl-0 text-xl text-muted-foreground`}>
                Explore a variety of courses tailored to your passion. Start your journey with us, and unlock endless possibilities
            </p>

            <div className={'space-x-5 pt-9'}>
                <Button variant={'outline'}>Explore Courses</Button>
                <Button variant={'default'}>Get Started</Button>
            </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <Image src={hero} alt="" className="w-auto h-[80%] relative z-[5]"/>
            {/*<div className="absolute z-[0] w-[100%] h-[15%] top-10 yellow__gradient"/> */}
            {/* <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 red__gradient"/>*/}
            <div className="absolute z-[0] w-[90%] h-[80%] -left-10 top-10 green__gradient"/>
        </div>
    </section>
)

export default Hero;