import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { GradesContent } from './GradesContent'

export default function GradesPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <GradesContent />
                </main>
            </div>
        </div>
    )
}