'use client'

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Clock, Award, Globe } from "lucide-react"

interface TrendingDetail {
    icon: React.ElementType
    text: string
}

const trendingDetails: TrendingDetail[] = [
    { icon: TrendingUp, text: "90% course completion rate" },
    { icon: Users, text: "10,000+ active learners" },
    { icon: Clock, text: "Flexible learning schedules" },
    { icon: Award, text: "Industry-recognized certificates" },
    { icon: Globe, text: "Learn from anywhere in the world" },
]

const TrendingDetailItem: React.FC<{ detail: TrendingDetail; index: number }> = ({ detail, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.3, repeat: -1 }}
            className="flex items-center space-x-2"
        >
            <detail.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{detail.text}</span>
        </motion.div>
    )
}

export default function TrendingDetailsChord() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    return (
        <section className="w-full py-12 bg-accent flex justify-center">
            <div className="container px-4 md:px-6">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                        Trending on Our Platform
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                        Discover why thousands of learners are choosing our courses
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                    {trendingDetails.map((detail, index) => (
                        <TrendingDetailItem key={detail.text} detail={detail} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}