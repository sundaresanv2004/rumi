"use client";
import { ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import React from "react";

const ComponentRight = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="">
            <aside className="w-80 bg-white p-6 overflow-auto">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mt-5"
                />

                <div className="mb-8 mt-5">
                    <h2 className="text-xl font-bold mb-4">Upcoming Tests</h2>
                    <div className="space-y-4">
                        {[
                            {icon: "💻", subject: "Basic Computer", details: "Class Text 5", date: "15 May"},
                            {icon: "🎨", subject: "UI/UX Design", details: "Class Text 2", date: "22 May"},
                            {icon: "🔤", subject: "English Language", details: "Class Text 1", date: "24 May"},
                            {icon: "⏰", subject: "Time Management", details: "Class Text 3", date: "29 May"},
                        ].map((test, index) => (
                            <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    {test.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold">{test.subject}</h3>
                                    <p className="text-sm text-gray-500">{test.details}</p>
                                </div>
                                <div className="text-orange-500 font-semibold">{test.date}</div>
                                <ChevronRight className="h-5 w-5 text-gray-400 ml-2"/>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                        See All Upcoming Tests
                    </Button>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">Community Groups</h2>
                        <Button size="icon" variant="ghost">
                            <Plus className="h-4 w-4"/>
                        </Button>
                    </div>
                    <div className="space-y-4">
                        {[
                            {icon: "🎨", name: "Design Community, USA", members: "112K Members"},
                            {icon: "🔍", name: "SEO Helpline 24/7", members: "78K Members"},
                            {icon: "🌐", name: "UI/UX Worldwide", members: "498K Members"},
                            {icon: "🎯", name: "UI Hunter", members: "212K Members"},
                        ].map((group, index) => (
                            <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    {group.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{group.name}</h3>
                                    <p className="text-sm text-gray-500">{group.members}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default ComponentRight;