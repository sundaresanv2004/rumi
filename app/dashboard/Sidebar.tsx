"use client";
import React, { useState } from 'react'
import { Home, Book, FileText, Award, Settings, BarChart, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { logo } from "@/public/assets/images"
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

const menuItems = [
    { icon: Home, name: 'Dashboard', href: '/' },
    { icon: Book, name: 'Courses', href: '/courses' },
    { icon: FileText, name: 'Assignments', href: '/assignments' },
    { icon: Award, name: 'Grades', href: '/grades' },
    { icon: BarChart, name: 'Analytics', href: '/analyse' },
    { icon: Settings, name: 'Settings', href: '/settings' },
]

export function Sidebar() {
    const [active, setActive] = useState('Dashboard')
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div
            className={cn(
                "flex flex-col h-screen bg-gray-800 border-r border-gray-200 transition-all duration-300 ease-in-out",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
                {!isCollapsed && (
                    <Image
                        src={logo}
                        alt={logo}
                        height={32}
                    />
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    className="ml-auto text-white"
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-5 w-5 " />
                    ) : (
                        <ChevronLeft className="h-5 w-5" />
                    )}
                </Button>
            </div>
            <Separator className={"mt-2"}/>
            <ScrollArea className="flex-grow">
                <nav className="px-2 py-6 space-y-4">
                    {menuItems.map((item) => (
                        <Button
                            key={item.name}
                            variant={active === item.name ? 'secondary' : 'ghost'}
                            className={cn(
                                'w-full justify-start text-left font-normal text-white',
                                active === item.name && 'font-medium',
                                isCollapsed ? 'px-2' : 'px-4',
                                active === item.name ? 'text-black' : 'text-white'
                            )}
                            onClick={() => setActive(item.name)}
                        >
                            <item.icon className={cn("h-5 w-5", isCollapsed ? 'mr-0' : 'mr-3')} />
                            {!isCollapsed && item.name}
                        </Button>
                    ))}
                </nav>
            </ScrollArea>
        </div>
    )
}