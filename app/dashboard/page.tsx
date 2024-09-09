import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { CourseContent } from './CourseContent'
import { Assignments } from './Assignments'
import { Scores } from './Scores'
import Review from './Review'
// import { Feedback } from './Feedback'
// import { Certifications } from './Certifications'
import { ProgressOverview } from './ProgressOverview'
import { Charts } from './ChartsDashboard'

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
                    <div className="container mx-auto px-6 py-8">
                        <Review />
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
                            <Scores />
                            <ProgressOverview />
                            <CourseContent />
                            <Assignments />
                            {/*<Feedback />*/}
                            {/*<Certifications />*/}
                        </div>
                        <Charts />
                    </div>
                </main>
            </div>
        </div>
    )
}