import { GraduationCap, Users, Calendar, FileText } from 'lucide-react'

interface StatCardProps {
    icon: React.ReactNode
    value: string
    label: string
    bgColor: string
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, bgColor }) => (
    <div className={`rounded-xl p-6 flex items-center space-x-4 ${bgColor}`}>
        <div className="p-3 rounded-full bg-white bg-opacity-30">
            {icon}
        </div>
        <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    </div>
)

const Review = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <h1 className="text-xl font-semibold text-gray-800">Welcome back, John</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={<GraduationCap className="w-6 h-6 text-gray-800" />}
                    value="5,889"
                    label="Total Students"
                    bgColor="bg-green-100"
                />
                <StatCard
                    icon={<Users className="w-6 h-6 text-gray-800" />}
                    value="456"
                    label="Total Teachers"
                    bgColor="bg-yellow-100"
                />
                <StatCard
                    icon={<Calendar className="w-6 h-6 text-gray-800" />}
                    value="12"
                    label="Events"
                    bgColor="bg-purple-100"
                />
                <StatCard
                    icon={<FileText className="w-6 h-6 text-gray-800" />}
                    value="4,245"
                    label="Invoice Status"
                    bgColor="bg-blue-100"
                />
            </div>
        </div>
    )
}

export default Review;