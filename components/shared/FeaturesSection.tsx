import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import styles from "@/app/styles";
import {logo} from "../../public/assets";

export function FeaturesSection() {
    const data = [
        {
            title: "Wide Range of Courses",
            content: (
                <div className="pt-5">
                    <h2 className={`${styles.heading4}`}>Explore Courses Across Diverse Fields</h2>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        From cutting-edge technology and business management to creative arts and humanities, we offer
                        a variety of courses to help you discover your passion and enhance your skills.
                        Whether you&apos;re a beginner or looking to deepen your expertise, our course catalog has
                        something for everyone.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={logo}
                            alt="startup template"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={logo}
                            alt="startup template"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={logo}
                            alt="startup template"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={logo}
                            alt="startup template"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Expert Instructors",
            content: (
                <div>
                    <h2 className={`${styles.heading4}`}>Learn from Industry Leaders</h2>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Our courses are designed and taught by experienced professionals and educators who are
                        leaders in their fields. Get hands-on insights and practical knowledge that will equip
                        you with real-world skills and prepare you for success in your chosen career path.
                    </p>

                </div>
            ),
        },
        {
            title: "Flexible Learning",
            content: (
                <div>
                    <h2 className={`${styles.heading4}`}>Learn at Your Own Pace</h2>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        We know that life is busy, so we provide flexible learning options. Study
                        anytime, anywhere with our self-paced courses that fit your schedule.
                        Whether you&apos;re balancing work, school, or other commitments, you&apos;ll
                        have the freedom to learn at your convenience.
                    </p>
                </div>
            ),
        },
        {
            title: "Certifications & Credentials",
            content: (
                <div>
                    <h2 className={`${styles.heading4}`}>Get Recognized for Your Achievements</h2>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Upon completing a course, you’ll receive a certificate of completion that adds value to your
                        resume. Our certificates are recognized by leading companies and institutions, helping you to
                        stand out in job applications and professional networking.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data}/>
        </div>
    );
}


export default FeaturesSection;