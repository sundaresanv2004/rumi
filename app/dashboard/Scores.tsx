"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function Scores() {
    const data = [
        { name: 'Quiz 1', score: 85 },
        { name: 'Assignment 1', score: 92 },
        { name: 'Midterm', score: 78 },
        { name: 'Quiz 2', score: 88 },
        { name: 'Assignment 2', score: 95 },
    ]

    return (
        <Card className={"w-1/2"}>
            <CardHeader>
                <CardTitle>Recent Scores</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="score" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}