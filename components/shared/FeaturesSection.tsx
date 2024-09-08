import { Book, Users, Clock, Award, Globe, Zap } from "lucide-react"

export default function FeatureSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-28 dark:bg-gray-900 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover why our online course platform is the perfect choice for your learning journey
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Book className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Comprehensive Curriculum</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Expertly crafted courses covering a wide range of subjects and skill levels
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Interactive Community</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Engage with fellow learners and instructors in our vibrant online community
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Flexible Learning</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Learn at your own pace with 24/7 access to course materials and lectures
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Award className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Certified Instructors</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Learn from industry experts and experienced professionals in their fields
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Globe className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Global Accessibility</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Access our courses from anywhere in the world, breaking geographical barriers
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Zap className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Cutting-edge Technology</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Experience learning with state-of-the-art tools and interactive content
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}