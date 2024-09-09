'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Michael, Emily, Sarah} from '@/public/assets/images'

const testimonials = [
    {
        name: "Michael Chen",
        role: "Software Engineer",
        image: Michael,
        quote: "The software development courses on GreenLearn are cutting-edge. I've learned about the latest technologies and best practices, which has significantly boosted my career prospects."
    },
    {
        name: "Emily Johnson",
        role: "Data Science Student",
        image: Emily,
        quote: "GreenLearn has transformed my approach to data science. The courses are comprehensive, and the instructors are top-notch. I've gained practical skills that I use daily in my work."
    },
    {
        name: "Sarah Williams",
        role: "Digital Marketing Specialist",
        image: Sarah,
        quote: "GreenLearn's digital marketing courses are a game-changer. The content is always up-to-date, and the hands-on projects have helped me deliver real results for my clients."
    }
]

export default function Testimonial() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }


    return (
        <div className="w-full bg-gradient-to-br from-green-400 to-green-600 px-8 py-20 shadow-xl">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-white mb-8 text-center">What Our Students Are Saying</h2>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-full overflow-hidden w-64 h-64 flex-shrink-0"
                    >
                        <Image
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                    <div className="flex-grow">
                        <motion.blockquote
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg text-white mb-4"
                        >
                            &quot;{testimonials[currentTestimonial].quote}&quot;
                        </motion.blockquote>
                        <motion.p
                            key={`${currentTestimonial}-name`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl font-semibold text-green-100"
                        >
                            {testimonials[currentTestimonial].name}
                        </motion.p>
                        <motion.p
                            key={`${currentTestimonial}-role`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-green-200"
                        >
                            {testimonials[currentTestimonial].role}
                        </motion.p>
                    </div>
                </div>
                <div className="flex justify-center mt-8 space-x-4">
                    <Button onClick={prevTestimonial} variant="outline" size="icon" className="bg-green-500 text-white hover:bg-green-600">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button onClick={nextTestimonial} variant="outline" size="icon" className="bg-green-500 text-white hover:bg-green-600">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}