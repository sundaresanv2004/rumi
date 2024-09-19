import React from 'react'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { AssignmentsList } from './AssignmentsList'

export default function AssignmentsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <AssignmentsList />
                    </div>
                </main>
            </div>
        </div>
    )
}