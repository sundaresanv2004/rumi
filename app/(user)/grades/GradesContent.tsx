'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Book, CheckCircle, AlertCircle } from 'lucide-react'

const gradeData = [
    { course: "Artificial Intelligence", grade: 88, improvement: 5 },
    { course: "Machine Learning", grade: 92, improvement: 7 },
    { course: "Computer Vision", grade: 85, improvement: 3 },
    { course: "Data Structures", grade: 90, improvement: 6 },
    { course: "Python Programming", grade: 95, improvement: 4 },
]

const improvementData = [
    { month: "Jan", grade: 78 },
    { month: "Feb", grade: 80 },
    { month: "Mar", grade: 82 },
    { month: "Apr", grade: 85 },
    { month: "May", grade: 88 },
    { month: "Jun", grade: 90 },
]

const quizData = [
    { name: "Completed", value: 15 },
    { name: "Pending", value: 5 },
]

const assignmentData = [
    { name: "Submitted", value: 22 },
    { name: "Pending", value: 8 },
]

const courseImprovementData = [
    { course: "AI", improvement: 15 },
    { course: "ML", improvement: 20 },
    { course: "CV", improvement: 10 },
    { course: "DS", improvement: 18 },
    { course: "Python", improvement: 25 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function GradesContent() {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Academic Progress</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Overall GPA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">3.75</div>
                        <p className="text-sm text-muted-foreground">Out of 4.0</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Completed Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">12</div>
                        <p className="text-sm text-muted-foreground">Out of 20 total courses</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Overall Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Progress value={60} className="w-full" />
                        <p className="text-sm text-muted-foreground mt-2">60% of program completed</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="grades" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="grades">Grades</TabsTrigger>
                    <TabsTrigger value="improvement">Improvement</TabsTrigger>
                    <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                    <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>

                <TabsContent value="grades">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Grades</CardTitle>
                            <CardDescription>Your current grades for each course</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {gradeData.map((course, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <Book className="h-6 w-6 text-primary" />
                                            <div>
                                                <p className="font-medium">{course.course}</p>
                                                <p className="text-sm text-muted-foreground">Grade: {course.grade}%</p>
                                            </div>
                                        </div>
                                        <Badge variant={course.improvement > 5 ? "success" : "default"}>
                                            +{course.improvement}% improvement
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="improvement">
                    <Card>
                        <CardHeader>
                            <CardTitle>Grade Improvement Over Time</CardTitle>
                            <CardDescription>Your grade progression over the past 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={improvementData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="grade" stroke="#8884d8" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="quizzes">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quiz Performance</CardTitle>
                            <CardDescription>Overview of completed and pending quizzes</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <div className="w-1/2 h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={quizData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {quizData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>15 Quizzes Completed</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                                    <span>5 Quizzes Pending</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="assignments">
                    <Card>
                        <CardHeader>
                            <CardTitle>Assignment Status</CardTitle>
                            <CardDescription>Overview of submitted and pending assignments</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <div className="w-1/2 h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={assignmentData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {assignmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>22 Assignments Submitted</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                                    <span>8 Assignments Pending</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Course Improvement</CardTitle>
                    <CardDescription>Your improvement percentage in each course</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={courseImprovementData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="course" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="improvement" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}