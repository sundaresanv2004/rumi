import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { SettingsContent } from './SettingsContent'

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <SettingsContent />
                </main>
            </div>
        </div>
    )
}