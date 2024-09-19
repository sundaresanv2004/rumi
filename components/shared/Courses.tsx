'use client'

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Server, Rocket, Brain, Lightbulb, Database } from "lucide-react"

interface Course {
    title: string
    description: string
    icon: React.ElementType
    students: number
    weeks: number
}

const courses: Course[] = [
    {
        title: "Front-End Development",
        description: "Master HTML, CSS, and JavaScript to create stunning (user) interfaces",
        icon: Code,
        students: 1500,
        weeks: 10
    },
    {
        title: "Back-End Development",
        description: "Learn server-side programming and database management",
        icon: Server,
        students: 1200,
        weeks: 12
    },
    {
        title: "Full-Stack Development",
        description: "Become a versatile developer proficient in both front-end and back-end technologies",
        icon: Rocket,
        students: 1800,
        weeks: 16
    },
    {
        title: "Machine Learning",
        description: "Dive into the world of AI and learn to create intelligent systems",
        icon: Brain,
        students: 1000,
        weeks: 14
    },
    {
        title: "Artificial Intelligence",
        description: "Explore the cutting-edge field of AI and its real-world applications",
        icon: Lightbulb,
        students: 1300,
        weeks: 15
    },
    {
        title: "Data Science",
        description: "Learn to analyze and interpret complex data to drive decision-making",
        icon: Database,
        students: 1100,
        weeks: 13
    }
]

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full">
                <CardHeader>
                    <course.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500">
                        {course.students.toLocaleString()} students enrolled
                    </p>
                    <p className="text-sm text-gray-500">{course.weeks} weeks</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Enroll Now</Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default function PopularCoursesSection() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    return (
        <section className="w-full py-12 md:py-24 lg:py-28 bg-background flex justify-center">
            <div className="container px-4 md:px-6">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Courses</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Explore our most sought-after courses and start your learning journey today
                    </p>
                </motion.div>
                <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <CourseCard key={course.title} course={course} index={index} />
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mt-12"
                >
                    <Button size="lg" className="px-8">
                        Explore More Courses
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}