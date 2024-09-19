import React from 'react'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { CourseList } from './CourseList'

export default function CoursesPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Courses</h1>
                            <p className="text-xl text-gray-600">Discover your next learning adventure</p>
                        </div>
                        <CourseList />
                    </div>
                </main>
            </div>
        </div>
    )
}