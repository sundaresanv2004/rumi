import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function ProgressOverview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Course Completion</span>
                            <span className="text-sm font-medium text-gray-700">75%</span>
                        </div>
                        <Progress value={75} className="w-full" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Assignment Submission</span>
                            <span className="text-sm font-medium text-gray-700">90%</span>
                        </div>
                        <Progress value={90} className="w-full" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Quiz Performance</span>
                            <span className="text-sm font-medium text-gray-700">60%</span>
                        </div>
                        <Progress value={60} className="w-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}