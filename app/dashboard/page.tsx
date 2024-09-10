import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { CourseContent } from './CourseContent'
import { Assignments } from './Assignments'
import { Scores } from './Scores'
import Review from './Review'
import { ProgressOverview } from './ProgressOverview'
import { Charts } from './ChartsDashboard'
import ComponentRight from './RightSide';
import { GraduationCap} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex overflow-y-auto">
                    <main className="flex-1 overflow-x-hidden  bg-white">
                        <div className="container mx-auto px-6 py-8">
                            <Review/>
                            <Card className="py-2 my-8">
                                <CardHeader>
                                    <CardTitle>Students Performance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="rounded-md flex justify-between space-x-5" >
                                        <Scores/>
                                        <ProgressOverview/>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Schedule</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                <GraduationCap className="h-6 w-6 text-blue-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Computer Vision</h3>
                                                <p className="text-sm text-gray-500">In this course you will learn about computer</p>
                                            </div>
                                            <Button variant="ghost" className="ml-auto">
                                                View
                                            </Button>
                                        </div>
                                        <Progress value={33} className="h-2" />
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                                <GraduationCap className="h-6 w-6 text-purple-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Machine Learning</h3>
                                                <p className="text-sm text-gray-500">In this course you will learn about machine</p>
                                            </div>
                                            <Button variant="ghost" className="ml-auto">
                                                View
                                            </Button>
                                        </div>
                                        <Progress value={66} className="h-2" />
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">


                                <CourseContent/>
                                <Assignments/>
                                {/*<Feedback />*/}
                                {/*<Certifications />*/}
                            </div>
                            <Charts/>
                        </div>
                    </main>
                    <div className="flex overflow-y-auto">
                        <ComponentRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}