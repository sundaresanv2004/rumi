'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code, Eye, Database, PenTool, FileCode2, Search, Star, Clock, Users } from 'lucide-react'
import { motion } from "framer-motion"

const courses = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    description: "Learn the fundamentals of AI, including search algorithms, knowledge representation, and machine learning basics.",
    instructor: "Dr. Alan Turing",
    duration: "12 weeks",
    level: "Intermediate",
    icon: Brain,
    category: "AI",
    rating: 4.8,
    students: 1500,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    description: "Explore core machine learning concepts, algorithms, and their practical applications in real-world scenarios.",
    instructor: "Prof. Andrew Ng",
    duration: "10 weeks",
    level: "Intermediate",
    icon: Brain,
    category: "AI",
    rating: 4.9,
    students: 2000,
  },
  {
    id: 3,
    title: "Computer Vision and Image Processing",
    description: "Dive into the world of computer vision, covering image processing techniques, object detection, and facial recognition.",
    instructor: "Dr. Fei-Fei Li",
    duration: "8 weeks",
    level: "Advanced",
    icon: Eye,
    category: "AI",
    rating: 4.7,
    students: 1200,
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    description: "Master essential data structures and algorithms crucial for efficient problem-solving and software development.",
    instructor: "Prof. Robert Sedgewick",
    duration: "14 weeks",
    level: "Intermediate",
    icon: Database,
    category: "Programming",
    rating: 4.6,
    students: 1800,
  },
  {
    id: 5,
    title: "Python for Data Science",
    description: "Learn Python programming with a focus on data analysis, visualization, and machine learning applications.",
    instructor: "Dr. Wesley Chun",
    duration: "10 weeks",
    level: "Beginner",
    icon: Code,
    category: "Programming",
    rating: 4.8,
    students: 2500,
  },
  {
    id: 6,
    title: "Java Programming and Object-Oriented Design",
    description: "Develop strong Java programming skills and learn object-oriented design principles for building robust applications.",
    instructor: "Prof. Joshua Bloch",
    duration: "12 weeks",
    level: "Intermediate",
    icon: FileCode2,
    category: "Programming",
    rating: 4.7,
    students: 1600,
  },
  {
    id: 7,
    title: "Deep Learning and Neural Networks",
    description: "Explore advanced topics in deep learning, including convolutional and recurrent neural networks, and their applications.",
    instructor: "Dr. Yoshua Bengio",
    duration: "10 weeks",
    level: "Advanced",
    icon: Brain,
    category: "AI",
    rating: 4.9,
    students: 1400,
  },
  {
    id: 8,
    title: "Natural Language Processing",
    description: "Discover techniques for processing and analyzing human language, including text classification, sentiment analysis, and language generation.",
    instructor: "Prof. Christopher Manning",
    duration: "8 weeks",
    level: "Advanced",
    icon: PenTool,
    category: "AI",
    rating: 4.8,
    students: 1300,
  },
]

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full overflow-hidden group">
        <CardHeader className="relative p-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative p-6 text-white z-10">
            <course.icon className="h-12 w-12 mb-4" />
            <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
            <CardDescription className="text-white/80">{course.instructor}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <p className="text-sm text-gray-600 mb-4">{course.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {course.students} students
            </div>
          </div>
          <div className="flex items-center text-sm text-yellow-500">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {course.rating.toFixed(1)}
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50">
          <div className="flex items-center justify-between w-full">
            <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}>
              {course.level}
            </Badge>
            <Button variant="default">Enroll Now</Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export function CourseList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLevel === "all" || course.level.toLowerCase() === selectedLevel.toLowerCase())
  )

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="ai">AI & Machine Learning</TabsTrigger>
          <TabsTrigger value="programming">Programming</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ai">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => course.category === "AI").map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="programming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => course.category === "Programming").map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}