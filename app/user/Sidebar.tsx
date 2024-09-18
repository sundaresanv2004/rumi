'use client'
import React, { useState } from 'react'
import { Home, BookOpen, ClipboardList, GraduationCap, BarChart2, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {logo} from '@/public/assets/images'
import Image from "next/image";

const navItems = [
    { icon: Home, text: 'Dashboard', href: '/user/dashboard' },
    { icon: BookOpen, text: 'Courses', href: '/courses' },
    { icon: ClipboardList, text: 'Assignments', href: '/user/assignments' },
    { icon: GraduationCap, text: 'Grades', href: '/grades' },
    { icon: BarChart2, text: 'Analytics', href: '/analytics' },
    { icon: Settings, text: 'Settings', href: '/user/settings' },
]

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside className={cn(
            "bg-gray-900 text-white transition-all duration-300 ease-in-out",
            isCollapsed ? "w-16" : "w-64"
        )}>
            <div className="h-full flex flex-col">
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                    {!isCollapsed && (
                        <span className="text-2xl font-bold text-indigo-400">
                            <Image
                                src={logo}
                                alt={'logo'}
                                height={36}
                            />
                        </span>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        className="text-gray-400 "
                    >
                        {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
                    </Button>
                </div>
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-2 px-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors",
                                        window.location.pathname === item.href && "bg-gray-800 text-white"
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {!isCollapsed && <span>{item.text}</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button className={cn(
                        "w-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors",
                        isCollapsed && "px-2"
                    )}>
                        {isCollapsed ? (
                            <LogOut className="h-5 w-5 mx-auto" />
                        ) : (
                            "Log out"
                        )}
                    </button>
                </div>
            </div>
        </aside>
    )
}