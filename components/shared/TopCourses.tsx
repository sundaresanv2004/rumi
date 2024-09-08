'use client'

import { ArrowRight, Pencil, Code, Megaphone, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const courseCategories = [
    { title: 'UI/UX Design', icon: Pencil, color: 'bg-pink-400 hover:bg-pink-500' },
    { title: 'Web Development', icon: Code, color: 'bg-purple-400 hover:bg-purple-500' },
    { title: 'Digital Marketing', icon: Megaphone, color: 'bg-sky-400 hover:bg-sky-500' },
    { title: 'Practical Learning', icon: GraduationCap, color: 'bg-orange-400 hover:bg-orange-500' },
]

export default function CareerCoursesClient() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Browse Top Essential Career Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        className={`${category.color} rounded-3xl p-6 text-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <category.icon className="w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <div className="mt-4 w-12 h-0.5 bg-white opacity-50" />
                    </motion.div>
                ))}
            </div>
            <div className="mt-8 flex justify-end">
                <motion.button
                    className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="sr-only">Browse All</span>
                    <ArrowRight className="w-6 h-6" />
                </motion.button>
            </div>
        </div>
    )
}