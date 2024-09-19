'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Eye, EyeOff, Cloud, BarChart2, Book, Code, Database, Brain } from 'lucide-react'

export function SettingsContent() {
    const [showPassword, setShowPassword] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-6 gap-2">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="learning">Learning</TabsTrigger>
                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal and academic details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Button>Change Avatar</Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="studentId">Student ID</Label>
                                    <Input id="studentId" placeholder="DS12345" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="major">Major</Label>
                                    <Input id="major" placeholder="Data Science" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="specialization">Specialization</Label>
                                    <Select>
                                        <SelectTrigger id="specialization">
                                            <SelectValue placeholder="Select specialization" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ml">Machine Learning</SelectItem>
                                            <SelectItem value="ai">Artificial Intelligence</SelectItem>
                                            <SelectItem value="data-analytics">Data Analytics</SelectItem>
                                            <SelectItem value="big-data">Big Data</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>Manage your account security and preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <div className="relative">
                                    <Input
                                        id="currentPassword"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your current password"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" placeholder="Enter a new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" placeholder="Confirm your new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                                <Select>
                                    <SelectTrigger id="twoFactor">
                                        <SelectValue placeholder="Select 2FA method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="none">None</SelectItem>
                                        <SelectItem value="sms">SMS</SelectItem>
                                        <SelectItem value="app">Authenticator App</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="darkMode">Dark Mode</Label>
                                    <p className="text-sm text-gray-500">Toggle dark mode on or off</p>
                                </div>
                                <Switch
                                    id="darkMode"
                                    checked={isDarkMode}
                                    onCheckedChange={setIsDarkMode}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Update Account Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Customize how and when you receive notifications</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                                </div>
                                <Switch id="emailNotifications" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="pushNotifications">Push Notifications</Label>
                                    <p className="text-sm text-gray-500">Receive notifications on your device</p>
                                </div>
                                <Switch id="pushNotifications" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="notificationFrequency">Notification Frequency</Label>
                                <Select>
                                    <SelectTrigger id="notificationFrequency">
                                        <SelectValue placeholder="Select frequency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="realtime">Real-time</SelectItem>
                                        <SelectItem value="daily">Daily Digest</SelectItem>
                                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Notification Types</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['New assignments', 'Due date reminders', 'Grade updates', 'Course announcements', 'Forum activity', 'Live session reminders'].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Switch id={`notify-${item.toLowerCase().replace(' ', '-')}`} />
                                            <Label htmlFor={`notify-${item.toLowerCase().replace(' ', '-')}`}>{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Notification Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="privacy">
                    <Card>
                        <CardHeader>
                            <CardTitle>Privacy Settings</CardTitle>
                            <CardDescription>Control your privacy and data sharing preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="profileVisibility">Profile Visibility</Label>
                                    <p className="text-sm text-gray-500">Make your profile visible to other students</p>
                                </div>
                                <Switch id="profileVisibility" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="dataSharing">Data Sharing for Research</Label>
                                    <p className="text-sm text-gray-500">Allow sharing of non-personal data for educational research</p>
                                </div>
                                <Switch id="dataSharing" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dataRetention">Data Retention Period</Label>
                                <Select>
                                    <SelectTrigger id="dataRetention">
                                        <SelectValue placeholder="Select retention period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1year">1 Year</SelectItem>
                                        <SelectItem value="2years">2 Years</SelectItem>
                                        <SelectItem value="3years">3 Years</SelectItem>
                                        <SelectItem value="indefinite">Indefinite</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Third-party Integrations</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['GitHub', 'LinkedIn', 'Kaggle', 'Google Scholar'].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Switch id={`integrate-${item.toLowerCase()}`} />
                                            <Label htmlFor={`integrate-${item.toLowerCase()}`}>{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Update Privacy Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="learning">
                    <Card>
                        <CardHeader>
                            <CardTitle>Learning Preferences</CardTitle>
                            <CardDescription>Customize your learning experience</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="learningPath">Current Learning Path</Label>
                                <Select>
                                    <SelectTrigger id="learningPath">
                                        <SelectValue placeholder="Select learning path" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ds">Data Science</SelectItem>
                                        <SelectItem value="ml">Machine Learning</SelectItem>
                                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                                        <SelectItem value="da">Data Analytics</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="difficultyLevel">Preferred Difficulty Level</Label>
                                <Select>
                                    <SelectTrigger id="difficultyLevel">
                                        <SelectValue placeholder="Select difficulty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                        <SelectItem value="expert">Expert</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Weekly Study Goal (hours)</Label>
                                <Slider defaultValue={[10]} max={40} step={1} />
                            </div>
                            <div className="space-y-2">
                                <Label>Preferred Learning Styles</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Video lectures', 'Interactive coding', 'Reading materials', 'Quizzes', 'Peer discussions', 'Hands-on projects'].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Switch id={`style-${item.toLowerCase().replace(' ', '-')}`} />
                                            <Label htmlFor={`style-${item.toLowerCase().replace(' ', '-')}`}>{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="primaryLanguage">Primary Programming Language</Label>
                                <Select>
                                    <SelectTrigger id="primaryLanguage">
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="python">Python</SelectItem>
                                        <SelectItem value="r">R</SelectItem>
                                        <SelectItem value="sql">SQL</SelectItem>
                                        <SelectItem value="java">Java</SelectItem>
                                        <SelectItem value="scala">Scala</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Learning Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations">
                    <Card>
                        <CardHeader>
                            <CardTitle>Integrations and Tools</CardTitle>
                            <CardDescription>Connect and manage external tools and platforms</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: 'GitHub', icon: Code, description: 'Connect your GitHub account for project submissions' },
                                    { name: 'Kaggle', icon: Database, description: 'Link your Kaggle profile for competitions' },
                                    { name: 'Google Colab', icon: Book, description: 'Enable Google Colab integration for notebooks' },
                                    { name: 'TensorFlow', icon: Brain, description: 'Set up TensorFlow for machine learning projects' },
                                    { name: 'Tableau', icon: BarChart2, description: 'Connect Tableau for data visualization assignments' },
                                    { name: 'AWS Educate', icon: Cloud, description: 'Link your AWS Educate account for cloud computing' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <item.icon className="h-6 w-6 mt-1 text-gray-500" />
                                        <div className="space-y-2">
                                            <Label htmlFor={`integrate-${item.name.toLowerCase()}`}>{item.name}</Label>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                            <Switch id={`integrate-${item.name.toLowerCase()}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Integration Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}