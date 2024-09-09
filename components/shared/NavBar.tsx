"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import {logo, certificate} from "@/public/assets"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { courses, certificates, learningResources } from '@/constants';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Crown } from 'lucide-react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 z-50 w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image
                                src={logo}
                                alt={logo}
                                height={38}
                                width={38}
                            />
                            {/*<span className="ml-2 text-xl font-bold text-gray-800">remi</span>*/}
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <Image
                                                                src={certificate}
                                                                alt={'certificate'}
                                                            />
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Certificates <Crown className={`h-5 w-5 text-yellow-400 inline`}/>
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Recognize your skills and expertise with an official
                                                                certificate, enhancing your learning journey and career prospects.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ul className="">
                                                    {certificates.map((certificate) => (
                                                        <ListItem
                                                            key={certificate.title}
                                                            title={certificate.title}
                                                            href={certificate.href}
                                                        >
                                                            {certificate.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] ">
                                                {courses.map((course) => (
                                                    <ListItem
                                                        key={course.title}
                                                        title={course.title}
                                                        href={course.href}
                                                    >
                                                        {course.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Learning Resources</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] ">
                                                {learningResources.map((learningResource) => (
                                                    <ListItem
                                                        key={learningResource.title}
                                                        title={learningResource.title}
                                                        href={learningResource.href}
                                                    >
                                                        <Crown className={`h-4 w-4 text-yellow-400 inline mr-2 ${learningResource.pro ? '' : 'hidden'}`}/>
                                                        {learningResource.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>


                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <form className="relative">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-64 pl-8 pr-4 py-1 text-sm"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                        </form>
                        <Link href={"/auth/login"}>
                            <Button variant="ghost" className="ml-4 text-gray-500 hover:text-gray-700">
                                Log in
                            </Button>
                        </Link>
                        <Link href={"/auth/signup"}>
                            <Button className="ml-4">Sign up</Button>
                        </Link>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <form className="relative mr-2">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full pl-8 pr-4 py-1 text-sm"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                        </form>
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <X className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Menu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:hidden">
                                <div className="pt-2 pb-3 space-y-1">

                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4">
                                        <Button variant="ghost" className="text-gray-500 hover:text-gray-700 w-full justify-start">
                                            Log in
                                        </Button>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        <Link href={"/auth/signup"}>
                                            <Button className="w-full">Sign up</Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"