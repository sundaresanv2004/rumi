import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'

export function Assignments() {
    const assignments = [
        { id: 1, name: 'React Hooks Essay', dueDate: '2023-06-15', timeLeft: '2 days' },
        { id: 2, name: 'JavaScript Quiz', dueDate: '2023-06-18', timeLeft: '5 days' },
        { id: 3, name: 'CSS Layout Project', dueDate: '2023-06-20', timeLeft: '1 week' },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {assignments.map((assignment) => (
                        <li key={assignment.id} className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">{assignment.name}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>{assignment.dueDate}</span>
                                    <Clock className="h-4 w-4 ml-2 mr-1" />
                                    <span>{assignment.timeLeft} left</span>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">
                                Start
                            </Button>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}