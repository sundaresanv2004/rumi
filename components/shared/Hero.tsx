import Image from "next/image"
import { Button } from "@/components/ui/button"
import {hero} from "@/public/assets/images"
import { ArrowRight, BookOpen, Brain, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="w-full py-28 mt-5 md:py-32 lg:py-28 xl:py-36 from-white to-gray-100 h-screen">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-7">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Shape Your Future with AI-Powered Learning Today!
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Boost your academic performance with personalized AI tutoring. Master any subject faster and more effectively.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button className="inline-flex items-center justify-center">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Link href={'#featuresSection'}>
                                <Button variant="outline">Learn More</Button>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4 text-sm font-medium">
                            <div className="flex items-center space-x-2">
                                <Sparkles className="h-4 w-4 text-blue-500" />
                                <span>AI-Powered</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BookOpen className="h-4 w-4 text-green-500" />
                                <span>Personalized Learning</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Brain className="h-4 w-4 text-purple-500" />
                                <span>Adaptive Curriculum</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className={`flex-1 flex md:my-0 my-10 relative`}>
                            <Image src={hero} alt="" className="w-auto h-[80%] relative z-[5]"/>
                            {/*<div className="absolute z-[0] w-[100%] h-[15%] top-10 yellow__gradient"/> */}
                            {/* <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 red__gradient"/>*/}
                            <div className="absolute z-[0] w-[80%] h-[80%] -left-10 top-10 green__gradient"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}