'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const questions = [
    {
        question: "What field are you most interested in?",
        options: ["Artificial Intelligence", "Data Science", "Machine Learning", "Web Development"]
    },
    {
        question: "What is your current level of expertise?",
        options: ["Beginner", "Intermediate", "Advanced"]
    },
    {
        question: "What is your primary goal for taking an online course?",
        options: ["Career Change", "Skill Enhancement", "Personal Interest", "Academic Requirement"]
    },
    {
        question: "How much time can you dedicate to learning per week?",
        options: ["2-4 Weeks", "4-8 Weeks", "8-12 Weeks", "More than 12 Weeks"]
    },
    {
        question: "What is your preferred learning style?",
        options: ["Video Lectures", "Interactive Coding", "Reading Materials", "Project-Based Learning"]
    },
    {
        question: "Do you have any prior programming experience?",
        options: ["No Experience", "Some Experience", "Experienced Programmer"]
    },
    {
        question: "What is your highest level of education?",
        options: ["High School", "Bachelor's Degree", "Master's Degree", "Ph.D."]
    }
]

export default function CourseRecommender() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState(Array(questions.length).fill(''))
    const [showResults, setShowResults] = useState(false)

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers]
        newAnswers[currentQuestion] = answer
        setAnswers(newAnswers)
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setShowResults(true)
            }
        }, 300)
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    if (showResults) {
        return (
            <div className={"h-screen flex justify-center items-center"}>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="max-w-7xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg w-2/3"
                >
                    <h2 className="text-3xl font-bold mb-6 text-primary">Thank you for completing the
                        questionnaire!</h2>
                    <p className="text-lg mb-4">Based on your answers, we recommend courses in the following areas:</p>
                    <ul className="space-y-2 mb-6">
                        {answers.map((answer, index) => (
                            <motion.li
                                key={index}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: index * 0.1}}
                                className="flex items-center space-x-2"
                            >
                                <CheckCircle2 className="text-green-500"/>
                                <span>{answer}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <p className="text-lg font-medium text-primary">We&#39;ll use this information to curate a
                        personalized learning path for you.</p>
                    <div className="py-3">
                        <h1 className={"text-black text-lg front-semibold"}>RoadMap</h1>


                        <iframe src="https://research.google.com/pubs/archive/44678.pdf"
                                width="800" height="600">
                            
                        </iframe>

                    </div>
                    <Button className="mt-6" onClick={() => window.location.reload()}>Start Over</Button>
                    <Link href={"/dashboard"}>
                        <Button className="mt-6 ml-6">Get Started</Button>
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div className={"flex flex-col items-center justify-center h-screen"}>
            <div className="max-w-7xl w-1/2 mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
                <Progress value={progress} className="mb-6"/>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -50}}
                        transition={{duration: 0.3}}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary">{questions[currentQuestion].question}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                            {questions[currentQuestion].options.map((option, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: index * 0.1}}
                                >
                                    <Card
                                        className={`cursor-pointer transition-all hover:shadow-md ${
                                            answers[currentQuestion] === option ? 'ring-2 ring-primary' : ''
                                        }`}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        <CardContent className="flex items-center justify-center h-full p-6">
                                            <p className="text-center font-medium text-lg">{option}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="mt-8 flex justify-between items-center">
                    <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                        Previous
                    </Button>
                    <div className="flex items-center space-x-2">
                        {Array.from({length: questions.length}).map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    index === currentQuestion ? 'bg-primary' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                    </p>
                </div>
            </div>
        </div>
    )
}