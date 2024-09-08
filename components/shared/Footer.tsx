import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"
import { logo } from "@/public/assets"

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="space-y-4 col-span-1 md:col-span-2">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image
                                src={logo}
                                alt="EduPro Logo"
                                height={38}
                                width={38}
                            />
                            {/*<span className="ml-2 text-xl font-bold text-gray-800">EduPro</span>*/}
                        </Link>
                        <p className="text-sm">
                            Empowering minds through innovative online education. Our mission is to provide accessible, high-quality learning experiences for everyone, anywhere.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Account</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/auth/login" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Log In
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/signup" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <a href="mailto:info@edupro.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    rumi@edupro.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={16} />
                                <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800 transition-colors">
                                    +91 00000 00000
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin size={16} className="mt-1" />
                                <span className="text-gray-600">
                                    123 Education St,<br />
                                    Chennai, 600119<br />
                                    India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} rumi. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Link
                            href="/professional-course"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Explore Professional Courses
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}