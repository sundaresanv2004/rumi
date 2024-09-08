import { Book, Users, GraduationCap, Clock } from 'lucide-react'

export default function CourseStats() {
    return (
        <div className="w-full p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatItem
                    icon={<Book className="w-8 h-8 text-green-100" />}
                    value="5000+"
                    label="COURSES AVAILABLE"
                />
                <StatItem
                    icon={<Users className="w-8 h-8 text-green-100" />}
                    value="200+"
                    label="EXPERT INSTRUCTORS"
                />
                <StatItem
                    icon={<GraduationCap className="w-8 h-8 text-green-100" />}
                    value="1M+"
                    label="STUDENTS ENROLLED"
                />
                <StatItem
                    icon={<Clock className="w-8 h-8 text-green-100" />}
                    value="10000+"
                    label="HOURS OF CONTENT"
                />
            </div>
        </div>
    )
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
    return (
        <div className="flex items-center space-x-4">
            <div className="bg-green-400 p-3 rounded-full">{icon}</div>
            <div>
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-green-100">{label}</div>
            </div>
        </div>
    )
}