'use client';

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, LogOut, User, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { logo } from "@/public/assets/images"

const navItems = [
    { icon: "🏠", label: "Dashboard", href: "/dashboard" },
    { icon: "📚", label: "Courses", href: "/courses" },
    { icon: "📝", label: "Assignments", href: "/assignments" },
    { icon: "🎓", label: "Grades", href: "/grades" },
    { icon: "📊", label: "Analytics", href: "/analytics" },
    { icon: "👥", label: "Team Collaboration", href: "/teamcollab" },
    { icon: "⚙️", label: "Settings", href: "/settings" },
]

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <TooltipProvider>
            <aside className={cn(
                "bg-gray-900 text-white transition-all duration-300 ease-in-out h-screen",
                isCollapsed ? "w-16" : "w-64"
            )}>
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                        {!isCollapsed && (
                            <span className="text-2xl font-bold text-indigo-400">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={26}
                                    height={26}
                                />
                            </span>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                            className="text-gray-400 hover:text-white hover:bg-gray-800"
                        >
                            {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
                        </Button>
                    </div>
                    <nav className="flex-1 overflow-y-auto py-4">
                        <ul className="space-y-1 px-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center justify-center h-12 w-12 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors",
                                                    mounted && pathname === item.href && "bg-gray-800 text-white",
                                                    !isCollapsed && "w-full justify-start px-4"
                                                )}
                                            >
                                                <span className="text-2xl">{item.icon}</span>
                                                {!isCollapsed && <span className="ml-4">{item.label}</span>}
                                            </Link>
                                        </TooltipTrigger>
                                        {isCollapsed && (
                                            <TooltipContent side="right">
                                                <p>{item.label}</p>
                                            </TooltipContent>
                                        )}
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-4 border-t border-gray-700">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full text-sm text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors",
                                        isCollapsed && "px-2"
                                    )}
                                >
                                    {isCollapsed ? (
                                        <User className="h-5 w-5 mx-auto" />
                                    ) : (
                                        <span className="flex items-center">
                                            <User className="h-5 w-5 mr-2" />
                                            User Profile
                                        </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </aside>
        </TooltipProvider>
    )
}