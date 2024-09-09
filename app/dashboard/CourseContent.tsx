import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, FileText, Download } from 'lucide-react'

export function CourseContent() {
    const courses = [
        { id: 1, name: 'Introduction to React', type: 'video', icon: PlayCircle },
        { id: 2, name: 'JavaScript Fundamentals', type: 'document', icon: FileText },
        { id: 3, name: 'CSS Layouts', type: 'video', icon: PlayCircle },
    ]

    return (
        <div className="">
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {courses.map((course) => (
                            <li key={course.id} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <course.icon className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>{course.name}</span>
                                </div>
                                <Button variant="outline" size="sm">
                                    {course.type === 'video' ? 'Watch' : 'Read'}
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                        <Download className="h-4 w-4 mr-2" /> Download All Materials
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}